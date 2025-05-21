// components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";

// 解決 Marker 圖片路徑問題（Vite、CRA 等環境常見）
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView() {
  return (
    <div>
      <Header />
      <MapContainer
        center={[25.033964, 121.564468]} // 台北 101 經緯度
        zoom={13}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[25.033964, 121.564468]}>
          <Popup>台北 101</Popup>
        </Marker>
      </MapContainer>
      <Footer />
    </div>
  );
}
