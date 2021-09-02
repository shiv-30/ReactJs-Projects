import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import './Demo.css'


const Demo = ({name}) => {
    return  <div className="main_style"><h1>Hello-{name}</h1></div>    
}

// const Demo = (props) => {
//     return  <div className="main_style"><h1>Hello-{props.name}</h1></div>    
// }
// class Demo extends Component {
//     render() {
//         return  <div className="main_style"><h1>Hello-{this.props.name}</h1></div>       
//     }
// }

// in class use this.props.name 
// in functional component props.name 
// props value cannot be changed by its child

export default Demo;