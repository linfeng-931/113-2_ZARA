import ProductItem from "./ProductItem";

const ProductList = ({ product }) => {
  return (
    <div className="grid grid-cols-24">
      <div className="col-start-3 col-span-16 grid grid-cols-16 min-h-auto">
        {product.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className="filter col-start-20 col-span-3">
        <p>篩選條件</p>
        <hr />
        <p>Size</p>
        <p>Color</p>
        <p>Price</p>
      </div>
    </div>
  );
};

export default ProductList;

// min-h-auto grid grid-cols-2 lg:grid-cols-3 gap-4 col-span-6
