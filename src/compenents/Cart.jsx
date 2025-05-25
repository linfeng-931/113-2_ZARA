import { ShoppingCart } from "lucide-react";
import { selectCartItems } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopUpLogin from "./auth/login/PopUpLogin";

function Cart({userLoggedIn}){
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0)?cartItems.reduce((sum, item) => (parseInt(sum) + parseInt(item.qty)), 0): 0;

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    return(
        <>
            {userLoggedIn &&
                <nav
                    className="inline-block hover:opacity-50 cursor-pointer"
                >
                    <div className="indicater flex justify-center ">
                        <Link to="/products/shopping-cart">
                            <ShoppingCart />
                        </Link>
                        <p 
                            className={`indicater-item absolute bg-black dark:bg-white text-white dark:text-black rounded-xl pr-2 pl-2 mt-[-.6rem] mr-[-2rem]
                            ${count === 0 ? "hidden":""}
                        `}>
                            {count}
                        </p>
                    </div>
                    <p>Cart</p>
                </nav>
            }
            {!userLoggedIn &&
                <nav
                    className="inline-block"
                >
                    <div 
                        className="indicater flex flex-col gap-1.5 justify-center items-center hover:opacity-50 cursor-pointer"
                        onClick={toggleOpen}
                    >
                        <ShoppingCart />
                        <p>Cart</p>
                    </div>

                    <PopUpLogin
                        isOpen={isOpen}
                        toggleModal={toggleOpen}
                    />
                </nav>
            }
        </>
    )
}
export default Cart;