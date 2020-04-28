import React from 'react';

let style = {
    height: '400px',
    width: 'auto'
}

const FetchDisplay = props => {
    console.log(props);

    let reload = () => {
        window.location.reload(false)
    }

    return(
        <div>
            <img src={props.url} alt='cute doggo' style={style} />
            <button onClick={reload}>New Image</button>
        </div>
    )
}

export default FetchDisplay;