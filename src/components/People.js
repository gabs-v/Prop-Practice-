import React from 'react';

const People = (props) => {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p> Hair Color: {props.hairColor} </p>
        </div>
    )
}

export default People; 