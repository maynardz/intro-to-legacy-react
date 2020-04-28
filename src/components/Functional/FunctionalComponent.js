/*
    - a functional component is a plain JS function that accepts props and returns a React element
    - class components were Reacts way of introducing state into our applications before the hook API was introduced
        - the hook API negated the need for class components and allowed us to set the state of our applications in a functional component.
*/

import React from 'react';

const FunctionalComponent = () => {
    return(
        <div>
            <h1>Hello World!</h1>
        </div>
    )
}

export default FunctionalComponent;