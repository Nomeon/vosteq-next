'use client'

import Map from 'react-map-gl';

const MapComponent = () => {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      initialViewState={{
        latitude: 52.356,
        longitude: 4.900,
        zoom: 12
      }}
    />
  )
}

export default MapComponent;