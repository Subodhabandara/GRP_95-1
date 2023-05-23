import React, { useState, useEffect} from "react";
import axios from "axios";

export default function AllDonations(){

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        function getDonations() {
            axios.get("http://localhost:8075/donation/").then((res) => {
                //console.log(res.data);
                setDonations(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDonations();
    }, [])

    return (
        <div className="container">
            <h1>All Donations</h1>
            {
                donations.map(donations => (
                    <div>

                        <h3>{donations.title}</h3>
                        <p>{donations.image}</p>
                        <p>{donations.description}</p>
                        <button className="btn btn-outline-success" type="submit">Edit</button>
                        <button className="btn btn-outline-danger" type="submit">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}