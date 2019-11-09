// // the code that show you a welcome page in starting server lets comment these lines and start our own magic
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react' 
// this will import react library
// import React, {Component} from 'react' -> class SkiDayCounter extends React.Component { you can now get rid of React before component
// import {Component} from 'react' // it used to be the sytax but now it gives error say React must be use when you we use JSX
import ReactDOM from 'react-dom'
//this is going to provide us with render method for render our react component and react element to the dom
//import { render } from 'react-dom' -> ReactDOM.render()

var style = {
    backgroundColor: 'Orange',
    fontFamily: 'Arial'
}

//----------===> 01
// const title = React.createElement( // React Element 
//     // this will take in three arguments
//     'h1',
//     {id: 'title', className: 'header', style: style},
//     'Hello World'
// )

//----------===> 02
// const title = React.createElement( // unorderd element
//     // this will take in three arguments
//     'ul',
//     {id: 'title', className: 'header', style: style},
//     React.createElement(
//         'li',
//         {},
//         'item on our list'
//     )
// )

//for----------====> 01 --OR-- 02
// ReactDOM.render( //to render this element to the dom
//     // take two argument 
//     title, // what do we want to render
//     document.getElementById('root') // where do we want to render this 
//     // public/index.html
//     //<div id="root"></div>

//     )

//=======================================

    // JSX now get rid off with title element 
    // now we are looking JSX which are more cleaner and easier syntax

// ReactDOM.render( 
//     // this is JSX syntax tag based syntax consider h1 only in simple
//     <div style={style}>
//         <h1 id="heading-title">Hello world!</h1>
//         <p>This is React Learning.</p>
//     </div>,
//     document.getElementById('root') // where do we want to render this 
//     )
//========================================

//The reason that React has become so popular though is due to its component based structure

// lets create our first component
//Now the most important method, the most critical thing to understand about React components is all of them have a render method.

// class Message extends React.Component {
//     render() {
//         return (
//             <div style= {style}>
//                 <h1>Hello Dev</h1>
//             </div>
//         )
//     }
// }

// ReactDOM.render( <Message />, document.getElementById('root'))

//==========================================
// now what if we want to show dynamic messages to do this we using react props

// class Greeting extends React.Component {
//     render() {
//         console.log(this.props) //{name: "Zair", age: 23}
//         return (
//             <div style= {style}>
//                 <h1 style={{color: this.props.color}}>
//                     Hello {this.props.name} 
//                 </h1>
//                 <p>You are {this.props.age} years Old and yet too much to do</p>
//             </div>
//         )
//     }
// }
// // the Props object can contain as many properties as you'd like
// //whenever we're passing in a number or a Boolean, something that's not a string, we need to use that JSX expression. e.i. age here
// // The tricky thing here is I need to pass an object, a style object, into this expression, so hence the two sets of curly braces
// ReactDOM.render( <Greeting name="Zair" age={23}  color="brown"/>, document.getElementById('root'))

//==================================================
let skiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

//----------------===> 03 
// class SkiDayCounter extends React.Component {
//     render() {
//         const{total, powder, backcountry, goal} = this.props
//         return(
//             <section>
//                 <p>Total Days: {this.props.total}</p>
//                 <p>Powder Days: {this.props.powder}</p>
//                 <p>Backcountry Days: {this.props.backcountry}</p>
//                 <p>Goal: {this.props.goal}</p>
                
//                 <h3>So through Destructuring, ES6 Destructuring, we're able to use the slightly shorter syntax.</h3>
//                 <p>Total Days: {total}</p>
//                 <p>Powder Days: {powder}</p>
//                 <p>Backcountry Days: {backcountry}</p>
//                 <p>Goal: {goal}</p>
//             </section>
//         )
//     }
// }

//----------------===> 04 
// class SkiDayCounter extends React.Component {
//     // lets create a methods getPercent and calcGoalProgress to calculate our progress, within our class component
//     getPercent = decimal => {
//         return decimal * 100 + '%'
//     }
//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total/goal)
//     }
//     // So this is how we would add custom methods to a React component, using an ES6 class. 
//     render() {
//         const{total, powder, backcountry, goal} = this.props
//         console.log(this.props)
//         return(
//             <section style= {style}>
//                 <p>Total Days: {total}</p>
//                 <p>Powder Days: {powder}</p>
//                 <p>Backcountry Days: {backcountry}</p>
//                 <p>Goal: {goal}</p>
//                 <p>Progress: {this.calcGoalProgress(total, goal)}</p>
//             </section>
//         )
//     }
// }

//----------------===> 05 
// So far, we've created components as ES6 classes but 
// that's not the only way to create a React component. You can also create a component as a function.

    //now we can't use these function inside of another function so we are gonna create these as a seprate functions by putting 'const'

//     const getPercent = decimal => {
//         return decimal * 100 + '%'
//     }
//     const calcGoalProgress = (total, goal) => {
//         return getPercent(total/goal)
//     }

// const SkiDayCounter = (props) => {
// // we dont have access to 'this' this.props here but we can access props object
// // or you can destructure these properties like
// // const SkiDayCounter = ({total, powder, backcountry, goal}) => { // and now you can use this without props 
//     return(
//         <section>
//             <p>Total Days: {props.total}</p>
//             <p>Powder Days: {props.powder}</p>
//             <p>Backcountry Days: {props.backcountry}</p>
//             <p>Goal: {props.goal}</p>
//             <p>Progress: {calcGoalProgress(props.total, props.goal)}</p>
//         </section>
//     )

// }

//for----------====> 03 --OR-- 04 --OR-- 05
// ReactDOM.render(
//     <SkiDayCounter 
//         total={skiData.total}
//         powder={skiData.powder}
//         backcountry={skiData.backcountry}
//         goal={skiData.goal}/>,
//     document.getElementById('root')
// )

//===============================================
//===============================================
//===============================================


//So far, we've created a component and we've created some custom methods to live on that component.
// Now, really the power of React comes from composing multiple different components.



const Library = () => {
    return (
        <div>
            <h1>Lincoln Corner</h1>
        </div>git
    )
}

ReactDOM.render(
    <Library />,  
    document.getElementById('root')
)
ReactDOM.render(
    <Library />,  
    document.getElementById('root')
)

//===