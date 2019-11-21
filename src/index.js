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
//Progressive Web app

import React from 'react' 
// this will import react library
// import React, {Component} from 'react' -> class SkiDayCounter extends React.Component { you can now get rid of React before component
// import {Component} from 'react' // it used to be the sytax but now it gives error say React must be use when you we use JSX
import ReactDOM from 'react-dom'
//this is going to provide us with render method for render our react component and react element to the dom
//import { render } from 'react-dom' -> ReactDOM.render()

//=======================================
// first we want to render our data 
 import App from './App';
 ReactDOM.render(<App />, document.getElementById('root'));
//=======================================

// var style = {
//     backgroundColor: 'Orange',
//     fontFamily: 'Arial'
// }

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
//
//component types
//stateles functional component 
//statefull  class component always extend from component class and have a return value

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
// let skiData = {
//     total: 50,
//     powder: 20,
//     backcountry: 10,
//     goal: 100
// }

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

//======06
// const Staff = () => {
//     return (
//         <div>
//             <h1>Librarian.</h1>
//         </div>
//     )
// }
// //======07
// const Library = () => {
//     return (
//         <div>
//             <h1>Lincoln Corner</h1>
//             <Book title="The Longest Ride" author="Nicholas Sparks" pages={789}/>
//             <Book title="Harry Potter" author="JK Rowling " pages={1089}/>
//             <Book title="Reaction of React" author="Facebook" pages={589}/>
//             <p>How to use parent component (Library) to display multiple different book components.</p>
//         </div>
//     )
// }
// //=======08
// const Book = ({title, author, pages}) => {
//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>By: {author}</p>
//             <p>Pages: {pages} pages</p> 
//         </div>
//     )
// }
//=====For 06
// ReactDOM.render(
//     <div>
//         <Staff />
//         <Staff />
//     </div>,  
//     document.getElementById('root')
// )
//=======For 07 and 08
// ReactDOM.render(
//     <Library />,  
//     document.getElementById('root')
// )

//===

/*   Funcional Components                 VS            Class Components
simple functions                          || more feature Rich
use Func components as much as posible    || Maintain their own private data - state
absence of 'this' keyword                 || complex UI logic
solution without using state              || provide lifecycle hooks 
mainly responsible for UI                 || statful/smart/Container
Stateless/Dumb/Presentational             ||

*/

//======================================
//Let's make this a little bit more of a real world use case by creating an array of data and then displaying books based on that data

let bookList = [
    {"title": "The Longest Ride", "author": "Nicholas Sparks", "pages": "789"},
    {"title": "Harry Potter", "author": "JK Rowling", "pages": "1045"},
    {"title": "Reaction of React", "author": "Facebook", "pages": "584"}
]
//======---------09
// const Library = ({books}) => {
//     return (
//         <div>
//             <h1>Data from List, File or Database</h1>
//             {books.map(
//                 // book => <Book title={book.title} author={book.author} pages={book.pages}/> //the problem with this is we can't identify or point a specific book div
//                 // //which will help track which of these components are updating, and rendering with React
//                 (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}/>// now we have unique key with every book
//             )}
//             <p>Here we don't need to use braces if we use the ES6 syntax and return the content right after the arrow sign</p>
//         </div>
//     )
// }

//One of the most important concepts in React is STATE. Components can have a local state but in order to use this, we need to use in the ES6 class component.
// one way to add local STATE to this component is to use the constructor method.

//====----------10
// class Library extends React.Component{
//     constructor(props) {
//         super(props)  // super method here which is going to create a new instance of this class
//         this.state = { open: false } //Now STATE is just going to be an object with several different keys on it
//     }
//     render () {
//         //const books = this.props.books
//         const {books} = this.props //now you dont have to add this.props.books.map books destructures
//         return (
//             <div>
//                 {books.map(
//                     // book => <Book title={book.title} author={book.author} pages={book.pages}/> //the problem with this is we can't identify or point a specific book div
//                     // //which will help track which of these components are updating, and rendering with React
//                     (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}/>// now we have unique key with every book
//                 )}
//                 <p>this Library is {this.state.open ? 'open' : 'closed'}.</p>
//             </div>
//         )
//     }
// }

