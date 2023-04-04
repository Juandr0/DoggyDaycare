
import './App.css'
import Welcome from './ComponentScreens/Welcome';
import Catalogue from './ComponentScreens/Catalogue';
import Information from './ComponentScreens/Information';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
    const apiUrl = 'https://api.jsonbin.io/v3/b/6422b9c8c0e7653a0597d126';
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
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <Welcome />
                } />
                <Route path="/Dogs" element={
                    <Catalogue dogs={dogs} />
                } />
                <Route path="/Dogs/Info/:id" element=
                    {<Information dogs={dogs} />}
                />

            </Routes>
        </div>
    )
}

export default App;

