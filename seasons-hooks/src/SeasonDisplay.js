import './SeasonDisplay.css';
import React from 'react';
const seasonConfig = {
    Summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    Winter: {
        text: 'Burr, its cold!',
        iconName: 'snowflake'
    }
};
const getSeason = function(Latitude, Month) {
    if ((Month) => 3 && Month <= 8) {
        return Latitude > 0 ? 'Summer' : 'Winter';
    } else {
        return Latitude > 0 ? 'Winter' : 'Summer';
    }
};
const SeasonDisplay = function(props) {
    //console.log(props.Latitude);
    const season = getSeason(props.Latitude, new Date().getMonth());
    // const text =
    //     Season === 'Summer' ? 'Lets hit to the beach' : 'Burr, it is chilly';
    // const icon = Season === 'Summer' ? 'sun' : 'snowflake';
    const { text, iconName } = seasonConfig[season];
    return React.createElement(
        'div', {
            className: `season-display ${season}`
        },
        React.createElement('i', {
            className: `icon-left massive ${iconName} icon`
        }),
        React.createElement('h2', {}, text),
        React.createElement('i', {
            className: `icon-right massive ${iconName} icon`
        })
    );
};

export default SeasonDisplay;