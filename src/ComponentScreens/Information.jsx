import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Apifetch from "../Components/Apifetch";
import './CSS/information.css';

function Information() {
    const [dogAtDaycare, setDogAtDaycare] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const dogs = Apifetch();

    useEffect(() => {
        // When dogs data is available, set loading to false
        if (dogs.length) {
            setLoading(false)
        }
    }, [dogs]);

    useEffect(() => {
        // Check if the dog is present at daycare and set the state accordingly
        if (dogs.length && dogs[id] && dogs[id].present) {
            setDogAtDaycare('atDaycare')
        } else {
            setDogAtDaycare('notAtDaycare')
        }
    }, [dogs, id]);
    


    const ageCheck = (prop) => {
        if (prop > 1) {
            return 'years'
        } 
        return 'year'
    }

    // Render loading state if the dogs data is not available yet
    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }

    // Render dog information when the dogs data is available
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
