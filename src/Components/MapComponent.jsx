import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ selectedDistrict }) => {
  const { name, coordinates } = selectedDistrict;

  // Custom component to handle map view updates
  const ChangeMapView = ({ coords }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(coords, 12); // Adjust zoom level if necessary
    }, [coords, map]);
    return null;
  };

  return (
    <MapContainer center={[28.6139, 77.209]} zoom={12} style={{ height: '300px', width: '40%', fontFamily: "DM Sans"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={coordinates}>
        <Popup>{name}</Popup>
      </Marker>
      <ChangeMapView coords={coordinates} />
    </MapContainer>
  );
};

export default MapComponent;
