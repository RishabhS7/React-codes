import React, { useEffect,useRef,useContext } from 'react';// using use ref hook from react

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
  const toggleBtnRef = useRef(null); //react.createRef
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);


  //toggleBtnRef.current.click();
  useEffect(() => {   // runs after the return JSX ode hs renderred sucsessfully
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();


    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      
       <button onClick={context.login}>Log in</button> 
      
    </div>
  );                                 //never wrap a JSX code instead wrap a function
  };

export default React.memo(cockpit);
