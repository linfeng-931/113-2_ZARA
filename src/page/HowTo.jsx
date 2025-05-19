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
      <div className="grid grid-rows-1 grid-cols-8  lg:gap-4 lg:grid-rows-1 lg:grid-cols-12 mt-8">
        <div className="hidden lg:flex lg:flex-col text-left lg:gap-4 lg:col-start-2 lg:col-span-2 text-sm">
          <p className="mb-6 font-bold">換貨、退貨和退款</p>
          <button
            onClick={() => setCurrentTab("return")}
            className="text-left cursor-pointer"
          >
            如何退貨
          </button>
          <button
            onClick={() => setCurrentTab("exchange")}
            className="text-left cursor-pointer"
          >
            換貨方式
          </button>
          <button
            onClick={() => setCurrentTab("refund")}
            className="text-left cursor-pointer"
          >
            退貨款項
          </button>
          <button
            onClick={() => setCurrentTab("special")}
            className="text-left cursor-pointer"
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
