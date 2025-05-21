// components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 解決 Marker 圖片路徑問題（Vite、CRA 等環境常見）
import markerIcon2x from "/image/mappin.png";
import markerIcon from "/image/mappin.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [30, 30],
});

function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 13);
  return null;
}

const storeList = [
  { name: "台北京站店", position: [25.056228581260275, 121.51814095729591] },
  { name: "中和環球店", position: [25.012678954527285, 121.47419564345212] },
  { name: "台北統領店", position: [25.050008152666653, 121.55109994267876] },
  { name: "台北101店", position: [25.043165316643726, 121.56311623943293] },
  { name: "桃園台茂店", position: [25.05984675512968, 121.28524309978158] },
  { name: "桃園大江店", position: [25.006342336159907, 121.22653490706838] },
];

export default function MapView({ selectedStore }) {
  return (
    <MapContainer
      center={[25.033964, 121.564468]} // 台北 101 經緯度
      zoom={13}
      style={{ height: "60vh", width: "80vw" }}
      className="m-auto mt-10 z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {selectedStore && <ChangeView coords={selectedStore.position} />}

      {storeList.map((store, index) => (
        <Marker key={index} position={store.position}>
          <Popup>{store.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
