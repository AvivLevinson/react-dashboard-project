import React, { useEffect } from "react";
import './Map.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useData } from "../../context/DataContext";

const mapPosition = [31.801447 ,34.643497];

const Map = () => {
  const { usersData } = useData();

  useEffect(() => {
    console.log("useEffect -> Map ");
  });

  return (
    <MapContainer center={mapPosition} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {usersData.map((user) => {
        console.log(user)
        const {address:{cord:{lat, lon}}} = user;
        const position = [lat,lon]
        return (
          <Marker position={position}>
            <Popup
            >
              {user.name} <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
