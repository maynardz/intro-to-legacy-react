import React from 'react';
import FetchDisplay from './FetchDisplay/FetchDisplay';

export default class Fetch extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            img: ''
        }
    }

    componentWillMount() {
        console.log('I am about to say hello');
    };

    componentDidMount() {
        console.log('component mounted');
        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    img: json.url
                })
                console.log(this.state.img);
            })
    };

    render(){
        return(
            <div>
                <h1>Display random image</h1>
                <FetchDisplay url={this.state.img} />
            </div>
        )
    }
}