import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        function(position) {
            console.log(position);
        },
        (err) => console.log(err)
    );

    return <div > Latitude: < /div>;
};

ReactDOM.render(
    React.createElement(App, null),
    document.querySelector('#root')
);