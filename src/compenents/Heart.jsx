import { motion } from "framer-motion";
import { useState } from "react";
import PopUpLogin from "./auth/login/PopUpLogin";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../firebase/config";

import {
  addFavoriteItem,
  removeFavoriteItem,
  selectFavoriteItems,
} from "../redux/favSlice";

function Heart({ userLoggedIn, product }) {
  const favoriteItems = useSelector(selectFavoriteItems);

  const [showToast, setShowToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  console.log(product);

  const isFavorite = favoriteItems.some((item) => item.id === product.id);

  const handleClick = async () => {
    if (!userLoggedIn) {
      toggleOpen();
      return;
    }

    const userDocRef = doc(db, "user", auth.currentUser.uid);
    setShowToast(true);

    const favItem = {
      id: product.id,
      title: product.class ? product.name : product.title,
      cover: product.class ? product.class[0]["cover"] : product.cover,
    };

    if (!isFavorite) {
      dispatch(addFavoriteItem(favItem));
      await updateDoc(userDocRef, {
        favItems: arrayUnion(favItem),
      });
    } else {
      dispatch(removeFavoriteItem(favItem.id));
      await updateDoc(userDocRef, {
        favItems: arrayRemove(favItem),
      });
    }

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <div className="flex mt-0.5 items-center" id={product.id}>
      <motion.div
        whileTap={{ scale: 3 }}
        transition={{ duration: 0.5 }}
        onClick={handleClick}
        className="cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          {!isFavorite ? (
            <path
              fill="#636e7b"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.25 2.5C2.91421 2.5 1.5 3.66421 1.5 5.5C1.5 7.64969 3.08041 9.64375 4.8647 11.1819C5.73533 11.9325 6.60962 12.5358 7.26796 12.952C7.56407 13.1392 7.81492 13.2875 8 13.3934C8.18508 13.2875 8.43593 13.1392 8.73204 12.952C9.39039 12.5358 10.2647 11.9325 11.1353 11.1819C12.9196 9.64375 14.5 7.64969 14.5 5.5C14.5 3.66421 13.0858 2.5 11.75 2.5C10.3768 2.5 9.14121 3.48581 8.72114 4.95604C8.62915 5.27802 8.33486 5.5 8 5.5C7.66514 5.5 7.37085 5.27802 7.27886 4.95604C6.85879 3.48581 5.62319 2.5 4.25 2.5ZM8 14.25C7.65543 14.9162 7.65523 14.9161 7.655 14.9159L7.65269 14.9147L7.64731 14.9119L7.62883 14.9022C7.61313 14.8939 7.59074 14.882 7.5621 14.8665C7.50484 14.8356 7.42254 14.7904 7.3188 14.7317C7.1114 14.6142 6.81771 14.442 6.46642 14.2199C5.76538 13.7767 4.82717 13.13 3.8853 12.3181C2.04459 10.7312 0 8.35031 0 5.5C0 2.83579 2.08579 1 4.25 1C5.79736 1 7.15289 1.80151 8 3.01995C8.84711 1.80151 10.2026 1 11.75 1C13.9142 1 16 2.83579 16 5.5C16 8.35031 13.9554 10.7312 12.1147 12.3181C11.1728 13.13 10.2346 13.7767 9.53358 14.2199C9.18229 14.442 8.8886 14.6142 8.6812 14.7317C8.57746 14.7904 8.49517 14.8356 8.4379 14.8665C8.40926 14.882 8.38687 14.8939 8.37117 14.9022L8.35269 14.9119L8.34731 14.9147L8.34501 14.9159C8.34477 14.9161 8.34457 14.9162 8 14.25ZM8 14.25L8.34501 14.9159C8.12889 15.0277 7.87111 15.0277 7.655 14.9159L8 14.25Z"
            />
          ) : (
            <path
              fill="#cf222e"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.655 14.9159C7.65523 14.9161 7.65543 14.9162 8 14.25C8.34457 14.9162 8.34477 14.9161 8.34501 14.9159C8.12889 15.0277 7.87111 15.0277 7.655 14.9159ZM7.655 14.9159L8 14.25L8.34501 14.9159L8.34731 14.9147L8.35269 14.9119L8.37117 14.9022C8.38687 14.8939 8.40926 14.882 8.4379 14.8665C8.49516 14.8356 8.57746 14.7904 8.6812 14.7317C8.8886 14.6142 9.18229 14.442 9.53358 14.2199C10.2346 13.7767 11.1728 13.13 12.1147 12.3181C13.9554 10.7312 16 8.35031 16 5.5C16 2.83579 13.9142 1 11.75 1C10.2026 1 8.84711 1.80151 8 3.01995C7.15289 1.80151 5.79736 1 4.25 1C2.08579 1 0 2.83579 0 5.5C0 8.35031 2.04459 10.7312 3.8853 12.3181C4.82717 13.13 5.76538 13.7767 6.46642 14.2199C6.81771 14.442 7.1114 14.6142 7.3188 14.7317C7.42254 14.7904 7.50484 14.8356 7.5621 14.8665C7.59074 14.882 7.61313 14.8939 7.62883 14.9022L7.64731 14.9119L7.65269 14.9147L7.655 14.9159Z"
            />
          )}
        </svg>
      </motion.div>
      <PopUpLogin isOpen={isOpen} toggleModal={toggleOpen} />
      {!isFavorite
        ? showToast && (
            <div className="toast z-9999">
              <div className="alert w-72 md:w-full">
                <p className="reak-words whitespace-normal">
                  {product.name.charAt(0).toUpperCase() + product.name.slice(1)}{" "}
                  been remove to your favorite item.
                </p>
              </div>
            </div>
          )
        : showToast && (
            <div className="toast z-9999">
              <div className="alert w-72 md:w-full">
                <p className="reak-words whitespace-normal">
                  {product.name} been added from your favorite item.
                </p>
              </div>
            </div>
          )}
    </div>
  );
}

export default Heart;
