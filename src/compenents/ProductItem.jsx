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
        <p className="price font-bold">
          $ <span className="ml-1">{product.price}</span>
        </p>
        <div className="colors flex translate-x-[-6px]">{colors}</div>
      </section>
      <div className="col-span-1"></div>
    </div>
  );
};

export default ProductItem;
