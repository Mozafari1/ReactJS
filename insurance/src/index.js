import React from 'react';
import ReactDOM from 'ReactDOM';

const App = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    };
};
ReactDOM.render( < App / > , document.querySelector('#root'));