import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import CommentsDetail from './CommentsDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return React.createElement(
        'div', {
            className: 'ui container comments'
        },
        React.createElement(
            ApprovalCard,
            null,
            React.createElement('h4', null, 'Warning'),
            React.createElement('div', null, 'Are you sure?')
        ),
        React.createElement(
            ApprovalCard,
            null,
            React.createElement(CommentsDetail, {
                author: 'XXX_1',
                dateAndTime: 'Monday at 6:09 AM',
                commentText: 'React is hot',
                profileImage: faker.image.avatar()
            })
        ),
        React.createElement(
            ApprovalCard,
            null,
            React.createElement(CommentsDetail, {
                author: 'XXX_2',
                dateAndTime: 'Today at 9:56 PM',
                commentText: 'Learning curve is hitting up',
                profileImage: faker.image.avatar()
            })
        ),
        React.createElement(
            ApprovalCard,
            null,
            React.createElement(CommentsDetail, {
                author: 'XXX_3',
                dateAndTime: 'Friday at 11:49 AM',
                commentText: "It's Winter",
                profileImage: faker.image.avatar()
            })
        )
    );
};

ReactDOM.render( < App / > , document.querySelector('#root'));