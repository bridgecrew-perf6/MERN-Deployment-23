import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from 'axios'

const EditPet = () => {
    let [onePet, setOnePet] = useState({
        name: "",
        pettype: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
    })
    let [formErrors, setFormErrors] = useState({})
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/pets/${id}`)
            .then((res) => {
                console.log("Retrieved details on pet", res);
                setOnePet(res.data.results);
            })
            .catch((err) => {
                console.log("Error getting pet detail", err);
            });
    }, []);
    const changeHandler = (e)=>{
        setOnePet({
            ...onePet,
            [e.target.name]: e.target.value
        })
    }
    const updatePet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, onePet)
            .then((res)=>{
                if (res.data.error){
                    setFormErrors(res.data.error.errors);
                } else {
                console.log("Successfully updated pet", res)
                history.push("/")
                }
            })
            .catch((err)=>{
                console.log("Error creating pet", err)
            })
    }
    return (
        <>
            <Link to="/" className="btn btn-info">Home</Link>
            <h2>Edit {onePet.name}</h2>
            <div className="">
                <form onSubmit={updatePet}>
                        <label>Pet Name:</label>
                        <input type="text" name="name" className="form-control" onChange={changeHandler} value={onePet.name}/>
                        <p className="text-danger">{formErrors.name?.message}</p>
                        <label>Pet Type:</label>
                        <input type="text" name="pettype" className="form-control" onChange={changeHandler} value={onePet.pettype}/>
                        <p className="text-danger">{formErrors.pettype?.message}</p>
                        <label>Description:</label>
                        <input type="text" name="description" className="form-control" onChange={changeHandler} value={onePet.description}/>
                        <p className="text-danger">{formErrors.description?.message}</p>
                        <h5 className="mt-3">Optional</h5>
                        <label>Skill 1:</label>
                        <input type="text" name="skill1" className="form-control" onChange={changeHandler} value={onePet.skill1}/>
                        <label>Skill 2:</label>
                        <input type="text" name="skill2" className="form-control" onChange={changeHandler} value={onePet.skill2}/>
                        <label>Skill 3:</label>
                        <input type="text" name="skill3" className="form-control" onChange={changeHandler} value={onePet.skill3}/>
                        <button type="submit" className="btn btn-primary mt-3">Edit Pet</button>
                </form>
            </div>
        </>
    )
}

export default EditPet