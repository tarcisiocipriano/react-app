import React from 'react';
import './Person.css'

const Person = (props) => {
    
    return (
        <div className="Person">
            <p onClick={props.click}>Hi, I'm {props.name}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;