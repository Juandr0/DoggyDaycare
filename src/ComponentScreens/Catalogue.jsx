import React, { useState, useEffect } from 'react';
import './catalogue.css'
const apiUrl = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126'

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
                        <p>{dog.name} the {dog.breed}</p>
                            <img className={'dogImage dogCard ' + isDogPresent(dog)} src={dog.img} alt={dog.name} onClick={() => {cardClickHandler(dog)}} />
                        <p></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const cardClickHandler = (props) => {
    console.log('klick ' + props.name)
} 

const isDogPresent = (prop) => {
    let newClassNames = ""
    if (prop.present) {
        newClassNames = 'isPresent'
    } else {
        newClassNames =  'isNotPresent'
    }

    return newClassNames
}


export default Catalogue;
