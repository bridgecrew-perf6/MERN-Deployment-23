import axios from 'axios';
import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom';

const NewPet = () => {
    let [name, setName] = useState("");
    let [pettype, setPetType] = useState("");
    let [description, setDescription] = useState("");
    let [skill1, setSkill1] = useState("");
    let [skill2, setSkill2] = useState("");
    let [skill3, setSkill3] = useState("");
    let [formErrors, setFormErrors] = useState({})
    const history = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        let forminfo = {name, pettype, description, skill1, skill2, skill3}
        axios.post("http://localhost:8000/api/pets/", forminfo)
            .then((res)=>{
                if (res.data.error){
                    setFormErrors(res.data.error.errors);
                } else {
                console.log("Successfully created pet", res)
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
            <h2>Know a pet needing a home?</h2>
            <div className="">
                <form onSubmit={submitHandler}>
                        <label>Pet Name:</label>
                        <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
                        <p className="text-danger">{formErrors.name?.message}</p>
                        <label>Pet Type:</label>
                        <input type="text" className="form-control" onChange={(e)=>{setPetType(e.target.value)}}/>
                        <p className="text-danger">{formErrors.pettype?.message}</p>
                        <label>Description:</label>
                        <input type="text" className="form-control" onChange={(e)=>{setDescription(e.target.value)}}/>
                        <p className="text-danger">{formErrors.description?.message}</p>
                        <h5 className="mt-3">Optional</h5>
                        <label>Skill 1:</label>
                        <input type="text" className="form-control" onChange={(e)=>{setSkill1(e.target.value)}}/>
                        <label>Skill 2:</label>
                        <input type="text" className="form-control" onChange={(e)=>{setSkill2(e.target.value)}}/>
                        <label>Skill 3:</label>
                        <input type="text" className="form-control" onChange={(e)=>{setSkill3(e.target.value)}}/>
                        <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </>
    )
}

export default NewPet