import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";
import { Plus } from "lucide-react";
import { useState } from "react";

function AddToBasket({product, detail, size, qty}){
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();
    
    const addToCart = ()=>{
        setShowToast(true);
        dispatch(addCartItems({
            id: product.id,
            id2:detail.class_id,
            color:detail.color,
            title: product.name,
            cover: detail.img[0],
            size: size,
            price: product.price,
            countInStock: detail.stock[size],
            qty,
        }))

        setTimeout(()=>{
            setShowToast(false);
        },2000);
    };


    return(
        <>
            <button 
                className="flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white" 
                onClick={addToCart}
            >
               <p>ADD TO BASKET</p> 
               <Plus/>
            </button>
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