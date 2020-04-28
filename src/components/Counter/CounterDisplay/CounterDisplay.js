import React from 'react';

export default function CounterDisplay(props) {
    console.log(props)
    return(
        <div>
            <h1>Count: {props.number}</h1>
            <button onClick={props.decrement}>Decrement</button>
            <button onClick={props.increment}>Increment</button>
        </div>
    )
}