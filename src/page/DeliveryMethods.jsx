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
      <div className="flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-12 mt-8 lg:gap-4">
        <div className="flex flex-col text-left gap-4 mb-8 px-[80px] lg:p-0 lg:mb-0 text-sm lg:col-start-2 lg:col-span-2">
          <div className="mb-2 lg:mb-4 text-lg lg:text-md font-semibold">
            寄送
          </div>
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
