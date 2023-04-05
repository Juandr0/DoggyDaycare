import './welcome.css';
import pawImage from '../paw.png';
import Background from '../assets/Background.jpg';
const Welcome = (props) => {
    const imageUrl = 'https://unsplash.com/photos/DZ3ixpNPt7c';
return (
    <div className='welcomeBody'> 
        <h2 className='row1'>Welcome to the Doggy Daycare platform </h2>
        <h2 className='row2'>A quick and fun way to keep track of the daycare dogs!</h2>
    </div>
  
    )
}


export default Welcome;