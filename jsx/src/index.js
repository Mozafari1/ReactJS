// Import the React and ReactDOM libaries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component " A React Component is a function or a class that generates HTML to show the user and handles feedback from the userr"
function get_button_txt() {
    return "Submit";
}
const App = () => {
    //const button_txt = "submit"
    // this is 20215 arrow function
    // return React.createElement(
    //     "div",
    //     null,
    //     "Hello World!",
    //     React.createElement(
    //         "ul",
    //         null,
    //         React.createElement(
    //             "li",
    //             null,
    //             "List 1"
    //         ),
    //         React.createElement(
    //             "li",
    //             null,
    //             "List 2"
    //         ),
    //         React.createElement(
    //             "li",
    //             null,
    //             "List 3"
    //         )
    //     )
    // );
    return ( <
        div >
        <
        label className = "label"
        htmlFor = "name" >
        Name:
        <
        /label>{" "} <
        input id = "name"
        type = "text" / >
        <
        button style = {
            {
                backgroundColor: "blue",
                color: "white"
            }
        } > { " " } { get_button_txt() } { " " } <
        /button>{" "} < /
        div >
    );

    // Take the react component and show it on the screen
};
ReactDOM.render( < App / > , document.querySelector("#root"));