// components/MapView.jsx
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import MapView from "../compenents/MapView";
import StoreList from "../compenents/StoreList";
import { useState } from "react";

export default function Location() {
  const [selectedStore, setSelectedStore] = useState(null);
  return (
    <div>
      <Header />
      <StoreList onSelect={setSelectedStore} />
      <MapView selectedStore={selectedStore} />

      <Footer />
    </div>
  );
}
