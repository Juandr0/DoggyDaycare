import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './ComponentScreens/Welcome';
import Catalogue from './ComponentScreens/Catalogue';
import Information from './ComponentScreens/Information';
import Navbar from './Components/Navbar';

function App() {
    const [currentScreen, setCurrentScreen] = useState('Welcome');

    let displayedComponent = null;

    const screenHandler = (screenName) => {
        setCurrentScreen(screenName);
    }
    
    switch (currentScreen) {
        case 'Welcome':
            displayedComponent = <Welcome screenHandler={screenHandler}/>;
            break;
      
        case 'Catalogue':
            displayedComponent = <Catalogue screenHandler={screenHandler}/>;
            break;

        case 'Information':
            displayedComponent = <Information screenHandler={screenHandler}/>;
            break;

        default: 
            displayedComponent = <Welcome screenHandler={screenHandler}/>;
            break;
    }

    return(
        <div>
            <Navbar screenHandler={screenHandler}/>
            {displayedComponent}
        </div>
    )
}

export default App;
