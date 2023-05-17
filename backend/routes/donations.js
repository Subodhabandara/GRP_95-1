const router = require("express").Router();
let Donation = require("../models/Donation");

//add donation
router.route("/add").post((req,res)=>{

    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;

    const newDonation = new Donation({

        title,
        image,
        description

    })

    //exception handling
    newDonation.save().then(()=>{
        res.json("Donation Added")
    }).catch((err)=>{
        console.log(err);
    })

})


//fetch all donations
router.route("/").get((req,res)=>{

    //exception handling
    Donation.find().then((donations)=>{
        res.json(donations)
    }).catch((err)=>{
        console.log(err);
    })
})


//update donation
router.route("/update/:id").put(async (req, res) => {
    let donationId  = req.params.id;
    const {title, image, description} = req.body;

    const updateDonation = {
        title,
        image,
        description
    }

    //exception handling
    const update = await Donation.findByIdAndUpdate(donationId, updateDonation)
    .then(() => {
        res.status(200).send({status: "Donation updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })

})


//delete donation
router.route("/delete/:id").delete(async (req, res) => {
    let donationId = req.params.id;

    //exception handling
    await Donation.findByIdAndDelete(donationId)
    .then(() => {
        res.status(200).send({status: "Donation deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete donation", error: err.message});
    })
})


//fetch one donation
router.route("/get/:id").get(async (req, res) => {
    let donationId = req.params.id;

    //exception handling
    const donation = await Donation.findById(donationId)
    .then((donation) => {
        res.status(200).send({status: "Donation fetched", donation: donation})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get donation", error: err.message});
    })
})


module.exports = router;