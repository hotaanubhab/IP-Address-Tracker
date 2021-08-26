import { useState } from "react";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from "react-leaflet";

const Mapcontent = ({ center }) => {
    
    const customMarker = new L.divIcon({ 
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fill-rule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>`,
        className: "",
        iconSize: [24, 40],
        iconAnchor: [23.5, 50],});
    return (
      <div className="leaflet-container">
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={center} icon={customMarker}>
            <Popup>
              Latitide: {center[0]} <br /> Longitude: {center[1]}
            </Popup>
          </Marker>
          <MapConsumer>
            {(map) => {
              map.flyTo(center, 13);
              return null;
            }}
          </MapConsumer>
        </MapContainer>
      </div>
    );
  };
  
  export default Mapcontent;