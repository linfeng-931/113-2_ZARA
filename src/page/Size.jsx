import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import { useState } from "react";
import ItemsAvailability from "../compenents/ItemsAvailability";
import MySize from "../compenents/MySize";
import CareAndComposition from "../compenents/CareAndComposition";
import WithdrawedItems from "../compenents/WithdrawedItems";

export default function Size() {
  const [currentTab, setCurrentTab] = useState("itemsavailability");
  const renderContent = () => {
    switch (currentTab) {
      case "itemsavailability":
        return <ItemsAvailability />;
      case "mysize":
        return <MySize />;
      case "careandcomposition":
        return <CareAndComposition />;
      case "withdraweditems":
        return <WithdrawedItems />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      <div className="grid grid-rows-1 grid-cols-8  lg:gap-4 lg:grid-rows-1 lg:grid-cols-12 mt-8">
        <div className="hidden lg:flex lg:flex-col text-left lg:gap-4 lg:col-start-2 lg:col-span-2 text-sm">
          <p className="mb-6 font-bold">商品及尺寸</p>
          <button
            onClick={() => setCurrentTab("itemsavailability")}
            className={`text-left cursor-pointer  ${
              currentTab == "itemsavailability" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            商品庫存
          </button>
          <button
            onClick={() => setCurrentTab("mysize")}
            className={`text-left cursor-pointer  ${
              currentTab == "mysize" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            如何知道我的尺寸？
          </button>
          <button
            onClick={() => setCurrentTab("careandcomposition")}
            className={`text-left cursor-pointer  ${
              currentTab == "careandcomposition" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            成分與保養
          </button>
          <button
            onClick={() => setCurrentTab("withdraweditems")}
            className={`text-left cursor-pointer  ${
              currentTab == "withdraweditems" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            召回商品
          </button>
        </div>
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
