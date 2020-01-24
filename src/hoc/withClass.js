import React from 'react';//simple higher order component which sets up wrap on the div on my component

const withClass = (WrappedComponent,className)=>{

    return props=> (
        <div className = {className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;