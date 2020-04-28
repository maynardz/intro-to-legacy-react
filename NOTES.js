/*
    Differences between functional and class components

    - SYNTAX
        - a class component requires you to extend from 'React.Component' and create a render function which returns the React element. This requires more code but also unlocks the use of some other features

    - STATE
        - because functional components are just plain JS functions, you can't use setState() in them. Functional components are also known as 'stateless components'. Whenever you see a functional (or stateless) component, you can be sure that it does NOT have it's own state.
        - if you need a state in your component you will either need to create a class component, or make sure your parents component is a class component so you can pass down the state via props

    - LIFECYCLE METHODS
        - lifecycle methods are another feature that cannot be used in functional components - they can only be used in class components. Both state and lifecycle methods come from the React.Component you extend from in class components.

    - WHY USE FUNCTIONAL COMPONENTS AT ALL?
        - functional components are easier to read & test because they are plain JS functions without state or lifecycle methods
        - less code
        - they help you implement best practices. It will get easier to seperate container and presentational components because you need to think more about your components state if you don't have access to setState() or lifecycle methods in every component
*/

/*
    CONSTRUCTOR METHOD

    - the constructor method is a method used for creating and intializing an object created within a class.
        - Think about props in React: they are an object that contains key/value pairs of the properties that we pass to a component. To access those key/value pairs in a class component, we need to use the constructor method to construct a new object that will hold the properties being passed to said component

    - you will receieve a syntax error if the class contains more than one occurence of a construcor method

*/

/*
    SUPER

    - the super keyword refers to the parent class. It is used to call the constructor of the parent class and gives us access to the parent's properties and methods

    - If a class component isn't receiving any props, then the props parameter does not technically need to be passed into the construcor/super methods - but the React docs state it is best practice to go ahead and pass the props param in just in case we decide to send props into the component later on.
*/

/*
    LIFECYCLE METHODS

    - React components have whats known as a lifecycle. The different points during the lifecycle of our component are accessible via 'lifecycle methods'
        - The basic lifecycle of a React component is:
            1. Creation
            2. Mounted
            3. Unmounted
            4. Destroyed
        - each of these phases of a components lifecycle have methods that are called automatically at each point in the lifecycle. Those methods give us control over what happens at that point of the lifecycle

        note: lifecycle methods are intended to be a last resort. They are to be used in special cases when other fallbacks like rearranging your components or moving your state around won't work.
            - there are edge cases - like making a fetch call to an API. You can't guarantee that your fetch will resolve before the component finishes mounting. If it did, that would mean you'd be trying to setState on an unmounted component, which will throw you an error. Making your fetch calls in the 'componentDidMount' lifecycle method will guarantee that there is a component to update or set the state of.
*/