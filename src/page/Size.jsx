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
      <div className="flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-12 mt-8 lg:gap-4">
        <div className="flex flex-col text-left gap-4 mb-8 px-[80px] lg:p-0 lg:mb-0 text-sm lg:col-start-2 lg:col-span-2">
          <div className="mb-2 lg:mb-4 text-lg lg:text-md font-semibold">
            商品及尺寸
          </div>
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
