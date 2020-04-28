/*
    - class components use the 'class' syntax that was introduced in ES6
    - the render() method MUST be defined in class components. All other methods (constructor, super, state, props & lifecycle methods) are all optional

        - if constructor is called, then you MUST pass in the super method
*/

import React from 'react';
// import React, {Component} from 'react';

class ClassComponent extends React.Component{
// class ClassComponent extends Component{
    render() {
        return(
            <div>
               <h1>Hello World!</h1>
            </div>
        )
    }
}

export default ClassComponent;