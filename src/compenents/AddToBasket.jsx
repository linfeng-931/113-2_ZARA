import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

function AddToBasket({product, qty}){
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();
    
    const addToCart = ()=>{
        setShowToast(true);
        dispatch(addCartItems({
            id: product.id,
            title: product.title,
            cover: product.cover,
            price: product.price,
            countInStock: product.stock,
            qty,
        }))

        setTimeout(()=>{
            setShowToast(false);
        },2000);
    };


    return(
        <>
            <button className="flex w-full md:w-55 justify-center gap-3" onClick={addToCart}>
               <ShoppingCart size = {24}/>
               <span>ADD TO BASKET</span> 
            </button>
            {showToast &&(
                <div className="toast mb-20">
                    <div className="alert">
                        <span>
                            {qty} {qty > 1? "pieces" : "piece"} of {product.name}{qty > 1? "have":"has"} been added to your cart.
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}

export default AddToBasket;