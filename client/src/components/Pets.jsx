import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const Pets = () => {
    let [petList, setPetList] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pets")
            .then((res) => {
                console.log("Getting list of pets", res);
                setPetList(res.data.results.sort((a, b) => (a.pettype > b.pettype) ? 1 : -1))
            })
            .catch((err) => {
                console.log("Problem getting pet list***", err);
            });
    }, []);
    return (
        <>
            <Link to="/pets/new" className="btn btn-primary">Add Pet</Link>
            <h2>These pets are looking for a good home</h2>
            <table className="table table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                {petList.map((petObj) => {
                    return (
                        <>
                            <tr>
                                <td>{petObj.name}</td>
                                <td>{petObj.pettype}</td>
                                <td><Link to={`/pets/${petObj._id}`}>details</Link> | <Link to={`/pets/edit/${petObj._id}`}>edit</Link></td>
                            </tr>
                        </>
                    );
                })}
            </table>
        </>
    );
};

export default Pets;
