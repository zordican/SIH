import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  return (
    <MapContainer center={[28.6139, 77.209]} zoom={12} style={{ height: '300px', width: '40%', fontFamily: "DM Sans" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={[28.6139, 77.209]}>
        <Popup>
          Delhi
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
