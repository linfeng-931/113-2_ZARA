import {
  clearCartItems,
  selectCartItems,
} from "../redux/cartSlice";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { auth } from "../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import { useState } from "react";
import SetDelivery from "../compenents/SetDelivery";

function Purchase(){
    const dispatch = useDispatch();
    let cartItems = useSelector(selectCartItems);
    const [isActive, setisActive] = useState(0);

    const handleCheckOut = async () => {
    try {
      const currentUser = auth.currentUser;

      if (currentUser && cartItems.length > 0) {
        // 建立訂單物件
        const order = {
          items: cartItems,
          time: new Date().toLocaleString("zh-TW", { hour12: false }),
        };

        const userDocRef = doc(db, "user", currentUser.uid);

        // 將訂單 push 進 orderhistory 陣列中
        await updateDoc(userDocRef, {
          orderhistory: arrayUnion(order),
        });

        console.log("orderhistory uploaded.");
      }

      dispatch(clearCartItems());
    } catch (err) {
      console.error("Check Out error:", err);
    }
  };

    return(
        <>
        <Header/>
        <div className="mt-20 flex md:flex-col w-full justify-center items-center">
            <ul className="steps steps-vertical lg:steps-horizontal w-[60%] mb-20">
                <li className={`step ${isActive >= 0 ? "step-neutral":""}`}><p>Shipping Method</p></li>
                <li className={`step ${isActive >= 1 ? "step-neutral":""}`}><p className={` ${isActive >= 1 ? "":"opacity-50"}`}>Payment Method</p></li>
                <li className={`step ${isActive >= 2 ? "step-neutral":""}`}><p className={` ${isActive >= 2 ? "":"opacity-50"}`}>Review Order</p></li>
                <li className={`step ${isActive >= 3 ? "step-neutral":""}`}><p className={` ${isActive >= 3 ? "":"opacity-50"}`}>Order Complete</p></li>
            </ul>
            {isActive == 0 &&
                <SetDelivery/>
            }

            {isActive == 3 &&
                <div
                className="flex h-12 w-60 justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white"
                onClick={handleCheckOut}
                >
                <p>CHECKOUT NOW</p>
                <ArrowRight className="h-4" />
                </div>
            }
        </div>
        <Footer/>
        </>
    )
}
export default Purchase;