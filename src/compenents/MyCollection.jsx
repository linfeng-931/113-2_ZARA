import { Heart } from "lucide-react";
import { selectFavoriteItems } from "../redux/favSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopUpLogin from "./auth/login/PopUpLogin";

function MyCollection({ userLoggedIn }) {
  const favoriteItems = useSelector(selectFavoriteItems);
  const count = favoriteItems.length > 0 ? favoriteItems.length : 0;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      {userLoggedIn && (
        <nav className="inline-block hover:opacity-50 cursor-pointer">
          <div className="indicater flex justify-center ">
            <Link to="/products/my-collection">
              <Heart />
            </Link>
            <p
              className={`indicater-item absolute bg-black dark:bg-white text-white dark:text-black rounded-xl pr-2 pl-2 mt-[-.6rem] mr-[-2rem]
                            ${count === 0 ? "hidden" : ""}
                        `}
            >
              {count}
            </p>
          </div>
          <p>Fav</p>
        </nav>
      )}
      {!userLoggedIn && (
        <nav className="inline-block">
          <div
            className="indicater flex flex-col gap-1.5 justify-center items-center hover:opacity-50 cursor-pointer"
            onClick={toggleOpen}
          >
            <Heart />
            <p>Fav</p>
          </div>

          <PopUpLogin isOpen={isOpen} toggleModal={toggleOpen} />
        </nav>
      )}
    </>
  );
}

export default MyCollection;
