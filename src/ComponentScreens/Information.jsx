import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Apifetch from "../Components/Apifetch";
import './CSS/information.css'

function Information() {
    const { id } = useParams();
    let dogs = ([])

    const cachedDogs = localStorage.getItem('dogs');
    if (cachedDogs) {
        dogs = cachedDogs;
    } else {
        dogs = Apifetch();
    }
    dogs = JSON.parse(dogs);
    console.log(dogs);

    const ageCheck = (prop) => {
        if (prop > 1) {
            return 'years'
        } else return 'year'
    }


    return (
        <div className="singleDogCard">
            <h1>{dogs[id].name}</h1>  <br />
            <li> {dogs[id].age} {ageCheck(dogs[id].age)} old {dogs[id].sex} {dogs[id].breed}</li>
            <img src={dogs[id].img} />
            <ul>
             
                <li> Chipnumber: {dogs[id].chipNumber}</li>
            </ul>
        <div className = 'singleDogCard_ownerInfo'>
        <h2>Owner</h2>
            <ul className="">
                <li>{dogs[id].owner.name} {dogs[id].owner.lastName}</li>
                <li>{dogs[id].owner.phoneNumber}</li>
                <li></li>
            </ul>
        </div>
           
        </div>
    );
}

export default Information;