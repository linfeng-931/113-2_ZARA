import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import {Link } from 'react-router'

function BasketModal({isOpen, toggleModal}){
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const handleCancel = () => toggleModal(!isOpen);
    const getTotalPrice = () => {
        return(cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
        : 0;
    };

    return(
        <>
        {isOpen && (
            <div className="modal modal-open text-black backdrop-blur-sm">
                <div className="w-[90%] md:w-[70%] flex flex-col items-center">
                <h3 className="text-[2rem] text-left mb-[-.5rem] text-white">Shopping Basket</h3>
                <div className="modal-box flex flex-col justify-center">
                    {cartItems.length === 0?(
                        <div className="text-center">Cart is empty</div>
                        ):(
                            cartItems.map(item => (
                                <li key = {item.id} className="flex justify-between items-center pb-4 mb-4 border-b border-gray-400">
                                    <Link to={`/products/id/${item.id}`} onClick={handleCancel}>
                                    </Link>
                                    <div className="w-20 rounded-md overflow-hidden shadow-md">
                                        <img src={item.cover} className="w-full object-cover object-center"/>
                                    </div>
                                    
                                    <div className="ml-8 flex-8 w-48 text-left">
                                        <h3>{item.title}</h3>
                                        <div className="flex items-center space-x-2">
                                            <p>Qty:</p>
                                            <select
                                                defaultValue={item.qty}
                                                onChange={(e) =>
                                                    dispatch(addCartItems({
                                                        id: item.id,
                                                        title: item.title,
                                                        cover: item.cover,
                                                        price: item.price,
                                                        countInStock: item.countInStock,
                                                        qty: Number(e.target.value),
                                                    }))
                                                }
                                                className="select select-bordered w-24 h-7 rounded-md pt-1 bg-black/5"
                                                >
                                                    {[...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-base">${item.price * item.qty}</div>
                                        <div className="w-6 h-6 text-center opacity-60 cursor-pointer shadow-xs shadow-gray-500 rounded-full hover:bg-black hover:text-white duration-[.2s]"
                                            onClick={() => dispatch(removeCartItems(item.id))}
                                        >
                                            −
                                        </div>
                                    </div>
                                </li>
                            ))
                        )
                    }

                    {cartItems.length === 0?(
                        <div className="hidden flex justify-between">
                        </div>
                    ):(
                        <div className="visible flex justify-between">
                            {/* Total */}
                            <div className="flex justify-between items-center mt-4">
                                <h2>Total : ${getTotalPrice()}</h2>
                            </div>

                            {/* Checkout Button */}
                            <div className="button-2 w-40">Checkout</div>
                        </div>
                    )}
                    

                    {/* Close Button */}
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <div className="btn btn-xs btn-circle btn-ghost absolute right-2 top-2 shadow-xs shadow-gray-500 rounded-full hover:bg-black hover:text-white duration-[.2s]"
                            onClick={() => toggleModal(false)}
                        >✕</div>
                    </form>
                </div>
                </div>
            </div>
        )}
        </>
    )
}

export default BasketModal;