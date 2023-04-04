import React, { useState, useEffect } from 'react';
import './catalogue.css'
import { Link } from "react-router-dom";


const Catalogue = (props) => {

    const dogs = props.dogs
    return (
        <div className='dogCard_container'>
            <div className='dogImage_container'>
                {dogs.map((dog, index) => (
                    <div key={index} className='dogImage_wrapper dogCard' >
                        <p>{dog.name} the {dog.breed} {isDogPresent(dog)}</p>
                        <Link className='dogImage dogCard' to={`/Dogs/Info/${index}`}>
                            <img className={'dogImage dogCard ' + isDogPresentClass(dog)} src={dog.img} alt={dog.name} />
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
        newClassNames = 'isNotPresent'
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
