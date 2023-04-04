import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Apifetch from "../Components/Apifetch";

function Information() {
    const {id} = useParams();
    let dogs = ([])

    const cachedDogs = localStorage.getItem('dogs');
    if (cachedDogs) {
        dogs=cachedDogs;
    } else {
        dogs=Apifetch();
    }
    dogs = JSON.parse(dogs);

    console.log(dogs);

   
    return (
        <div>
          
           
          <h1>{dogs[id].name}</h1>  <br/>
            <img src={dogs[id].img}/>
            <ul>
                <li> {dogs[id].age} years old {dogs[id].sex} {dogs[id].breed}</li>
                <li> Chipnumber: {dogs[id].chipNumber}</li>
            </ul>

            <h2>Owner</h2>
            <ul>
                <li>{dogs[id].owner.name} {dogs[id].owner.lastName}</li>
                <li>Phone number: {dogs[id].owner.phoneNumber}</li>
                <li></li>
            </ul>
           
            


        </div>
    );
}

export default Information;