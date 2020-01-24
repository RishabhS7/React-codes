import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';
// person is the class based components
class Person extends Component {  //works oth functional and class based components
  constructor(props){
    super(props); //always add super
    this.inputElementRef = React.createRef();
  }
  static contextType = AuthContext; //gives access to context without usage of props


  componentDidMount(){
    //this.inputElement.focus();
    this.inputElementRef.current.focus();// gives access to current element
     console.log(this.context.authenticated);//giving access to context even at the places where we cancelAnimationFrame,t wrap the component
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        
          
          {this.context.authenticated ? <p>Authenticted!</p>: <p>Please log in</p>}
            
        
        {this.props.isAuth ? <p>Authenticted!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          ref = {this.inputElementRef}
         // ref={(inputEl)=>{this.inputElement=inputEl}}//setting up a refrence
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}
Person.PropTypes ={
  click:PropTypes.func,  // for click i want to get to fcution
  name:PropTypes.string,  // name should be a string
  age:PropTypes.number,  //given prop types to assgn for to use your components correctly
  changed:PropTypes.func  // changed should be functions
} // before sending the package to other developers

export default withClass(Person,classes.Person);
