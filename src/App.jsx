import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './ComponentScreens/Welcome';
import Catalogue from './ComponentScreens/Catalogue';
import Information from './ComponentScreens/Information';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
    const [currentScreen, setCurrentScreen] = useState('Welcome');


    // const screenHandler = (screenName) => {
    //     setCurrentScreen(screenName);
    // }

    // switch (currentScreen) {
    //     case 'Welcome':
    //         displayedComponent = <Welcome screenHandler={screenHandler}/>;
    //         break;

    //     case 'Catalogue':
    //         displayedComponent = <Catalogue screenHandler={screenHandler}/>;
    //         break;

    //     case 'Information':
    //         displayedComponent = <Information screenHandler={screenHandler}/>;
    //         break;

    //     default: 
    //         displayedComponent = <Welcome screenHandler={screenHandler}/>;
    //         break;
    // }

    return (
        <div>
            <Navbar />
                <Routes>
                    <Route path="/" element={
                        <Welcome />
                    } />
                    <Route path="/dogs" element={
                        <Catalogue />
                    }  />
                    <Route path="/Information" element={
                        <Information />
                    }  />
                </Routes>
        </div>
    )
}

export default App;

