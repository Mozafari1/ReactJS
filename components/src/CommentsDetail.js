import React from "react";


const CommentsDetail = props => {
    return (React.createElement("div", {
        className: "comment"
    }, React.createElement("a", {
        href: "/",
        className: "avatar"
    }, React.createElement("img", {
        alt: "avatar",
        src: props.profileImage
    })), React.createElement("div", {
        className: "content"
    }, React.createElement("a", {
        href: "/",
        className: "author"
    }, props.author), React.createElement("div", {
        className: "metadata"
    }, React.createElement("span", {
        className: "date"
    }, props.dateAndTime)), React.createElement("div", {
        className: "text"
    }, props.commentText))));
};

export default CommentsDetail;