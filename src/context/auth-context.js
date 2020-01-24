import React from 'react';
const authContext = React.createContext({
    authenticated:false,
    login:()=> {}  //using authenticated and login as keys
});
export default authContext;