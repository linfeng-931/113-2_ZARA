import {
  clearCartItems,
  selectCartItems,
} from "../redux/cartSlice";
import { Link } from "react-router";
import { ArrowLeft, CircleDollarSign } from "lucide-react";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { auth } from "../firebase/config";
import { useSelector, useDispatch } from "react-redux";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import { useState } from "react";
import SetDelivery from "../compenents/SetDelivery";
import PaymentMethod from "../compenents/PaymentMethod";
import ReviewOrder from "../compenents/ReviewOrder";
import OrderCompelete from "../compenents/OrderCompelete";
import { clearUserCart } from "../firebase/users";

function Purchase(){
    const dispatch = useDispatch();
    let cartItems = useSelector(selectCartItems);
    const [isActive, setisActive] = useState(0);
    const [detail, setDetail] = useState({
        name: '',
        delivery_method: 0,
        phone: '',
        address: '',
        payment_method: 0,
        card: '',
        time: '',
    });
    console.log(detail);

    const [issubmiting, setisSubmiting] = useState(false);

    const handleUpdateActive = (newValue) => {
      setisActive(newValue); // 回傳後更新
    };

    const handleCheckOut = async () => {
    try {
      setisSubmiting(true);
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
        setisActive(3);
        console.log("orderhistory uploaded.");
      }

      dispatch(clearCartItems());
      await clearUserCart(auth.currentUser.uid);
      setisSubmiting(false);
    } catch (err) {
      console.error("Check Out error:", err);
    }
  };

    return(
        <>
        <Header/>
        <div className="mt-20 flex md:flex-col w-full lg:justify-center items-center">
            <ul className="steps steps-vertical md:steps-horizontal w-[60%] mb-20">
                <li className={`step ${isActive >= 0 ? "step-neutral":""}`}><p>Shipping Method</p></li>
                <li className={`step ${isActive >= 1 ? "step-neutral":""}`}><p className={` ${isActive >= 1 ? "":"opacity-50"}`}>Payment Method</p></li>
                <li className={`step ${isActive >= 2 ? "step-neutral":""}`}><p className={` ${isActive >= 2 ? "":"opacity-50"}`}>Review Order</p></li>
                <li className={`step ${isActive >= 3 ? "step-neutral":""}`}><p className={` ${isActive >= 3 ? "":"opacity-50"}`}>Order Complete</p></li>
            </ul>
            {isActive == 0 &&
                <SetDelivery setisActive = {handleUpdateActive} setDetail={setDetail}/>
            }
            {isActive == 1 &&
                <PaymentMethod setisActive = {handleUpdateActive} setDetail={setDetail}/>
            }
            {isActive == 2 &&
              <ReviewOrder items={cartItems} detail={detail}/>
            }

            {isActive == 2 &&
            <div className="text-right">  
              <div className="flex gap-30 w-150">
                  <div
                      className="flex h-12 w-[50%] justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                      hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white"
                      onClick={()=>setisActive(1)}
                  >
                      <ArrowLeft className="h-4 w-4"/>
                      <p>PREVIOUS STEP</p>
                  </div>
                  <div
                    className="flex h-12 w-[50%] justify-around items-center gap-3 bg-[#FA347F] text-white dark:text-black cursor-pointer duration-150
                                    hover:bg-inherit hover:border-[1px] border-[#FA347F] hover:text-[#FA347F]"
                    onClick={handleCheckOut}
                    >
                    <p>COMPLETE PURCHASE</p>
                    <CircleDollarSign className="h-4 w-4"/>
                  </div>    
              </div>
              {issubmiting && 
                <span className="loading loading-dots loading-sm mt-2"></span>
              }
            </div>
            }

            {isActive == 3 &&
              <OrderCompelete detail={detail}/>
            }
        </div>
        <Footer/>
        </>
    )
}
export default Purchase;