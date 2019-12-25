import './SeasonDisplay.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// This is a functional components
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         function(position) {
//             console.log(position);
//         },
//         (err) => console.log(err)
//     );

//     return <div > Latitude: < /div>;
// };

// This is a class based Components
class App extends React.Component {
    // Initializ the state. This function is JS not a React and this will be automaticlly called before anything else
    // constructor(props) {
    //     super(props); // super is a reference to the parent's constructor function
    //     // there is two ways to initializ the state method
    //     this.state = { Latitude: null, Longitude: null, errormsg: '' }; // the object inside the {} is the state object
    //         // This part is moved to componentDidMount() where I use lifecycle -------------------
    //         // window.navigator.geolocation.getCurrentPosition(
    //         //     (position) => {
    //         //         // To update state we have to call setState
    //         //         this.setState({
    //         //             Latitude: position.coords.latitude,
    //         //             Longitude: position.coords.longitude
    //         //         });
    //         //     },

    //         //     (error) => {
    //         //         this.setState({
    //         //             errormsg: error.message
    //         //         });
    //         //     }
    //         // );
    //-----------------------
    // }
    state = { Latitude: null, Longitude: null, errormsg: '' }; // this is equal to contructor
    componentDidMount() {
            window.navigator.geolocation.getCurrentPosition(
                (position) =>
                this.setState({
                    Latitude: position.coords.latitude,
                    Longitude: position.coords.longitude
                }),

                (error) =>
                this.setState({
                    errormsg: error.message
                })
            );
        }
        //--------------
    renderContent() {
            if (this.state.errormsg && !this.state.Latitude && !this.state.Longitude) {
                return React.createElement('div', {}, 'Error: ', this.state.errormsg);
            } else if (
                this.state.Latitude &&
                this.state.Longitude && // this one I don't use
                !this.state.errormsg
            ) {
                return React.createElement(SeasonDisplay, {
                    Latitude: this.state.Latitude
                });
            } else {
                return React.createElement(
                    'div', {},
                    React.createElement(Loader, {}, 'Please accept location request')
                );
            }
        }
        // render is a React function that must be define.
    render() {
        return React.createElement(
            'div', {
                className: 'border blue'
            },
            this.renderContent()
        );
    }
}
ReactDOM.render(
    React.createElement(App, null),
    document.querySelector('#root')
);