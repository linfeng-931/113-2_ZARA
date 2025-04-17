import { RiResetLeftFill } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const Sidebar = ({ filter, setFilter, reset, setReset }) => {
  const [isOpen, setIsOpen] = useState({
    mobileSideBar: screen.width > 375 ? true : false,
    size: false,
    color: false,
    price: false,
  });

  const handleReset = () => {
    setFilter({
      size: [],
      color: [],
      price: [],
    }),
      setReset(true);
  };

  const toggleSection = (section) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleFilter = (type, value) => {
    setFilter((prev) => {
      const current = prev[type] || [];

      let updated;

      if (type === "price") {
        updated = current[0] === value ? [] : [value]; // 如果相同就取消，否則設為唯一值
        return { ...prev, [type]: updated };
      }
      updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];

      return { ...prev, [type]: updated };
    });
  };

  return (
    <div className="row-start-1 col-start-2 flex flex-col gap-2 text-left col-span-7 text-sm lg:order-1 lg:col-start-20 lg:col-span-3">
      <div onClick={() => toggleSection("mobileSideBar")}>
        <div>
          <div className="flex gap-4 items-center cursor-pointer w-full mb-2">
            <button
              className={`${
                isOpen.mobileSideBar ? "rotate-[-90deg]" : "rotate-180"
              }`}
            >
              <RiArrowLeftSLine />
            </button>{" "}
            <p className="text-right font-bold">篩選條件</p>
          </div>

          <hr />
        </div>
      </div>
      <Transition
        show={isOpen.mobileSideBar}
        enter="transition duration-200 ease-out"
        enterFrom="transform scale-y-0 opacity-0"
        enterTo="transform scale-y-100 opacity-100"
        leave="transition duration-150 ease-in"
        leaveFrom="transform scale-y-100 opacity-100"
        leaveTo="transform scale-y-0 opacity-0"
      >
        <div className="mt-4">
          <div className="mb-6">
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
                <button
                  onClick={() => toggleFilter("size", "S")}
                  className={`cursor-pointer ${
                    filter.size.includes("S")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  S
                </button>
                <button
                  onClick={() => toggleFilter("size", "M")}
                  className={`cursor-pointer ${
                    filter.size.includes("M")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  M
                </button>
                <button
                  onClick={() => toggleFilter("size", "L")}
                  className={`cursor-pointer ${
                    filter.size.includes("L")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  L
                </button>
                <button
                  onClick={() => toggleFilter("size", "XL")}
                  className={`cursor-pointer ${
                    filter.size.includes("XL")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  XL
                </button>
              </div>
            </Transition>
          </div>
          <div className="mb-6">
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
                <button
                  onClick={() => toggleFilter("color", "RED")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("RED")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#FF0000]"></span>RED
                </button>
                <button
                  onClick={() => toggleFilter("color", "BLUE")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("BLUE")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#0000FF]"></span>BLUE
                </button>
                <button
                  onClick={() => toggleFilter("color", "GREEN")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("GREEN")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#008000]"></span>GREEN
                </button>
                <button
                  onClick={() => toggleFilter("color", "YELLOW")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("YELLOW")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#FFFF00]"></span>YELLOW
                </button>
                <button
                  onClick={() => toggleFilter("color", "BROWN")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("BROWN")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#8B4513]"></span>BROWN
                </button>
                <button
                  onClick={() => toggleFilter("color", "GREY")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("GREY")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#808080]"></span>GREY
                </button>
                <button
                  onClick={() => toggleFilter("color", "PINK")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("PINK")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#FFC0CB]"></span>PINK
                </button>
                <button
                  onClick={() => toggleFilter("color", "BLACK")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("BLACK")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#000000]"></span>BLACK
                </button>
                <button
                  onClick={() => toggleFilter("color", "WHITE")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("WHITE")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#FFFFFF] border-[0.1px]"></span>
                  WHITE
                </button>
                <button
                  onClick={() => toggleFilter("color", "MULTI")}
                  className={`flex items-center mr-2 cursor-pointer ${
                    filter.color.includes("MULTI")
                      ? "opacity-100 font-bold"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="w-3 h-3 mr-2 bg-[#FFFFFF]"></span>MULTI
                </button>
              </div>
            </Transition>
          </div>
          <div className="mb-6">
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
                <button
                  onClick={() => toggleFilter("price", "incresing")}
                  className={`cursor-pointer ${
                    filter.price.includes("incresing")
                      ? "opacity-100"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="mr-2">●</span> 價格由低到高
                </button>
                <button
                  onClick={() => toggleFilter("price", "decreasing")}
                  className={`cursor-pointer ${
                    filter.price.includes("decreasing")
                      ? "opacity-100"
                      : "opacity-50"
                  } hover:opacity-100 hover:font-bold`}
                >
                  <span className="mr-2">●</span> 價格由高到低
                </button>
              </div>
            </Transition>
          </div>
          <button
            onClick={handleReset}
            className="mt-6 flex items-center justify-end gap-2 text-gray-400 text-xs cursor-pointer hover:text-black transition"
          >
            <span>RESET ALL</span>
            <RiResetLeftFill className="text-sm" />
          </button>
        </div>
      </Transition>
    </div>
  );
};

export default Sidebar;
