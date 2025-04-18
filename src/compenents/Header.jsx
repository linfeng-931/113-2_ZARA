import { CircleUserRound, CircleHelp } from "lucide-react";
import Menu from "./Menu";
import SetColorMode from "./SetColorMode";
import Cart from "./Cart";
import { Link } from "react-router";

function Header() {
  return (
    <>
      <div className="header-container flex w-[100%] h-[100px] items-center justify-between z-100 ">
        <div className="left flex pl-7 md:pl-15 items-center">
          <Menu />

          <Link to="/" className="dark:hidden z-9999">
            <img
              className="hidden w-45 md:block"
              src="/image/logo2-1.png"
            />
          </Link>
          <Link to="/" className="z-9999 hidden md:block">
            <img
              className="hidden w-45 dark:block"
              src="/image/logo2-2.PNG"
            />
          </Link>
        </div>

        <div className="right flex pr-7 gap-5 md:pr-15 md:gap-8 items-center z-99">
          <SetColorMode />

          <div className="line hidden md:block h-12 w-[1px] bg-black dark:bg-white opacity-50"></div>

          <div className="member flex flex-col items-center gap-1.5 whitespace-nowrap hover:opacity-50 cursor-pointer">
            <CircleUserRound />
            <p>Login</p>
          </div>
          <div className="member flex flex-col items-center gap-1.5 whitespace-nowrap hover:opacity-50 cursor-pointer">
            <Cart />
            <p>Cart</p>
          </div>
          <div className="member flex flex-col items-center gap-1.5 whitespace-nowrap hover:opacity-50 cursor-pointer">
            <CircleHelp />
            <p>Help</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
