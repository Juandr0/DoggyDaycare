import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Apifetch from "../Components/Apifetch";
import './CSS/information.css'
import Fullstop from "../assets/full-stop.png"

function Information() {
    const [dogAtDaycare, setDogAtDaycare] = useState();
    const { id } = useParams();
    let dogs = ([])


    useEffect(() => {
        if (dogs[id].present) {
            setDogAtDaycare('atDaycare')
        } else {
            setDogAtDaycare('notAtDaycare')
        }
    }, [dogs, id]);

    const cachedDogs = localStorage.getItem('dogs');
    if (cachedDogs) {
        dogs = cachedDogs;
    } else {
        dogs = Apifetch();
    }
    dogs = JSON.parse(dogs);



    const ageCheck = (prop) => {
        if (prop > 1) {
            return 'years'
        } else return 'year'
    }






    return (
        <div>
            <div className={`singleDogCard ${dogAtDaycare}`}>
                <h1>{dogs[id].name}</h1>
                <li> {dogAtDaycare === 'atDaycare' ? `Is currently at the daycare` : `Is not at the daycare`}</li>  <br />
                <li> {dogs[id].age} {ageCheck(dogs[id].age)} old {dogs[id].sex} {dogs[id].breed}</li>

                <img src={dogs[id].img} />
                <ul>
                    <li> Chipnumber: {dogs[id].chipNumber}</li>
                    
                </ul>
                <div className='singleDogCard_ownerInfo'>
                    <h2>Owner</h2>
                    <ul className="">
                        <li>{dogs[id].owner.name} {dogs[id].owner.lastName}</li>
                        <li>{dogs[id].owner.phoneNumber}</li> <br />
                    </ul>
                </div>
            </div>
          
        </div>
    );
}

export default Information;
