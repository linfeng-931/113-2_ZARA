import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { selectCartItems } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import BasketModal from "./BasketModal";

function Cart(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0)?cartItems.reduce((sum, item) => (parseInt(sum) + parseInt(item.qty)), 0): 0;

    return(
        <>
            <nav
                onClick={toggleOpen}
                className="inline-block"
            >
                <div className="indicater flex justify-center">
                    <ShoppingCart />
                    <p 
                        className={`indicater-item absolute bg-black dark:bg-white text-white dark:text-black rounded-xl pr-2 pl-2 mt-[-.6rem] mr-[-2rem]
                        ${count === 0 ? "hidden":""}
                    `}>
                        {count}
                    </p>
                </div>
            </nav>
            <BasketModal
                isOpen={isOpen}
                toggleModal={toggleOpen}
            />
        </>
    )
}
export default Cart;