//====-------------11
// We know how to add state variables to our React applications, but how do we change state? Well,
// we're going to use a function called setState, which is going to change the state variable within our component
// class Library extends React.Component{
//     constructor(props) {
//         super(props)  // super method here which is going to create a new instance of this class
//         this.state = { open: false } //Now STATE is just going to be an object with several different keys on it
//         // whenever we're using a constructor method, we need to bind this. to some button you know
//         this.toggleOpenClosed = this.toggleOpenClosed.bind(this) // The next thing I need to do here is whenever we're using a constructor method, we need to bind this. So, in other words,
//          //I need to say this.toggleOpenClosed, and we'll set this equal to this.toggleOpenClosed.bind this.What this'll do is it'll make this accessible within the context of this custom method.
//     }
//     toggleOpenClosed(){
//         this.setState({
//             open: !this.state.open
//         })
//     }
//     render () {
//         //const books = this.props.books
//         const {books} = this.props //now you dont have to add this.props.books.map books destructures
//         return (
//             <div>
//                 {books.map(
//                     // book => <Book title={book.title} author={book.author} pages={book.pages}/> //the problem with this is we can't identify or point a specific book div
//                     // //which will help track which of these components are updating, and rendering with React
//                     (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}/>// now we have unique key with every book
//                 )}
//                 <p>this Library is {this.state.open ? 'open' : 'closed'}.</p>
//                 <button onClick={this.toggleOpenClosed}>Change</button>
//             </div>
//         )
//     }
// }

//======12              WITH A CALL BACK FUNCTION INSTEAD OF STATE OBJECT
//** SetState is asynchronous ASYNCHRONOUS. So if you are relying on the previous state to set a new value, you can use a callback function inside of setState.
//because you see lots of callback function instead of state objects.

// class Library extends React.Component{
//     constructor(props) {
//         super(props)  // super method here which is going to create a new instance of this class
//         this.state = { open: false } //Now STATE is just going to be an object with several different keys on it
//         // whenever we're using a constructor method, we need to bind this. to some button you know
//         this.toggleOpenClosed = this.toggleOpenClosed.bind(this) //
//     }
//     toggleOpenClosed(){
//         this.setState(previousState => ({ //And this'll make sure that this.setState, no matter how long it takes, will work as expected.
//             open: !previousState.open
//         }))
//     }
//     render () {
//         //const books = this.props.books
//         const {books} = this.props //now you dont have to add this.props.books.map books destructures
//         return (
//             <div>
//                 {books.map(
//                     // book => <Book title={book.title} author={book.author} pages={book.pages}/> //the problem with this is we can't identify or point a specific book div
//                     // //which will help track which of these components are updating, and rendering with React
//                     (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}/>// now we have unique key with every book
//                 )}
//                 <p>this Library is {this.state.open ? 'open' : 'closed'}.</p>
//                 <button onClick={this.toggleOpenClosed}>Change</button>
//             </div>
//         )
//     }
// }

//======13              same as above but in Clean and shorter syntax 
//

// class Library extends React.Component{
// //    // constructor(props) {
// //    //     super(props)  // super method here which is going to create a new instance of this class
// //    //     this.state = { open: false } //Now STATE is just going to be an object with several different keys on it
// //    //     // whenever we're using a constructor method, we need to bind this. to some button you know
// //   //     this.toggleOpenClosed = this.toggleOpenClosed.bind(this) //
// //    // }
    
//     //static property called state to our component.we can get rid off entire block of code above
//     state = { open: false}

// //    // toggleOpenClosed(){
// //    //     this.setState(previousState => ({ //And this'll make sure that this.setState, no matter how long it takes, will work as expected.
// //    //         open: !previousState.open
// //    //     }))
// //    // }
//     toggleOpenClosed = () => { //because arrow functions will automatically bind this inside of the context of this function
//         this.setState(previousState => ({ //And this'll make sure that this.setState, no matter how long it takes, will work as expected.
//             open: !previousState.open
//         }))
//     }
//     render () {
// //        //const books = this.props.books
//         const {books} = this.props //now you dont have to add this.props.books.map books destructures
//         return (
//             <div>
//                 {books.map(
// //                    // book => <Book title={book.title} author={book.author} pages={book.pages}/> //the problem with this is we can't identify or point a specific book div
// //                    // //which will help track which of these components are updating, and rendering with React
//                     (book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages}/>// now we have unique key with every book
//                 )}
//                 <p>this Library is {this.state.open ? 'open' : 'closed'}.</p>
//                 <button onClick={this.toggleOpenClosed}>Change</button>
//             </div>
//         )
//     }
// }

