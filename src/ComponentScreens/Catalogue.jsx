import React, { useState, useEffect } from 'react';
import './catalogue.css'
import { Link } from "react-router-dom";

const apiUrl = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';
const Catalogue = (props) => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setDogs(data);
            localStorage.setItem('dogs', JSON.stringify(data.record));
        };

        //lägg till LocalStoarge check ifall datan redan finns, isf fetcha inte ny.
        const cachedDogs = localStorage.getItem('dogs');
        if (cachedDogs) {
            console.log('Dogs are cached!')
            setDogs(JSON.parse(cachedDogs));
        } else {
            console.log('No doggos cached, Fetching!');
            fetchData();
        }
    }, []);

    return (
        <div className='dogCard_container'>
            <div className='dogImage_container'>
                {dogs.map((dog, index) => (
                    <div key={index} className='dogImage_wrapper dogCard' >
                        <p>{dog.name} the {dog.breed} {isDogPresent(dog)}</p>
                        <Link className='dogImage dogCard' to="/Dogs/Info">
                            <img className={'dogImage dogCard ' + isDogPresentClass(dog)} src={dog.img} alt={dog.name}/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

const isDogPresentClass = (prop) => {
    let newClassNames = ""
    if (prop.present) {
        newClassNames = 'isPresent'
    } else {
        newClassNames =  'isNotPresent'
    }

    return newClassNames
}


const isDogPresent = (prop) => {
    let isPresent = ""
    if (prop.present) {
        isPresent = 'is present'
    } 

    return isPresent
}


export default Catalogue;
