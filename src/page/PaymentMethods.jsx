import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import Payment from "../compenents/Payment";
import { useState } from "react";

export default function PaymentMethods() {
  const [currentTab, setCurrentTab] = useState("payment");
  const renderContent = () => {
    switch (currentTab) {
      case "payment":
        return <Payment />;
      case "secure":
        return <SecurePurchasing />;
      case "invoices":
        return <Invoices />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header />
      <div className="grid grid-rows-1 grid-cols-8  lg:gap-4 lg:grid-rows-1 lg:grid-cols-12 mt-8">
        <div className="hidden lg:flex lg:flex-col text-left lg:gap-4 lg:col-start-2 lg:col-span-2 text-sm">
          <p className="mb-6 font-bold">付款和發票</p>
          <button
            onClick={() => setCurrentTab("payment")}
            className="text-left cursor-pointer"
          >
            付款方式
          </button>
          <button
            onClick={() => setCurrentTab("secure")}
            className="text-left cursor-pointer"
          >
            支付安全
          </button>
          <button
            onClick={() => setCurrentTab("invoices")}
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
