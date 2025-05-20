import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import Delivery from "../compenents/Delivery";
import SplitOrders from "../compenents/SplitOrders";
import DeliveryRestrictions from "../compenents/DeliveryRestrictions";
import { useState } from "react";

export default function DeliveryMethods() {
  const [currentTab, setCurrentTab] = useState("delivery");
  const renderContent = () => {
    switch (currentTab) {
      case "delivery":
        return <Delivery />;
      case "splitorders":
        return <SplitOrders />;
      case "deliveryrestrictions":
        return <DeliveryRestrictions />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      <div className="grid grid-rows-1 grid-cols-8  lg:gap-4 lg:grid-rows-1 lg:grid-cols-12 mt-8">
        <div className="hidden lg:flex lg:flex-col text-left lg:gap-4 lg:col-start-2 lg:col-span-2 text-sm">
          <p className="mb-6 font-bold">寄送</p>
          <button
            onClick={() => setCurrentTab("delivery")}
            className={`text-left cursor-pointer  ${
              currentTab == "delivery" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            配送方式、時間和費用
          </button>
          <button
            onClick={() => setCurrentTab("splitorders")}
            className={`text-left cursor-pointer  ${
              currentTab == "splitorders" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            分次配送的訂單
          </button>
          <button
            onClick={() => setCurrentTab("deliveryrestrictions")}
            className={`text-left cursor-pointer  ${
              currentTab == "deliveryrestrictions"
                ? "opacity-100"
                : "opacity-50"
            }  hover:opacity-100 `}
          >
            寄送地址
          </button>
        </div>
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
