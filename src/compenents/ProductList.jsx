import ProductItem from "./ProductItem";
import { RiResetLeftFill } from "react-icons/ri";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const ProductList = ({ product }) => {
  const colorGroups = {
    RED: {
      names: ["RED", "WINE", "BURGUNDY", "RUSSET", "TERRACOTTA"],
      hex: ["#FF0000", "#800020", "#800000", "#8B2500", "#E2725B"],
    },
    BLUE: {
      names: ["BLUE", "INDIGO", "BLUISH"],
      hex: ["#0000FF", "#4B0082", "#5DADE2"],
    },
    GREEN: {
      names: ["GREEN", "KHAKI"],
      hex: ["#008000", "#F0E68C"],
    },
    YELLOW: {
      names: ["YELLOW", "SAND", "MINK"],
      hex: ["#FFFF00", "#C2B280", "#D8CAB8"],
    },
    BROWN: {
      names: ["BROWN", "CAMEL", "CHOLOCLATE"],
      hex: ["#8B4513", "#C19A6B", "#7B3F00"],
    },
    GREY: {
      names: ["GREY", "CHARCOAL", "ECRU"],
      hex: ["#808080", "#36454F", "#C2B280"],
    },
    PINK: {
      names: ["PINK", "CORAL"],
      hex: ["#FFC0CB", "#FF7F50"],
    },
    BLACK: {
      names: ["BLACK"],
      hex: ["#000000"],
    },
    WHITE: {
      names: ["WHITE"],
      hex: ["#FFFFFF"],
    },
    MULTI: {
      names: ["MULTICOLOURED"],
      hex: [],
    },
  };
  const [isOpen, setIsOpen] = useState({
    size: false,
    color: false,
    price: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="grid grid-rows-[repeat(2,minmax(0,auto))] grid-cols-9 gap-4 lg:gap-0 lg:grid-rows-1 lg:grid-cols-24">
      <div className="col-start-2 col-span-8 lg:col-start-3 lg:col-span-16 grid grid-cols-8 lg:grid-cols-16 min-h-auto">
        {product.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div className=" row-start-1 col-start-2 flex flex-col gap-2 text-left col-span-7 text-sm lg:order-1 lg:col-start-20 lg:col-span-3">
        <p className="text-right font-bold">篩選條件</p>
        <hr />
        <div className="mb-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => toggleSection("size")}
          >
            <span>SIZE</span>
            <span>{isOpen.size ? "−" : "+"}</span>
          </div>
          <Transition
            show={isOpen.size}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-y-0 opacity-0"
            enterTo="transform scale-y-100 opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform scale-y-100 opacity-100"
            leaveTo="transform scale-y-0 opacity-0"
          >
            <div className=" mt-2 text-sm flex gap-4 justify-start">
              <button className="cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                S
              </button>
              <button className="cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                M
              </button>
              <button className="cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                L
              </button>
              <button className="cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                XL
              </button>
            </div>
          </Transition>
        </div>
        <div className="mb-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => toggleSection("color")}
          >
            <span>COLOR</span>
            <span>{isOpen.color ? "−" : "+"}</span>
          </div>
          <Transition
            show={isOpen.color}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-y-0 opacity-0"
            enterTo="transform scale-y-100 opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform scale-y-100 opacity-100"
            leaveTo="transform scale-y-0 opacity-0"
          >
            <div className=" mt-2 text-sm flex flex-wrap justify-between gap-4 ">
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#FF0000]"></span>RED
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#0000FF]"></span>BLUE
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#008000]"></span>GREEN
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#FFFF00]"></span>YELLOW
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#8B4513]"></span>BROWN
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#808080]"></span>GREY
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#FFC0CB]"></span>PINK
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#000000]"></span>BLACK
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#FFFFFF] border-[0.1px]"></span>
                WHITE
              </button>
              <button className="flex items-center mr-2 cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="w-3 h-3 mr-2 bg-[#FFFFFF]"></span>MULTI
              </button>
            </div>
          </Transition>
        </div>
        <div className="mb-4">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => toggleSection("price")}
          >
            <span>PRICE</span>
            <span>{isOpen.price ? "−" : "+"}</span>
          </div>
          <Transition
            show={isOpen.price}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-y-0 opacity-0"
            enterTo="transform scale-y-100 opacity-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform scale-y-100 opacity-100"
            leaveTo="transform scale-y-0 opacity-0"
          >
            <div className=" mt-2 text-sm flex flex-col items-start gap-2">
              <button className="cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="mr-2">●</span> 價格由低到高
              </button>
              <button className="cursor-pointer opacity-50 hover:opacity-100 hover:font-bold">
                <span className="mr-2">●</span> 價格由高到低
              </button>
            </div>
          </Transition>
        </div>

        {/* RESET ALL */}
        <div className="mt-6 flex items-center justify-end gap-2 text-gray-400 text-xs cursor-pointer hover:text-black transition">
          <span>RESET ALL</span>
          <RiResetLeftFill className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default ProductList;

// min-h-auto grid grid-cols-2 lg:grid-cols-3 gap-4 col-span-6
