import products from '../../json/product.json';
import Header from '../compenents/Header';
import Footer from '../compenents/Footer';
import ImageScroller from '../compenents/ImageScroller';
import AddToBasket from "../compenents/AddToBasket";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Plus, Minus} from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import ProductItem from '../compenents/ProductItem';

function Product(){
    const {part1, part2} = useParams();
    console.log(part1, part2, `${part1}/${part2}/`);
    const product = products.find(
        (x) => x.id == `${part1}/${part2}/`
    );
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [part1, part2]);


    //color
    const [pIndex, setproductClass] = useState(0);

    //size
    const [Size, setSize] = useState(0);
    const size_list = ['S', 'M', 'L', 'XL'];

    //img
    const [isActiveImg, setisActiveImg] = useState(0);
    
    //qty
    const [qty, setQty] = useState(product.class[pIndex].stock[Size] > 0 ? 1: 0);

    //relyted
    const related_products = products
    .filter(x => 
      x.category1 === product.category1 &&
      x.category2 === product.category2 &&
      x.id !== product.id
    )
    .slice(0, 4);

    return(
        <>
            <div className="header relative mb-10">
                <Header/>
            </div>

            <div className="w-full flex flex-col items-center">
                
                <div className="product-container w-[75%] grid gap-25 overflow-hidden md:grid-cols-9 lg:grid-cols-9">
                  {/*image*/}
                  <div className="left lg:col-span-4">
                    <ImageScroller
                        images={product.class[pIndex].img}
                        isActiveImg={isActiveImg}
                        setisActiveImg={setisActiveImg}
                    />
                  </div>
                  
                  {/*content*/}
                  <div className="right grid text-left lg:col-span-5 ">
                    <div className="product-content">
                        <div className='mb-8'>
                            <p>{product.category1} / {product.category2}</p>
                            <div className="line w-60 h-[.5px] bg-black dark:bg-white"></div>
                        </div>

                        <div className='mb-3'>
                            <h1 className='mb-1'>{product.name}</h1>
                            <p className='hint mb-4'>{product.class[pIndex].color} | {product.id}{product.class[pIndex].class_id}</p>
                            <h1 className='font-bold'>${product.price}</h1>
                        </div>

                        <div className="flex gap-2">
                          {product.class.map((content, index)=>(
                              <div 
                                  style={{ backgroundColor: content.color_num }}
                                  className={`color h-[16px] w-[16px] rounded-full border-[1px] duration-150 hover:opacity-50 cursor-pointer
                                  `}
                                  onClick={()=>(
                                    setproductClass(index), 
                                    setisActiveImg(0)
                                  )}
                              ></div>
                          ))}
                        </div>

                        <div className="mt-4 description w-80 mb-8">
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
                        </div>
                        <p>STOCK:{product.class[pIndex].stock[Size]}</p>
                    </div>
                    
                    {/*add to cart*/}
                    <div className="md:flex mt-1 w-full flex-wrap justify-between items-end">
                      
                      <div className="left qty-container w-60">
                        <p className='mb-1 hint'>TOTAL PRICE : {product.price*qty}</p>
                        <div className="flex justify-between items-center selector h-12 w-full border-[1px] mb-5">
                          <div 
                              className="h-12 w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer"
                              onClick={()=>setQty(qty-1)}
                          >
                              <Minus className="text-white dark:text-black"/>
                          </div>
                          <input 
                            type="text" 
                            value={qty} 
                            placeholder="0"
                            className="text-center input w-[55%]"
                            onChange={(e) => setQty(e.target.value)}
                          />
                          <div 
                              className="h-12 w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer"
                              onClick={()=>setQty(qty+1)}
                          >
                              <Plus className="text-white dark:text-black"/>
                          </div>
                        </div>
                      </div>
                      <div className="right w-60 mb-5">
                        <AddToBasket
                          product={product}
                          detail={product.class[pIndex]}
                          size_stock={product.class[pIndex].stock[Size]}
                          qty={qty}
                        />
                      </div>
                    </div>

                    <div className="line mb-15 mt-10 w-full h-[1px] bg-black dark:bg-white opacity-20"></div>
                    <div className="size-chart">
                        <p className='hint mb-4'>SIZE CHART</p>
                        <img className="w-full hidden md:block dark:hidden" src="/public/image/size1-1.svg"/>
                        <div className="w-full hidden dark:block">
                          <img className='w-full hidden md:block' src='/public/image/size1-2.svg'/>
                        </div>
                        <img className='w-full md:hidden dark:hidden' src='/public/image/size2-1.svg'/>
                        <div className='w-full md:hidden'>
                          <img className='w-full hidden md:hidden dark:block' src='/public/image/size2-2.svg'/>
                        </div>
                    </div>
                  </div> 
                </div>
              
                {/*detail*/}
                <div className="mt-40 detail-container grid grid-cols-3 gap-25 w-[90%]">
                    <div className="left col-span-1">
                        <div className='mb-8 text-start'>
                            <h1>PRODUCT DETAIL</h1>
                            <div className="line w-60 h-[.5px] bg-black dark:bg-white"></div>
                        </div>
                        {product.detail.map((content)=>(
                            <p className='text-start'>{content}</p>
                        ))}
                    </div>

                    <div className="right col-span-2 overflow-hidden h-90 rounded-[10px]">
                      <img className="w-full h-120 object-cover object-center" src={product.class[pIndex].img[product.class[pIndex].img.length - 1]} />
                    </div>
                </div>

                {/*review*/}
                <div className='mt-40 review-container w-[90%]'>
                  <div className='mb-8 text-start'>
                          <h1>REVIEWS</h1>
                          <div className="line w-60 h-[.5px] bg-black dark:bg-white"></div>
                  </div>
                  <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8"> 
                      
                    {(product.reviews).map(review =>(
                      <>
                      <div className="review h-55 w-full rounded-[10px] p-5 pl-8 pr-8 text-left grid border-[1px] border-black/30 dark:border-white/60">
                        <div className="rating items-end mb-8">
                            {Array(5).keys().map((x) => (
                              x === review.rating ? (
                                <div className="h-5 w-5 mask mask-star-2 ml-1"></div>
                              ) : (
                                <div className="h-5 w-5 mask mask-star-2 ml-1" aria-current="true"></div>
                              )    
                            ))}
                          </div>
                          <div className="review-content">
                            <p className='mb-5'>{review.comment}</p>
                            <div className="user flex gap-3 items-center">
                              <CircleUserRound />
                              <p>{review.reviewer}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>

                {/*relyted products*/}
                <div className="relyted-container w-[90%] mt-40">
                  <div className='mb-8 text-start'>
                      <h1>RELYTED PRODUCTS</h1>
                      <div className="line w-60 h-[.5px] bg-black dark:bg-white"></div>
                  </div>
                  <div className="flex flex-wrap justify-between">
                    {related_products.map((content)=>(
                      <ProductItem product={content}/>
                    ))}
                  </div>
                </div>
              </div>
            <Footer/>
        </>
    )
}

export default Product;