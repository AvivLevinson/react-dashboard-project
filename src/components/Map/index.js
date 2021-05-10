import React, { useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useData } from "../../context/DataContext";

const mapPosition = [31.4117257 , 35.0818155];

const Map = () => {
  const { usersData } = useData();

  useEffect(() => {
    console.log("useEffect -> Map ");
  });

  return (
    <MapContainer center={mapPosition} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {usersData.map((user) => {
        console.log(user)
        const {location:{latitude, longitude}} = user;
        const position = [latitude,longitude]
        return (
          <Marker position={position}>
            <Popup>
              {user.userName} <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
