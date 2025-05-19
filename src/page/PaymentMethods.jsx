import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import { useState } from "react";

export default function PaymentMethods() {
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
            付款方式
          </button>
          <button
            onClick={() => setCurrentTab("exchange")}
            className="text-left cursor-pointer"
          >
            支付安全
          </button>
          <button
            onClick={() => setCurrentTab("refund")}
            className="text-left cursor-pointer"
          >
            發票
          </button>
        </div>
        {renderContent()}
      </div>
      <Footer />
    </div>
  );
}
