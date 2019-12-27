// this code only works on console
import React from 'react';
const App = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    };
};

export default App;