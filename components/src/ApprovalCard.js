import React from 'react';

const ApprovalCard = function(props) {
    return React.createElement(
        'div', {
            className: 'ui card'
        },
        React.createElement(
            'div', {
                className: 'content'
            },
            props.children
        ),
        React.createElement(
            'div', {
                className: 'extra content'
            },
            React.createElement(
                'div', {
                    className: 'ui two buttons'
                },
                React.createElement(
                    'div', {
                        className: 'ui basic green button'
                    },
                    'Approve'
                ),
                React.createElement(
                    'div', {
                        className: 'ui basic red button'
                    },
                    'Decline'
                )
            )
        )
    );
};

export default ApprovalCard;