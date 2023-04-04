import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './ComponentScreens/Welcome';
import Catalogue from './ComponentScreens/Catalogue';
import Information from './ComponentScreens/Information';
import DogInfo from './ComponentScreens/Information';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [currentScreen, setCurrentScreen] = useState('Welcome');

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <Welcome />
                } />
                <Route path="/Dogs" element={
                    <Catalogue />
                } />
                <Route exact path="/Dogs/Info" element={
                    <Information />
                } />
            
            </Routes>
        </div>
    )
}

export default App;

