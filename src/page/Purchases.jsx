import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import OnlinePurchases from "../compenents/OnlinePurchases";
import OrderStatus from "../compenents/OrderStatus";
import EditOrder from "../compenents/EditOrder";
import OrderIncidences from "../compenents/OrderIncidences";
import IpodOrder from "../compenents/IpodOrder";

import { useState } from "react";

export default function Purchases() {
  const [currentTab, setCurrentTab] = useState("onlinepurchases");
  const renderContent = () => {
    switch (currentTab) {
      case "onlinepurchases":
        return <OnlinePurchases />;
      case "orderstatus":
        return <OrderStatus />;
      case "editorder":
        return <EditOrder />;
      case "orderincidences":
        return <OrderIncidences />;
      case "ipodorder":
        return <IpodOrder />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      <div className="grid grid-rows-1 grid-cols-8  lg:gap-4 lg:grid-rows-1 lg:grid-cols-12 mt-8">
        <div className="hidden lg:flex lg:flex-col text-left lg:gap-4 lg:col-start-2 lg:col-span-2 text-sm">
          <p className="mb-6 font-bold">我的購買</p>
          <button
            onClick={() => setCurrentTab("onlinepurchases")}
            className={`text-left cursor-pointer  ${
              currentTab == "onlinepurchases" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            網上購買
          </button>
          <button
            onClick={() => setCurrentTab("orderstatus")}
            className={`text-left cursor-pointer  ${
              currentTab == "orderstatus" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            我的線上訂單狀態
          </button>
          <button
            onClick={() => setCurrentTab("editorder")}
            className={`text-left cursor-pointer  ${
              currentTab == "editorder" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            修改或取消網路訂單
          </button>
          <button
            onClick={() => setCurrentTab("orderincidences")}
            className={`text-left cursor-pointer  ${
              currentTab == "orderincidences" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            我的訂單相關狀況
          </button>
          <button
            onClick={() => setCurrentTab("ipodorder")}
            className={`text-left cursor-pointer  ${
              currentTab == "ipodorder" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            使用商店裝置進行網上購買
          </button>
        </div>
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
