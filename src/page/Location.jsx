// components/MapView.jsx
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import MapView from "../compenents/MapView";
import StoreList from "../compenents/StoreList";
import { useState } from "react";

export default function Location() {
  const [selectedStore, setSelectedStore] = useState(null);
  const [show, setShow] = useState("商店列表");

  const renderContent = () => {
    switch (show) {
      case "商店列表":
        return <StoreList onSelect={setSelectedStore} />;
      case "地圖":
        return <MapView selectedStore={selectedStore} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="flex flex-row gap-4 lg:hidden px-8 mb-4 cursor-pointer">
        <button
          onClick={() => setShow("商店列表")}
          className={`${show === "商店列表" ? "opacity-100" : "opacity-50"}`}
        >
          商店列表
        </button>
        <button
          onClick={() => setShow("地圖")}
          className={`${show === "地圖" ? "opacity-100" : "opacity-50"}`}
        >
          地圖
        </button>
      </div>

      {/* 手機板 */}

      <div className="flex flex-col items-center lg:hidden relative px-8">
        {show === "商店列表" && <StoreList onSelect={setSelectedStore} />}
        {show === "地圖" && <MapView selectedStore={selectedStore} />}
      </div>
      {/* 電腦版 */}
      <div className="hidden lg:flex lg:flex-row lg:gap-4 px-8">
        <StoreList onSelect={setSelectedStore} />
        <MapView selectedStore={selectedStore} />
      </div>

      <Footer />
    </div>
  );
}
