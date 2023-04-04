import { useParams } from "react-router";
import { useState, useEffect } from "react";

function Information(props) {
   
    
    const {id} = useParams();

    console.log( props.dogs);
    console.log(id);
    console.log(props.dogs[id].name);

   
    return (
        <div>
            <h1>{props.dogs[id].name}</h1>
        </div>
    );
}

export default Information;