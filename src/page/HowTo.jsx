import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import Return from "../compenents/Return";
import Exchange from "../compenents/Exchange";
import Refund from "../compenents/Refund";
import Special from "../compenents/Special";
import { useState } from "react";

export default function HowTo() {
  const [currentTab, setCurrentTab] = useState("return");
  const renderContent = () => {
    switch (currentTab) {
      case "return":
        return <Return />;
      case "exchange":
        return <Exchange />;
      case "refund":
        return <Refund />;
      case "special":
        return <Special />;
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
            換貨、退貨和退款
          </div>
          <button
            onClick={() => setCurrentTab("return")}
            className={`text-left cursor-pointer  ${
              currentTab == "return" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            如何退貨
          </button>
          <button
            onClick={() => setCurrentTab("exchange")}
            className={`text-left cursor-pointer  ${
              currentTab == "exchange" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            換貨方式
          </button>
          <button
            onClick={() => setCurrentTab("refund")}
            className={`text-left cursor-pointer  ${
              currentTab == "refund" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            退貨款項
          </button>
          <button
            onClick={() => setCurrentTab("special")}
            className={`text-left cursor-pointer  ${
              currentTab == "special" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            退貨特殊條款
          </button>
        </div>
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