// ////=======09   OR  10  OR 11 OR 12 OR 13
// const Book = ({title, author, pages}) => {
//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>By: {author}</p>
//             <p>Pages: {pages} pages</p> 
//         </div>
//     )
// }


// ReactDOM.render(
//     <Library books={bookList}/>,  
//     document.getElementById('root')
// )
//===============================================
//===============================================
//===============================================
//======14              Pass state as props to the child component and conditional rendering 
//When working with a React application, it's a good rule of thumb to keep state in the root of the tree. 
//In other words, your root component, in this case, the library component, should hold all of the state variables and pass down that information to the children.
// search in docs idea of 'lifting state up'

// class Library extends React.Component{
//     state = {
//         open: true,
//         freeBookmark: true,
//         hiring: true
//     }

//     toggleOpenClosed = () => { //because arrow functions will automatically bind this inside of the context of this function
//         this.setState(previousState => ({ //And this'll make sure that this.setState, no matter how long it takes, will work as expected.
//             open: !previousState.open
//         }))
//     }
//     render () {
//         //const books = this.props.books
//         const {books} = this.props //now you dont have to add this.props.books.map books destructures
//         return (
//             <div>
//                 {this.state.hiring ? <Hiring /> : <NotHiring />}
//                 {books.map(
//                     // book => <Book title={book.title} author={book.author} pages={book.pages}/> //the problem with this is we can't identify or point a specific book div
//                     // //which will help track which of these components are updating, and rendering with React
//                     (book, i) => 
//                     <Book 
//                         key={i} 
//                         title={book.title}
//                         author={book.author} 
//                         pages={book.pages}
//                         freeBookmark={this.state.freeBookmark}/>
//                 )}
//                 <p>this Library is {this.state.open ? 'open' : 'closed'}.</p>
//                 <button onClick={this.toggleOpenClosed}>Change</button>
//             </div>
//         )
//     }
// }

// const Hiring = () => <div><p>The Library is Hiring. Go To www.library.com/jobs for more.</p></div>
// const NotHiring = () => 
//     <div>
//         <p>The Library is not hiring.Check back later for more info.</p>
//     </div>
// //=======14
// const Book = ({title, author, pages, freeBookmark}) => {
//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>By: {author}</p>
//             <p>Pages: {pages} pages</p> 
//             <p>Free Bookmark Today: {freeBookmark ? 'Yes!' : "No!" }</p>
//         </div>
//     )
// }


// ReactDOM.render(
//     <Library books={bookList}/>,  
//     document.getElementById('root')
// )
//=================================
//=================================
// So mounting and unmounting just means whenever it's added to the dom, and whenever it's taken away.

//Component lifecycle methods are only available but now you can also with function which we do later
// whenever the props or state of app changes render will ve called
// so the next method is constructor.the constructor is called before the component is mounted that why its a great place to initialized the state
// you can also bind event handler methods using constructor

// class Library extends React.Component{
//     state = {
//         open: true,
//         freeBookmark: true,
//         hiring: true,
//         data: [],
//         loading: false
//     }

//     componentDidMount() {
//         console.log("The component is now mounted!")/// always show this msg in console
//         this.setState({loading: true})
//         fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//                 .then(data => data.json())// store this into data
//                 .then(data => this.setState({data, loading: false}))// set the state 'data' with it 
//     }
    
//     componentWillUpdate() {
//         console.log("The component just updated") // show whenever something change in component for here example try open and close library button
//     }

