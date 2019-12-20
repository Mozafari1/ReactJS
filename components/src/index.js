import React, { createElement } from "react";
import ReactDOM from "react-dom";

const App = () => {
    return React.createElement("div", {
        className: "ui container comments"
    }, React.createElement("div", {
        className: "comment"
    }, React.createElement("a", {
        href: "/",
        className: "avatar"
    }, React.createElement("img", {
        alt: "avatar"
    })), React.createElement("div", {
        className: "content"
    }, React.createElement("a", {
        href: "/",
        className: "author"
    }, "xxx"), React.createElement("div", {
        className: "metadata"
    }, React.createElement("span", {
        className: "dat"
    }, " Today at 9: 00 AM ")), React.createElement("div", {
        className: "text"
    }, " ReactJS is hot "))));
};

ReactDOM.render( < App / > , document.querySelector("#root"));