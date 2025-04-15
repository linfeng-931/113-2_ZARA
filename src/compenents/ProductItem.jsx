import { Link } from "react-router";

const ProductItem = ({ product }) => {
  const headImg = product.class[0].img[0];
  console.log(headImg);

  return (
    <div className="col-span-4 grid grid-cols-4">
      <section className="col-span-3 mb-8">
        <img
          className="w-full max-h-120 object-cover object-center"
          src={headImg}
          alt=""
        />
      </section>
      <div className="col-span-1"></div>
    </div>
  );
};

export default ProductItem;
