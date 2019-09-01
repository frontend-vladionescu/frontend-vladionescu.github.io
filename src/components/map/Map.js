import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import mapStyles from './map.styles';

const Map = withGoogleMap(() => {
    const myLatLng = {lat: 46.749519, lng: 23.528709};

    return (
        <GoogleMap
            defaultZoom={18}
            defaultCenter={myLatLng}
            defaultOptions={{styles: mapStyles}}
        >
            <Marker position={myLatLng}/>
        </GoogleMap>
    );
});

export default Map;
