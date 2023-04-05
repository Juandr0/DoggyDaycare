import React, { useState, useEffect } from 'react';
import './CSS/catalogue.css'
import { Link } from "react-router-dom";
import Apifetch from '../Components/Apifetch';


const Catalogue = () => {

    const [loading, setLoading] = useState(false);

    const dogs = Apifetch();
    
    useEffect(() => {
        if (dogs.length) {
            setLoading(false)
        }
    }, [dogs]);

    if (loading){
        return (
            <h1>Loading..</h1>
        )
    } else {
        return (
            <div className='dogCard_firstContainer'>
                <div className='dogImage_container'>
                    {dogs.map((dog, index) => (
                        <div key={index} className='dogImage_wrapper dogCard' >
                            <p>{dog.name} the {dog.breed}</p>
                            <Link className='dogImage dogCard' to={`${index}`}>
                                <img className={'dogImage dogCard ' + isDogPresentClass(dog)} src={dog.img} alt={dog.name} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }







};

const isDogPresentClass = (prop) => {
    let newClassNames = ""
    if (prop.present) {
        newClassNames = 'isPresent'
    } else {
        newClassNames = 'isNotPresent'
    }

    return newClassNames
}


export default Catalogue;
