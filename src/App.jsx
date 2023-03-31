import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './ComponentScreens/Welcome';
import Catalogue from './ComponentScreens/Catalogue';
import Information from './ComponentScreens/Information';
import Navbar from './Components/Navbar';



function App() {
    
    const WELCOME = 'Welcome', CATALOGUE = 'Catalogue', INFORMATION = 'Information';
    const [currentScreen, setCurrentScreen] = useState(WELCOME);

    let displayedComponent = null;
    
    switch (currentScreen) {
        case WELCOME:
            displayedComponent = <Welcome {...() => setCurrentScreen(WELCOME) }/>;
            break;
      
        case CATALOGUE:
            displayedComponent = <Catalogue  {...() => setCurrentScreen(CATALOGUE)} />;
            break;

        case INFORMATION:
            displayedComponent = <Information{...() => setCurrentScreen(INFORMATION)} />;
            break;

        default: 
            displayedComponent = <Welcome{...() => setCurrentScreen(INFORMATION)} />;
            break;
      }

 return(
  
  <div>

    {displayedComponent}
  </div>



 )
}



export default App