//     toggleOpenClosed = () => { //because arrow functions will automatically bind this inside of the context of this function
//         this.setState(previousState => ({ //And this'll make sure that this.setState, no matter how long it takes, will work as expected.
//             open: !previousState.open
//         }))
//     }
//     render () {
//         //const books = this.props.books
//         const {books} = this.props //now you dont have to add this.props.books.map books destructures
//         return (
//             <div>
//                 {this.state.loading ? "Loading..."
//                 :<div>
//                     {this.state.data.map(product => {
//                         return (
//                             <div key={product.id}>
//                                 <h3>Library Product of the Week!</h3>
//                                 <h4>{product.name}</h4>
//                                 <img src={product.image} height={100} alt={product.name}/>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 }
//                 {this.state.hiring ? <Hiring /> : <NotHiring />}
//                 {books.map(
//                     // book => <Book title={book.title} author={book.author} pages={book.pages}/> //the problem with this is we can't identify or point a specific book div
//                     // //which will help track which of these components are updating, and rendering with React
//                     (book, i) => 
//                     <Book 
//                         key={i} 
//                         title={book.title}
//                         author={book.author} 
//                         pages={book.pages}
//                         freeBookmark={this.state.freeBookmark}/>
//                 )}
//                 <p>this Library is {this.state.open ? 'open' : 'closed'}.</p>
//                 <button onClick={this.toggleOpenClosed}>Change</button>
//             </div>
//         )
//     }
// }

// const Hiring = () => <div><p>The Library is Hiring. Go To www.library.com/jobs for more.</p></div>
// const NotHiring = () => 
//     <div>
//         <p>The Library is not hiring.Check back later for more info.</p>
//     </div>
// //=======14
// const Book = ({title, author, pages, freeBookmark}) => {
//     return (
//         <div>
//             <h2>{title}</h2>
//             <p>By: {author}</p>
//             <p>Pages: {pages} pages</p> 
//             <p>Free Bookmark Today: {freeBookmark ? 'Yes!' : "No!" }</p>
//         </div>
//     )
// }


// ReactDOM.render(
//     <Library books={bookList}/>,  
//     document.getElementById('root')
// )

//================================
//================================ remove above
//================================ forms submit 

// class FavoriteColorForm extends React.Component {
//     state = { value: ''}
//     newColor = e =>//this is our custom function to set the value
//         this.setState({ value: e.target.value })
//     submit = e => {
//         console.log(`New Color: ${this.state.value}`)// this is called template string 
//         e.preventDefault()
//     }
//     render() {
//         return(
//             <form onSubmit={this.submit}>
//                 <label>Favorite Color:</label>
//                 <input type="color" 
//                 onChange={this.newColor}/>
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }
// ReactDOM.render(
//     <FavoriteColorForm />,
//     document.getElementById('root')
// )


//================================
//================================ remove above
//================================ defaults props

class Library extends React.Component{
    // static defaultProps = {//this is a static property
    //     books:[//Well, we're adding this so that in the event that there's no value available for books, we're going to use this default value instead
    //         {"title": "Harry Potter", "author": "Jk Rowling", "pages": 100 }
    //     ]//instead of our application breaking down because we don't supply those data values, instead we're going to just display the defaults.
    // }
    state = {
        open: true,
        freeBookmark: true,
        hiring: true,
        data: [],
        loading: false
    }
    toggleOpenClosed = () => { //because arrow functions will automatically bind this inside of the context of this function
        this.setState(previousState => ({ //And this'll make sure that this.setState, no matter how long it takes, will work as expected.
            open: !previousState.open
        }))
    }
    render () {
        //const books = this.props.books
        const {books} = this.props //now you dont have to add this.props.books.map books destructures
        return (
            <div>
                {this.state.loading ? "Loading..."
                :<div>
                    {this.state.data.map(product => {
                        return (
                            <div key={product.id}>
                                <h3>Library Product of the Week!</h3>
                                <h4>{product.name}</h4>
                                <img src={product.image} height={100} alt={product.name}/>
                            </div>
                        )
                    })}
                </div>
                }

                {books.map(
                    // book => <Book title={book.title} author={book.author} pages={book.pages}/> //the problem with this is we can't identify or point a specific book div
                    // //which will help track which of these components are updating, and rendering with React
                    (book, i) => 
                    <Book 
                        key={i} 
                        title={book.title}
                        author={book.author} 
                        pages={book.pages}
                        freeBookmark={this.state.freeBookmark}/>
                )}
                <p>this Library is {this.state.open ? 'open' : 'closed'}.</p>
                <button onClick={this.toggleOpenClosed}>Change</button>
            </div>
        )
    }
}
// We can also add default properties to the book component and umc
const Book = ({title="No Title Provided", author="No Author Provided", pages=0, freeBookmark}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages} pages</p> 
            <p>Free Bookmark Today: {freeBookmark ? 'Yes!' : "No!" }</p>
        </div>
    )
}

ReactDOM.render(
    <Library books={bookList}/>,  
    document.getElementById('root')
)