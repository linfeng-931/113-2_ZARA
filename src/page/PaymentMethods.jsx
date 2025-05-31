import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import Payment from "../compenents/Payment";
import Invoices from "../compenents/Invoices";
import SecurePurchasing from "../compenents/SecurePurchasing";
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
      <div className="flex flex-col lg:grid lg:grid-rows-1 lg:grid-cols-12 mt-8 lg:gap-4">
        <div className="flex flex-col text-left gap-4 mb-8 px-[80px] lg:p-0 lg:mb-0 text-sm lg:col-start-2 lg:col-span-2">
          <div className="mb-2 lg:mb-4 text-lg lg:text-md font-semibold">
            付款和發票
          </div>
          <button
            onClick={() => setCurrentTab("payment")}
            className={`text-left cursor-pointer  ${
              currentTab == "payment" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            付款方式
          </button>
          <button
            onClick={() => setCurrentTab("secure")}
            className={`text-left cursor-pointer  ${
              currentTab == "secure" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
          >
            支付安全
          </button>
          <button
            onClick={() => setCurrentTab("invoices")}
            className={`text-left cursor-pointer  ${
              currentTab == "invoices" ? "opacity-100" : "opacity-50"
            }  hover:opacity-100 `}
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
