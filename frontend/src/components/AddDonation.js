import React,{useState} from "react";
import axios from "axios";

export default function AddDonation(){

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    function sendData(e){

        e.preventDefault();
        
        const newDonation ={
            title,
            image,
            description
        }

        axios.post("http://localhost:8075/donation/add", newDonation).then(()=>{
            alert("Donation Added")
        }).catch((err)=>{
            alert(err)
        })
    }
    
    return(
        <div className="container">
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter a Title" 
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Image</label>
                    <input type="file" className="form-control" id="image"  aria-describedby="imageHelp"
                    onChange={(e)=>{
                        setImage(e.target.value);
                    }}/>
                    <div id="imageHelp" className="form-text">Choose file</div>
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter a Description about the Hazard Donation"
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </div>
    )

}