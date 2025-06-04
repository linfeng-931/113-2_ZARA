import { useEffect, useState, Link } from "react";
import { useNavigate } from "react-router";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import { getUserProfile } from "../firebase/users";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import { auth } from "../firebase/config";
import Profile from "../compenents/auth/detail/Profile";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import OrderHistory from "../compenents/auth/detail/OrderHistory";
import { clearFavoriteItems } from "../redux/favSlice";
import {  NotepadText } from "lucide-react";

function UserDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  let cartItems = useSelector(selectCartItems);
  console.log(cartItems);

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isActive, setisActive] = useState(0);

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUser = auth.currentUser;

      if (userLoggedIn && currentUser && currentUser.uid) {
        try {
          const userData = await getUserProfile(currentUser.uid);
          setProfile(userData);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    console.log(profile);
    fetchProfile();
  }, [userLoggedIn]);

  const handleSignOut = async () => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser && cartItems.length > 0) {
        const userDocRef = doc(db, "user", currentUser.uid);
        await setDoc(userDocRef, { cart: cartItems }, { merge: true });
        console.log("Cart uploaded before sign out.");
      }
      dispatch(clearFavoriteItems());
      cartItems = null;

      await doSignOut();
      navigate("/");
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col flex-1 lg:flex-row w-full justify-center items-center lg:items-start gap-15 mt-20 mb-40">
        <div className="selector text-left flex lg:flex-col gap-5 w-130 justify-around lg:w-50">
          <p
            className={`cursor-pointer hover:opacity-100 group transition duration-300 tracking-widest
            ${isActive == 0 ? "font-bold opacity-100" : "opacity-[60%]"}`}
            onClick={() => setisActive(0)}
          >
            Profile
            <span
              className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] opacity-[50%] bg-black dark:bg-white
            ${isActive == 0 ? "max-w-full" : ""}
          `}
            ></span>
          </p>

          <p
            className={`cursor-pointer hover:opacity-100 group transition duration-300 tracking-widest
            ${isActive == 1 ? "font-bold opacity-100" : "opacity-[60%]"}`}
            onClick={() => setisActive(1)}
          >
            Order History
            <span
              className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] opacity-[50%] bg-black dark:bg-white
            ${isActive == 1 ? "max-w-full" : ""}
          `}
            ></span>
          </p>

          <p
            className={`cursor-pointer hover:opacity-100 group transition duration-300 tracking-widest
            ${isActive == 2 ? "font-bold opacity-100" : "opacity-[60%]"}`}
            onClick={() => setisActive(2)}
          >
            Returns & Exchanges
            <span
              className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] opacity-[50%] bg-black dark:bg-white
            ${isActive == 2 ? "max-w-full" : ""}
          `}
            ></span>
          </p>

          <p
            className={`cursor-pointer hover:opacity-100 group transition duration-300 tracking-widest
            ${isActive == 3 ? "font-bold opacity-100" : "opacity-[60%]"}`}
            onClick={() => setisActive(3)}
          >
            Notifications
            <span
              className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] opacity-[50%] bg-black dark:bg-white
            ${isActive == 3 ? "max-w-full" : ""}
          `}
            ></span>
          </p>

          {userLoggedIn && (
          
           <button
             onClick={handleSignOut}
             className={`mt-5 flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                       hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                       hidden lg:block`}
           >
             LOG OUT
           </button>
           
          )}
        </div>

        <div className="w-130">
          {loading && <p>Loading...</p>}
          {!loading && profile && isActive == 0 && (
            <div>
              <Profile profile={profile} />
            </div>
          )}
          {!loading && profile && isActive == 1 && (
            <div>
              <OrderHistory orderhistory={profile.orderhistory} />
            </div>
          )}
          {!loading && profile && isActive == 2 && (
            <div className="flex w-full justify-center h-full items-center gap-2 opacity-50">
              <NotepadText className="h-5 w-5"/>
              <p>暫無退換貨記錄</p>
            </div>
          )}
          {!loading && profile && isActive == 3 && (
            <div className="flex w-full justify-center h-full items-center gap-2 opacity-50">
              <NotepadText className="h-5 w-5"/>
              <p>暫無通知</p>
            </div>
          )}
        </div>

        <button
          onClick={handleSignOut}
          className={`mt-5 flex h-12 w-80 justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                    hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                    lg:hidden`}
        >
          LOG OUT
        </button>
      </div>
      <Footer />
      </div>
    </>
  );
}

export default UserDetail;
