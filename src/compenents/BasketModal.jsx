import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import {Link } from 'react-router'
import { Minus, X, Plus, ArrowRight } from "lucide-react";

function BasketModal(){
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems);
    const getTotalPrice = () => {
        return(cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
        : 0;
    };
    const size_list = ['S', 'M', 'L', 'XL'];

    return(
        <>
                <div className="w-full">
                <h1 className="text-center">SHOPPING CART</h1>
                <div className="mt-25">
                    {cartItems.length === 0?(
                        <></>
                        ):(
                            <div className="hidden lg:grid grid-cols-7 gap-15 items-center justify-center mb-15">
                                <p className="hint">PRODUCT</p>
                                <p></p>
                                <p className="hint">COLOR</p>
                                <p className="hint">SIZE</p>
                                <p className="hint">QUANTITY</p>
                                <p className="hint">PRICE</p>
                                <p></p>
                            </div>
                    )}
                </div>
                <div className="hidden lg:block">
                    {cartItems.length === 0?(
                        <p className="text-center">Cart is empty</p>
                        ):(
                            cartItems.map(item => (
                                <div key = {item.id} className="grid grid-cols-7 gap-15 items-center justify-center mb-15">
                                    <Link to={`/products/id/${item.id}`}>
                                        <div className="w-40 overflow-hidden">
                                            <img src={item.cover} className="w-full object-cover object-center"/>
                                        </div>
                                    </Link>

                                    <p className="text-left">{item.title}</p>

                                    <div className="color">
                                        <p>{item.color}</p>
                                    </div>
                                    <select
                                        defaultValue={size_list[item.size]}
                                        onChange={(e) =>
                                            dispatch(addCartItems({
                                                id: item.id,
                                                id2: item.id2,
                                                title: item.title,
                                                price: item.price,
                                                cover: item.cover,
                                                color: item.color,
                                                countInStock: item.countInStock,
                                                qty: item.qty,
                                                size: e.target.value,
                                                }))
                                        }
                                        className="select select-bordered w-full h-[40px] cursor-pointer hover:opacity-50 duration-150"
                                    >
                                            {size_list.map((x) => (
                                                <option key={x} value={x}>{x}</option>
                                            ))}
                                    </select>

                                    <div className="flex justify-between items-center selector h-[40px] w-full border-[1px]">     
                                                <div 
                                                    className={`h-[40px] w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer
                                                        ${item.qty === 1 ? "opacity-50 pointer-events-none":""}
                                                        `}
                                                    onClick={() => {
                                                        if (item.qty > 1) {
                                                          dispatch(addCartItems({
                                                            ...item,
                                                            qty: item.qty - 1,
                                                          }));
                                                        }
                                                      }}
                                                >
                                                    <Minus className="h-4 text-white dark:text-black"/>
                                                </div>
                                                <input 
                                                    type="text" 
                                                    value={item.qty} 
                                                    placeholder="0"
                                                    className="text-center input border-none h-[33px] w-[55%]"
                                                />
                                                <div 
                                                    className={`h-[40px] w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer
                                                        ${item.qty === item.countInStock ? "opacity-50 pointer-events-none":""}
                                                        `}
                                                        onClick={() => {
                                                            if (item.qty < item.countInStock) {
                                                              dispatch(addCartItems({
                                                                ...item,
                                                                qty: item.qty + 1,
                                                              }));
                                                            }
                                                          }}
                                                >
                                                    <Plus className="h-4 text-white dark:text-black"/>
                                                </div>
                                    </div>

                                    <p className="font-bold text-base">${item.price * item.qty}</p>          

                                    <div className="w-full flex justify-center hover:opacity-50 duration-[.2s]"
                                        onClick={() => dispatch(removeCartItems(item.id))}
                                    >
                                        <X className="h-4"/>
                                    </div>
                                    
                                </div>
                            ))
                        )
                    }

                    {cartItems.length === 0?(
                        <div className="hidden">
                        </div>
                    ):(
                        <div className="visible flex flex-col gap-5 items-center">
                            <div 
                                className="w-full text-right"
                                onClick={() => 
                                    cartItems.map((item)=>(
                                        dispatch(removeCartItems(item.id))
                                    ))}
                            >
                                <p className="font-black hover:opacity-50 duration-150 cursor-pointer">清空購物車</p>
                            </div>
                            {/* Total */}
                            <div className="flex justify-center items-center mt-4">
                                <h1>TOTAL : ${getTotalPrice()}</h1>
                            </div>

                            {/* Checkout Button */}
                            <div className="flex h-12 w-60 justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white">
                                <p>Checkout</p>
                                <ArrowRight className="h-4"/>
                            </div>
                        </div>
                    )}
                
                </div>

                <div className="m lg:hidden">
                    {cartItems.length === 0?(
                        <p className="text-center">Cart is empty</p>
                        ):(
                            cartItems.map(item => (
                                <div key = {item.id} className="flex gap-5 items-center justify-center mb-15">
                                    <Link to={`/products/id/${item.id}`}>
                                        <div className="w-35 overflow-hidden">
                                            <img src={item.cover} className="w-full object-cover object-center"/>
                                        </div>
                                    </Link>

                                    <div className="content">

                                        <p className="text-left mb-2">{item.title}</p>
                                        <p className="hidden md:block hint text-left mb-7">{item.color}</p>

                                        <select
                                            defaultValue={size_list[item.size]}
                                            onChange={(e) =>
                                                dispatch(addCartItems({
                                                    id: item.id,
                                                    id2: item.id2,
                                                    title: item.title,
                                                    price: item.price,
                                                    cover: item.cover,
                                                    color: item.color,
                                                    countInStock: item.countInStock,
                                                    qty: item.qty,
                                                    size: e.target.value,
                                                    }))
                                            }
                                            className="select mb-2 md:mb-4 select-bordered w-full h-[40px] cursor-pointer hover:opacity-50 duration-150"
                                        >
                                                {size_list.map((x) => (
                                                    <option key={x} value={x}>{x}</option>
                                                ))}
                                        </select>

                                        <div className="flex justify-between mb-2 md:mb-4 items-center selector h-[40px] w-full border-[1px]">     
                                                    <div 
                                                        className={`h-[40px] w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer
                                                            ${item.qty === 1 ? "opacity-50 pointer-events-none":""}
                                                            ${item.qty <= 0 ? (item.qty = 1): ""}
                                                            `}
                                                        onClick={() => {
                                                            if (item.qty > 1) {
                                                            dispatch(addCartItems({
                                                                ...item,
                                                                qty: item.qty - 1,
                                                            }));
                                                            }
                                                        }}
                                                    >
                                                        <Minus className="h-4 text-white dark:text-black"/>
                                                    </div>
                                                    <input 
                                                        type="text" 
                                                        value={item.qty} 
                                                        placeholder="0"
                                                        className="text-center input border-none h-[33px] w-[55%]"
                                                    />
                                                    <div 
                                                        className={`h-[40px] w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer
                                                            ${item.qty === item.countInStock-1 ? "opacity-50 pointer-events-none":""}
                                                            ${item.qty >= item.countInStock ? (item.qty = item.countInStock-1): ""}
                                                            `}
                                                            onClick={() => {
                                                                if (item.qty < item.countInStock) {
                                                                dispatch(addCartItems({
                                                                    ...item,
                                                                    qty: item.qty + 1,
                                                                }));
                                                                }
                                                            }}
                                                    >
                                                        <Plus className="h-4 text-white dark:text-black"/>
                                                    </div>
                                        </div>
                                        <div className="flex justify-between items-center">                 
                                            <p className="font-bold text-base">${item.price * item.qty}</p>          

                                            <div className="flex justify-center hover:opacity-50 duration-[.2s]"
                                                onClick={() => dispatch(removeCartItems(item.id))}
                                            >
                                                <X className="h-4"/>
                                            </div>
                                        </div>  
                                        </div>
                                    </div>
                                ))
                            )
                        }

                        {cartItems.length === 0?(
                            <div className="hidden">
                            </div>
                        ):(
                            <div className="visible flex flex-col gap-5 items-center">
                                <div 
                                    className="w-full text-right"
                                    onClick={() => 
                                        cartItems.map((item)=>(
                                            dispatch(removeCartItems(item.id))
                                        ))}
                                >
                                    <p className="font-black hover:opacity-50 duration-150 cursor-pointer">清空購物車</p>
                                </div>
                                {/* Total */}
                                <div className="flex justify-center items-center mt-4">
                                    <h1>TOTAL : ${getTotalPrice()}</h1>
                                </div>

                                {/* Checkout Button */}
                                <Link to="/">
                                    <div className="flex h-12 w-60 justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white">
                                        <p>CHECKOUT NOW</p>
                                        <ArrowRight className="h-4"/>
                                    </div>
                                </Link>
                            </div>
                        )}
                    
                    </div>
                </div>
        </>
    )
}

export default BasketModal;