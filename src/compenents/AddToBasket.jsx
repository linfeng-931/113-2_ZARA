import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";
import { Plus } from "lucide-react";
import { useState } from "react";
import PopUpLogin from "./auth/login/PopUpLogin";

function AddToBasket({userLoggedIn, product, detail, size, qty}){
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();

    const price = product.sale ? product.new_price[0] : product.price;
    const addToCart = ()=>{
        setShowToast(true);
        dispatch(addCartItems({
            id: product.id,
            id2:detail.class_id,
            color:detail.color,
            title: product.name,
            cover: detail.img[0],
            size: size,
            price: price,
            countInStock: detail.stock[size],
            qty,
        }))

        setTimeout(()=>{
            setShowToast(false);
        },2000);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return(
        <>
            <button 
                className={`flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                        ${qty === 0? "pointer-events-none opacity-50":""}
                        ${typeof qty !== "number"? "pointer-events-none opacity-50":""}
                        `}
                onClick={userLoggedIn ? addToCart : toggleOpen}
            >
               <p>ADD TO BASKET</p> 
               <Plus/>
            </button>
            <PopUpLogin
                isOpen={isOpen}
                toggleModal={toggleOpen}
            />
            {showToast &&(
                <div className="toast z-9999">
                    <div className="alert w-72 md:w-full">
                        <p className="reak-words whitespace-normal">
                            {qty} {qty > 1? "pieces" : "piece"} of {product.name}{qty > 1? "have":"has"} been added to your cart.
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddToBasket;