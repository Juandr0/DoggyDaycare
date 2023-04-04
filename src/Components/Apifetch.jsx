import { useState, useEffect } from "react";

const Apifetch = () => {
    const apiUrl = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setDogs(data);
            localStorage.setItem('dogs', JSON.stringify(data.record));
        };

        const cachedDogs = localStorage.getItem('dogs');
        if (cachedDogs) {
            console.log('Dogs are cached!')
            setDogs(JSON.parse(cachedDogs));
        } else {
            console.log('No doggos cached, Fetching!');
            fetchData();
            
        }
    }, []);


    return(
        dogs
    )
}


export default Apifetch;