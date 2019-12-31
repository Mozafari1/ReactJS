import React from 'react';

const Loader = function(props) {
    return React.createElement(
        'div', {
            className: 'ui active dimmer'
        },
        React.createElement(
            'div', {
                className: 'ui large text loader'
            },
            props.msg
        )
    );
};
Loader.defaultProps = {
    msg: 'Loading...'
};
export default Loader;