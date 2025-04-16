import { Link } from "react-router";
import { useState } from "react";

const ProductItem = ({ product }) => {
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
        <img
          className="w-full max-h-120 object-cover object-center"
          src={headImg}
          alt=""
        />
        <p className="name">{product.name}</p>
        <div className="price-area flex flex-col lg:flex-row gap-2 lg:items-center">
          <p
            className={`original ${
              product.sale ? "line-through opacity-50" : "font-bold"
            }`}
          >
            $ {product.price}
          </p>

          {product.sale && (
            <p className="sale text-white bg-black px-4 py-0.5 text-left lg:ml-2">
              {product.new_price[1]}%{" "}
              <span className="font-bold ml-4">$ {product.new_price[0]}</span>
            </p>
          )}
        </div>

        <div className="colors flex translate-x-[-6px] mt-1">{colors}</div>
      </section>
      <div className="col-span-1"></div>
    </div>
  );
};

export default ProductItem;
