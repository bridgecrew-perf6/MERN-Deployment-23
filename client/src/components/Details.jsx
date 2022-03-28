import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

const PetDetails = () => {
    let [petDetail, setPetDetail] = useState({});
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log("Retrieved details on pet", res);
                setPetDetail(res.data.results);
            })
            .catch((err) => {
                console.log("Error getting pet detail", err);
            });
    }, []);
    const adoptPet = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then((res)=>{
                console.log("Pet adopted", res)
                history.push("/")
            })
            .catch((err)=>{
                console.log("Problem adopting pet", err)
            })
    }
    return (
        <>
            <Link to="/" className="btn btn-info">Home</Link>
            <h3>Details about: {petDetail.name}</h3>
            <div className="card">
                <p>
                    <b>Pet Type:</b> {petDetail.pettype}
                </p>
                <p>
                    <b>Description:</b> {petDetail.description}
                </p>
                <p><b>Skills:</b> {petDetail.skill1}<br/>{petDetail.skill2}<br/>{petDetail.skill3}</p>
                <button className="btn btn-danger" onClick={adoptPet}>Adopt {petDetail.name}</button>
            </div>
        </>
    );
};

export default PetDetails;
