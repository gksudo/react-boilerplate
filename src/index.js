import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
    <App message={'hi'} />,
    document.getElementById('app')
);

module.hot.accept();
