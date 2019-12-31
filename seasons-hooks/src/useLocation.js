import { useState, useEffect } from 'react';

export default () => {
    const [Latitude, setLatitude] = useState(null);
    const [errorMSG, setErrorMSG] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLatitude(position.coords.latitude),

            (error) => setErrorMSG(error.message)
        );
    }, []);
    return [Latitude, errorMSG];
};