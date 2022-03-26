import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import "../../App.css";
const Faq = () => {
    return (
        <div className='faq'>
            <Container>
            <h2>I) How React Work?</h2>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. React internally creates, updates, and destroys instances to figure out the DOM elements tree that needs to be rendered to the browser. When working with class components, it's common to refer to their browser-rendered DOM elements as component instances. </p>
            <hr />
            <h2>II) How UseState Work?</h2>
            <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value and another function to update this value.The useState Hook allows you to declare only one state variable (of any type) at a time. useState takes the initial value of the state variable as an argument. The initial value will be assigned only on the initial render </p>
            </Container>
        </div>
    );
};

export default Faq;