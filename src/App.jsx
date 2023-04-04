
import './App.css'
import Welcome from './ComponentScreens/Welcome';
import Catalogue from './ComponentScreens/Catalogue';
import Information from './ComponentScreens/Information';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';

import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <Welcome />
                } />
                <Route path="/Dogs" element={
                    <Catalogue/>
                } />
               <Route path="/Dogs/Info/:id" element=
               {<Information/>} />
            
            </Routes>
        </div>
    )
}

export default App;

