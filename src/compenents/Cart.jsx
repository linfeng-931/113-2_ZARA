import { ShoppingCart } from "lucide-react";
import { selectCartItems } from "../redux/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router";

function Cart(){
    const cartItems = useSelector(selectCartItems);
    const count = (cartItems.length > 0)?cartItems.reduce((sum, item) => (parseInt(sum) + parseInt(item.qty)), 0): 0;

    return(
        <>
            <nav
                className="inline-block"
            >
                <div className="indicater flex justify-center">
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
            </nav>
        </>
    )
}
export default Cart;