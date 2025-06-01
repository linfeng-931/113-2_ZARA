import { Link } from "react-router";
import { useState } from "react";
import Heart from "../compenents/Heart";
import { useAuth } from "../contexts/authContext";

const ProductItem = ({ product }) => {
  const { userLoggedIn } = useAuth();
  const [headImg, setHeadImg] = useState(product.class[0].cover);
  const handleColorClick = (index) => {
    setHeadImg(product.class[index].cover);
  };

  const colors = product.class.map((x, index) => {
    return (
      <div
        key={index}
        onClick={() => handleColorClick(index)}
        style={{ backgroundColor: x.color_num }}
        className="w-[16px] h-[16px] rounded-full border cursor-pointer mx-1"
        title={x.color}
      ></div>
    );
  });

  return (
    <div className="col-span-4 grid grid-cols-4">
      <section className="col-span-3 mb-8 text-sm flex flex-col gap-2 text-left ">
        <Link to={`/products/id/${product.id}`}>
          <img
            className="w-full max-h-120 object-cover object-center"
            src={headImg}
            alt=""
          />
        </Link>
        <div className="flex justify-between">
          <div className="colors flex flex-wrap gap-1 md:gap-0 translate-x-[-6px] mt-1">
            {colors}
          </div>
          <Heart userLoggedIn={userLoggedIn} product={product} />
        </div>

        <Link to={`/products/id/${product.id}`}>
          <p className="name mt-2">{product.name}</p>
        </Link>
        <div className="price-area flex flex-col lg:flex-row lg:gap-1 lg:items-center">
          <p
            className={`original ${
              product.sale ? "line-through opacity-50" : "font-bold"
            }`}
          >
            $ {product.price}
          </p>

          {product.sale && (
            <p className="sale flex items-center gap-2 lg:gat-0 text-white bg-black px-4 py-0.5 text-left lg:ml-2">
              {product.new_price[1]}%{" "}
              <span className="font-bold ">$ {product.new_price[0]}</span>
            </p>
          )}
        </div>
      </section>
      <div className="col-span-1"></div>
    </div>
  );
};

export default ProductItem;
