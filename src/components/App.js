import React from 'react';

const App = props => {
    return(
        <div className={'app-container'}>
            <h1>{props.message}</h1>
        </div>
    );
};

export default App;
