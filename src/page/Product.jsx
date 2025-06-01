import products from "../../json/product.json";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import ImageScroller from "../compenents/ImageScroller";
import AddToBasket from "../compenents/AddToBasket";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Plus, Minus } from "lucide-react";
import { CircleUserRound } from "lucide-react";
// import ProductItem from "../compenents/ProductItem";
import RelatedItem from "../compenents/RelatedItem";
import { useAuth } from "../contexts/authContext";
import { getProduct } from "../firebase/product";
import WriteReview from "../compenents/WriteReview";

function Product() {
  const { userLoggedIn } = useAuth();
  const { part1, part2 } = useParams();
  // console.log(part1, part2, `${part1}/${part2}/`);
  const product = products.find((x) => x.id == `${part1}/${part2}/`);

  const [productReview, setProductReview] = useState(null);
  const fetchProductReview = async () => {
    try {
      const reviewData = await getProduct(part1 + part2);
      setProductReview(reviewData);
    } catch (err) {
      console.error("Failed to fetch product review:", err);
      setProductReview({ reviews: [] }); // fallback 避免 undefined
    }
  };

  useEffect(() => {
    fetchProductReview();
  }, [part1, part2]);
  console.log(productReview);

  //color
  const [pIndex, setproductClass] = useState(0);
  const currentClass = product.class[pIndex]
    ? product.class[pIndex]
    : product.class[0];

  //size
  const [Size, setSize] = useState(0);
  const size_list = ["S", "M", "L", "XL"];

  //img
  const [isActiveImg, setisActiveImg] = useState(0);

  //qty
  const [qty, setQty] = useState(1);

  //relyted
  const related_products = products
    .filter(
      (x) =>
        x.category1 === product.category1 &&
        x.category2 === product.category2 &&
        x.id !== product.id
    )
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
    setproductClass(0);
    setisActiveImg(0);
    setSize(0);
    if (currentClass.stock[Size] != 0) setQty(1);
    else setQty(0);
  }, [part1, part2]);

  useEffect(() => {
    if (currentClass.stock[Size] != 0) setQty(1);
    else setQty(0);

    setisActiveImg(0);
  }, [pIndex]);

  useEffect(() => {
    if (currentClass.stock[Size] != 0) setQty(1);
    else setQty(0);
  }, [Size]);

  return (
    <>
      <div className="header relative mb-10">
        <Header />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="product-container w-[90%] md:w-[75%] grid gap-25 overflow-hidden lg:grid-cols-9">
          {/*image*/}
          <div className="left lg:col-span-4">
            <ImageScroller
              images={currentClass.img}
              isActiveImg={isActiveImg}
              setisActiveImg={setisActiveImg}
            />
          </div>

          {/*content*/}
          <div className="right grid md:mt-[-20rem] lg:mt-0 text-left lg:col-span-5 ">
            <div className="product-content">
              <div className="mb-8">
                <p>
                  {product.category1} / {product.category2}
                </p>
                <div className="line w-60 h-[.5px] bg-black dark:bg-white"></div>
              </div>

              <div className="mb-3">
                <h1 className="mb-1">{product.name}</h1>
                <p className="hint mb-4">
                  {currentClass.color} | {product.id}
                  {currentClass.class_id}
                </p>
                <div className="price-area flex flex-col lg:flex-row gap-2 lg:items-center">
                  <h1
                    className={`original ${
                      product.sale ? "line-through opacity-50" : "font-bold"
                    }`}
                  >
                    $ {product.price}
                  </h1>

                  {product.sale && (
                    <h1 className="sale text-white bg-black px-4 py-0.5 text-left lg:ml-2">
                      {product.new_price[1]}%{" "}
                      <span className="font-bold ml-4">
                        $ {product.new_price[0]}
                      </span>
                    </h1>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                {product.class.map((content, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: content.color_num }}
                    className={`color h-[16px] w-[16px] rounded-full border-[1px] duration-150 hover:opacity-50 cursor-pointer
                                  `}
                    onClick={() => (setproductClass(index), setisActiveImg(0))}
                  ></div>
                ))}
              </div>

              <div className="mt-4 description w-80 mb-8">
                <p className="hint mb-1">DESCRIPTION</p>
                <p>{product.description}</p>
              </div>

              <div className="size-choice flex gap-4 mb-4">
                {size_list.map((label, index) => (
                  <div
                    key={index}
                    className={`circle flex items-center justify-center border-[1px] h-9 w-9 rounded-full hover:opacity-50 duration-150
                                    ${
                                      currentClass.stock[index] === 0
                                        ? "opacity-50 pointer-events-none"
                                        : "cursor-pointer"
                                    }
                                    ${
                                      currentClass.stock[index] !== 0 &&
                                      Size === index
                                        ? "text-white bg-black cursor-pointer dark:text-black dark:bg-white"
                                        : ""
                                    }
                                `}
                    onClick={() => {
                      if (currentClass.stock[index] === 0) return;
                      setSize(index);
                    }}
                  >
                    <p>{label}</p>
                  </div>
                ))}
              </div>
              <p>STOCK:{currentClass.stock[Size]}</p>
            </div>

            {/*add to cart*/}
            <div className="md:flex mt-1 w-full flex-wrap justify-between items-end">
              <div className="left qty-container w-[100%] lg:w-60">
                <p className="mb-1 hint">
                  TOTAL PRICE :{" "}
                  {product.sale
                    ? product.new_price[0] * qty
                    : product.price * qty}
                </p>
                <div className="flex justify-between items-center selector h-12 w-full border-[1px] mb-5">
                  <div
                    className={`h-12 w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer
                                ${
                                  qty === 0
                                    ? "opacity-50 pointer-events-none"
                                    : ""
                                }
                                ${qty < 0 ? setQty(0) : ""}
                                `}
                    onClick={() => setQty(qty - 1)}
                  >
                    <Minus className="text-white dark:text-black" />
                  </div>
                  <input
                    type="text"
                    value={qty}
                    placeholder="0"
                    className="text-center input border-none h-[33px] w-[55%]"
                    onChange={(e) => {
                      if (e.target.value > currentClass.stock[Size]) {
                        setQty(currentClass.stock[Size]);
                      } else if (
                        e.target.value < 1 &&
                        currentClass.stock[Size] != 0
                      ) {
                        setQty(1);
                      } else if (currentClass.stock[Size] === 0) {
                        setQty(0);
                      } else setQty(e.target.value);
                    }}
                  />
                  <div
                    className={`h-12 w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer
                                ${
                                  qty === currentClass.stock[Size] - 1 ||
                                  currentClass.stock[Size] === 0
                                    ? "opacity-50 pointer-events-none"
                                    : ""
                                }
                                ${
                                  qty >= currentClass.stock[Size] &&
                                  currentClass.stock[Size] != 0
                                    ? setQty(currentClass.stock[Size] - 1)
                                    : ""
                                }
                                `}
                    onClick={() => setQty(qty + 1)}
                  >
                    <Plus className="text-white dark:text-black" />
                  </div>
                </div>
              </div>
              <div className="right md:w-full lg:w-60 mb-5">
                <AddToBasket
                  userLoggedIn={userLoggedIn}
                  product={product}
                  detail={currentClass}
                  size_stock={currentClass.stock[Size]}
                  size={Size}
                  qty={qty}
                />
              </div>
            </div>

            <div className="line mb-15 mt-10 w-full h-[1px] bg-black dark:bg-white opacity-20"></div>
            <div className="size-chart w-[100%]">
              <p className="hint mb-4">SIZE CHART</p>
              <img
                className="w-full hidden md:block dark:hidden"
                src="/image/size1-1.svg"
              />
              <div className="w-full hidden dark:block">
                <img
                  className="w-full hidden md:block"
                  src="/image/size1-2.svg"
                />
              </div>
              <img
                className="w-full md:hidden dark:hidden"
                src="/image/size2-1.svg"
              />
              <div className="w-full md:hidden">
                <img
                  className="w-full hidden md:hidden dark:block"
                  src="/image/size2-2.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/*detail*/}
        <div className="mt-40 detail-container md:grid md:grid-cols-3 gap-25 w-[90%] md:w-[80%]">
          <div className="left mb-10 md:col-span-1">
            <div className="mb-8 text-start">
              <h1>PRODUCT DETAIL</h1>
              <div className="line w-60 h-[.5px] bg-black dark:bg-white"></div>
            </div>
            {product.detail.map((content) => (
              <p className="text-start">{content}</p>
            ))}
          </div>

          <div className="right md:col-span-2 overflow-hidden h-40 md:h-90 rounded-[10px]">
            <img
              className="w-full h-120 object-cover object-center"
              src={currentClass.img[currentClass.img.length - 1]}
            />
          </div>
        </div>

        {/*review*/}
        <div className="mt-40 review-container w-[90%] md:w-[80%]">
          <div className="mb-8 text-start">
            <h1>REVIEWS</h1>
            <div className="line w-60 h-[.5px] bg-black dark:bg-white"></div>
          </div>
          <div className="mb-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productReview && [...productReview.reviews.values()].length > 0 ? [...productReview.reviews.values()].map((review, index) => (
              <div key={index}>
                <div className="review h-[100%] md:60  w-full rounded-[10px] p-5 pl-8 pr-8 text-left grid border-[1px] border-black/30 dark:border-white/60">
                  <div className="rating items-end mb-8">
                    {[...Array(5)].map((_, i) => {
                      const starIndex = i + 1;
                      return (
                        <div
                          key={i}
                          className={`h-4 w-4 mask mask-star-2 ml-1 ${
                            starIndex <= review.rating ? "opacity-100" : ""
                          }`}
                          aria-hidden="true"
                        ></div>
                      );
                    })}
                  </div>
                  <div className="review-content">
                    <p className="hint mb-3">size : {size_list[review.size]} / color : {review.color}</p>
                    <p className="mb-5">{review.comment}</p>
                    <div className="user flex gap-3 items-center">
                      <CircleUserRound />
                      <div>
                        <p>{review.reviewer}</p>
                        <p className="hint">{new Date(review.time.seconds * 1000 + review.time.nanoseconds / 1_000_000).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )): 
            <p className="hint text-left">目前暫無評論</p>
            }
          </div>

          <WriteReview productId = {part1+part2} product = {product} onReviewAdded={fetchProductReview}/>
        </div>

        {/*relyted products*/}
        <div
          className="relyted-container 
        w-[80%] mt-40 mx-auto"
        >
          <div className="mb-8 text-start">
            <h1>RELATED PRODUCTS</h1>
            <div className="line w-60 h-[.5px] bg-black dark:bg-white"></div>
          </div>
          <div className="grid grid-cols-4  lg:grid-cols-8 gap-x-8 lg:gap-x-4 gap-y-[2.5rem] justify-between">
            {related_products.map((content) => (
              <RelatedItem product={content} key={content.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
