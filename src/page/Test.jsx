import products from '../../json/product.json';
import Header from '../compenents/Header';
import Footer from '../compenents/Footer';
import ImageScroller from '../compenents/ImageScroller';
import { useState } from "react";

function Test(){
    const product = products.find(
        (x) => x.id == "0264/194/"
    );
    const pIndex = 0;

    //size
    const [Size, setSize] = useState(0);
    const size_list = ['S', 'M', 'L', 'XL'];

    //img
    const [isActiveImg, setisActiveImg] = useState(0);
    
    //const [qty, setQty] = useState(product.stock > 0 ? 1: 0);

    return(
        <>
            <div className="header relative mb-10">
                <Header/>
            </div>
            <div className="w-full flex flex-col items-center">
                <div className="product-container w-[75%] grid gap-25 overflow-hidden md:grid-col-9 lg:grid-cols-9">
                  <div className="left lg:col-span-3">
                    <ImageScroller
                        images={product.class[pIndex].img}
                        isActiveImg={isActiveImg}
                        setisActiveImg={setisActiveImg}
                    />
                    {/*<img className='w-full h-120 rounded-[10px] object-cover object-center ' 
                        src = {product.class[pIndex].img[isActiveImg]}
                    />
                    <div className="overflow-x-auto">
                        <div className="flex gap-2 w-max">
                            {product.class[pIndex].img.map((img, index)=>(
                                <img 
                                    key={index}
                                    onClick={()=>(
                                        setisActiveImg(index)
                                    )}
                                    className={`object-cover object-center h-10 w-10 hover:h-11 hover:w-11 shrink-0 transition-all duration-150
                                        ${isActiveImg === index ? "opacity-50 cursor-not-allowed":"cursor-pointer"}
                                    `} 
                                    src={img}
                                />
                            ))}
                        </div>
                    </div>*/}
                  </div>
                  
                  <div className="right p-7 grid text-left lg:col-span-6">
                    <div className="product-content">
                        <div className='mb-8'>
                            <p>{product.category1}/{product.category2}</p>
                            <div className="line w-50 h-[.5px] bg-black dark:bg-white"></div>
                        </div>

                        <div className='mb-4'>
                            <h1 className='mb-1'>{product.name}</h1>
                            <p className='hint mb-4'>{product.class[pIndex].color} | {product.id}{product.class[pIndex].class_id}</p>
                            <h1 className='font-bold'>${product.price}</h1>
                        </div>

                        <div className="description w-80 mb-8">
                            <p className='hint mb-1'>DESCRIPTION</p>
                            <p>{product.description}</p>
                        </div>

                        <div className="size-choice flex gap-4 mb-4">
                            {size_list.map((label, index)=>(
                                <div 
                                key = {index}
                                className={`circle flex items-center justify-center cursor-pointer border-[1px] h-9 w-9 rounded-full hover:opacity-50 duration-150
                                    ${product.class[pIndex].stock[index] === 0 ? "opacity-50 cursor-not-allowed":"cursor-pointer"}
                                    ${product.class[pIndex].stock[index] !== 0 && Size === index ? "text-white bg-black dark:text-black dark:bg-white":""}
                                `}
                                
                                onClick={() => {
                                    if (product.class[pIndex].stock[index] === 0) return;
                                    setSize(index);
                                }}
                                ><p>{label}</p></div>
                            ))}
                            {/* 
                            <div 
                                className={(isActive, current_stock)=>(
                                    current_stock === 0 ? "circle flex items-center justify-center cursor-pointer border-[1px] h-10 w-10 rounded-full opacity-50"
                                    :(isActive === 0 ? "circle flex items-center justify-center cursor-pointer border-[1px] h-10 w-10 rounded-full color-white bg-black dark:color-black dark:bg-white"
                                    :"circle flex items-center justify-center cursor-pointer border-[1px] h-10 w-10 rounded-full")
                                )}
                                onClick={() => (
                                    setSize(0),
                                    setSelected(0)
                                )}
                            >S</div>
                            <div 
                                className="circle flex items-center justify-center cursor-pointer border-[1px] h-10 w-10 rounded-full"
                                onClick={() => setSize(1)}
                            >M</div>
                            <div 
                                className="circle flex items-center justify-center cursor-pointer border-[1px] h-10 w-10 rounded-full"
                                onClick={() => setSize(2)}
                            >L</div>
                            <div 
                                className="circle flex items-center justify-center cursor-pointer border-[1px] h-10 w-10 rounded-full"
                                onClick={() => setSize(3)}
                            >XL</div>*/}
                        </div>
                        <p>STOCK:{product.class[pIndex].stock[Size]}</p>
                    </div>
                    

        
                    <div className="flex w-full flex-wrap justify-between items-end">
                      <div className="left">
                        <div className="sp-container">
                          <h2 className="price">US${product.price}</h2>
                          <p className="stock">Stock: {product.stock}</p>
                        </div>
                        
                        {/*<div className="qty-container flex gap-4 items-center mt-4 mb-4">
                          <h3>Qty:</h3>
                          <select
                            className="select select-bordered w-30 h-8 rounded-md p-2 bg-white/50 text-black"
                            defaultValue={product.stock > 0 ? 1:0}
                            onChange={ event => setQty(event.target.value)}
                          >
                            {Array(product.stock).keys().map((x) => (
                              <option key={x+1} value = {x+1}>
                                {x+1}
                              </option>
                            ))}
                          </select>
                        </div>*/}
                        
                        {/*<h4>Total Price:{product.price*qty}</h4>*/}
                      </div>
                      {/*<AddToBasket
                        product={product}
                        qty={qty}
                      />*/}
                    </div>
                  </div> 
                </div>
              
                <div className="review-container w-[85%] mt-10 mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                  {(product.reviews).map(review =>(
                    <>
                    <div className="review h-40 w-full rounded-3xl bg-white/95 text-black p-5 pl-8 pr-8 text-left grid backdrop-blur-md shadow-2xl">
                      <div className="review-content">
                        <h2>{review.reviewer}</h2>
                        <p>{review.comment}</p>
                      </div>
                      <div className="rating items-end">
                        {Array(5).keys().map((x) => (
                          x === review.rating ? (
                            <div className="h-5 w-5 mask mask-star"></div>
                          ) : (
                            <div className="h-5 w-5 mask mask-star" aria-current="true"></div>
                          )    
                        ))}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            <Footer/>
        </>
    )
}

export default Test;