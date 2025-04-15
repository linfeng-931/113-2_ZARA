import { useParams } from "react-router";
import _ from "lodash";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import product from "../../json/product.json";
import ProductList from "../compenents/ProductList";
import Breadcrumb from "../compenents/Breadcrumb";

const Category = () => {
  const { categoryName } = useParams();
  const _products = product.filter(
    (x) => x?.category2.toUpperCase() === categoryName.toUpperCase()
  );
  //   console.log(_products);

  return (
    <div>
      <Header />
      <Breadcrumb product={_products} />
      <ProductList product={_products} />
      <Footer />
    </div>
  );
};

export default Category;
