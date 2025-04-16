import ProductItem from "./ProductItem";

const ProductList = ({ product }) => {
  return (
    <div className="col-start-2 col-span-8 lg:col-start-3 lg:col-span-16 grid grid-cols-8 lg:grid-cols-16 min-h-auto">
      {product.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
