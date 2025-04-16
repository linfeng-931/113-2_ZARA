import { useParams } from "react-router";
import React, { useState, useMemo } from "react";
import _ from "lodash";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import product from "../../json/product.json";
import ProductList from "../compenents/ProductList";
import Breadcrumb from "../compenents/Breadcrumb";
import Sidebar from "../compenents/Sidebar";

const Category = () => {
  const { categoryName } = useParams();

  const _products = product.filter((x) => {
    if (categoryName == "Sale") {
      return x?.sale === true;
    }
    return x?.category2.toUpperCase() === categoryName.toUpperCase();
  });

  const [filter, setFilter] = useState({
    size: [],
    color: [],
    price: [],
  });

  const [reset, setReset] = useState(false);

  const colorGroups = {
    RED: ["RED", "WINE", "BURGUNDY", "RUSSET", "TERRACOTTA"],
    BLUE: ["BLUE", "INDIGO", "BLUISH"],
    GREEN: ["GREEN", "KHAKI", "SEA-GREEN"],
    YELLOW: ["YELLOW", "SAND", "MINK"],
    BROWN: ["BROWN", "CAMEL", "CHOLOCLATE", "DARK-STRAW"],
    GREY: ["GREY", "CHARCOAL", "ECRU"],
    PINK: ["PINK", "CORAL"],
    BLACK: ["BLACK"],
    WHITE: ["WHITE"],
    MULTI: ["MULTICOLOURED"],
  };

  const sizeMap = ["S", "M", "L", "XL"];
  const colorToGroup = {};
  Object.entries(colorGroups).forEach(([group, colors]) => {
    colors.forEach((c) => {
      colorToGroup[c.toUpperCase()] = group;
    });
  });

  const hasSize = (stock, targetSize) => {
    const index = sizeMap.indexOf(targetSize);
    return stock[index] > 0;
  };

  const filteredProducts = useMemo(() => {
    return _products
      .filter((product) => {
        const matchSize =
          filter.size.length === 0 ||
          product.class.some((c) =>
            filter.size.some((size) => hasSize(c.stock, size))
          );

        const matchColor =
          filter.color.length === 0 ||
          product.class.some((c) => {
            const colorName = c.color.toUpperCase();
            const group = colorToGroup[colorName];
            return filter.color.includes(group);
          });

        return matchSize && matchColor;
      })
      .sort((a, b) => {
        const priceA = a.sale ? a.new_price[0] : a.price;
        const priceB = b.sale ? b.new_price[0] : b.price;

        if (filter.price.includes("incresing")) return priceA - priceB;
        if (filter.price.includes("decreasing")) return priceB - priceA;
        return 0;
      });
  }, [_products, filter]);

  return (
    <div>
      <Header />
      <Breadcrumb product={_products} />
      <div className="grid grid-rows-[repeat(2,minmax(0,auto))] grid-cols-9 gap-4 lg:gap-0 lg:grid-rows-1 lg:grid-cols-24 ">
        <ProductList product={filteredProducts} />
        <Sidebar
          filter={filter}
          setFilter={setFilter}
          reset={reset}
          setReset={setReset}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Category;
