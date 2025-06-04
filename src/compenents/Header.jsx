import { CircleUserRound, CircleHelp, Heart } from "lucide-react";
import Menu from "./Menu";
import SetColorMode from "./SetColorMode";
import Cart from "./Cart";
import { Link } from "react-router";
import { useAuth } from "../contexts/authContext";
import MyCollection from "./MyCollection";
import { motion } from "framer-motion";

function Header() {
  const { userLoggedIn } = useAuth();

  return (
    <>
      <div className="header-container flex w-[100%] h-[100px] items-center justify-between z-100 ">
        <div className="left flex pl-7 md:pl-15 items-center">
          <Menu />

          <Link to="/" className="dark:hidden z-9999">
            <img className="hidden w-45 md:block" src="/image/logo2-1.png" />
          </Link>
          <Link to="/" className="z-9999 hidden md:block">
            <img className="hidden w-45 dark:block" src="/image/logo2-2.PNG" />
          </Link>
        </div>

        <div className="right flex pr-7 gap-5 md:pr-15 md:gap-8 items-center z-99">
          <SetColorMode />

          <div className="line hidden md:block h-12 w-[1px] bg-black dark:bg-white opacity-50"></div>
          <div className="member flex flex-col items-center whitespace-nowrap">
            <MyCollection userLoggedIn={userLoggedIn} />
          </div>
          <div className="member flex flex-col items-center whitespace-nowrap">
            <Cart userLoggedIn={userLoggedIn} />
          </div>
            
          <div className="dropdown z-999">
            <div tabIndex={0} role="button" className="flex flex-col items-center whitespace-nowrap hover:opacity-50 cursor-pointer">
              <CircleHelp />
              <p>Help</p>
            </div>
            <ul tabIndex={0} className="dropdown-content bg-white dark:bg-zinc-800 right-0 menu rounded-box w-52 p-5 shadow-sm text-left">
              <Link to={`/help-center/size`}>
                <motion.div
                  className="relative inline-block cursor-pointer"
                  whileHover="hover"
                  initial="initial"
                  animate="initial"
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                >
                  商品和尺寸
                  <motion.div
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 -bottom-1 h-[1.5px] bg-black dark:bg-white"
                  />
                </motion.div>
              </Link>
              <Link to={`/help-center/deliverymethods`}>
                <motion.div
                  className="mt-2 relative inline-block cursor-pointer"
                  whileHover="hover"
                  initial="initial"
                  animate="initial"
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                >
                  寄送
                  <motion.div
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 -bottom-1  h-[1.5px] bg-black dark:bg-white"
                  />
                </motion.div>
              </Link>
              <Link to={`/help-center/paymentmethods`}>
                <motion.div
                  className="mt-2 relative inline-block cursor-pointer"
                  whileHover="hover"
                  initial="initial"
                  animate="initial"
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                >
                  付款和發票
                  <motion.div
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 -bottom-1  h-[2px] bg-black dark:bg-white"
                  />
                </motion.div>
              </Link>
              <Link to={`/help-center/purchases`}>
                <motion.div
                  className="mt-2 relative inline-block cursor-pointer"
                  whileHover="hover"
                  initial="initial"
                  animate="initial"
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                >
                  我的購買
                  <motion.div
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 -bottom-1  h-[1.5px] bg-black dark:bg-white"
                  />
                </motion.div>
              </Link>
              <Link to={`/help-center/how-to`}>
                <motion.div
                  className="mt-2 relative inline-block cursor-pointer"
                  whileHover="hover"
                  initial="initial"
                  animate="initial"
                  variants={{
                    initial: {},
                    hover: {},
                  }}
                >
                  換貨、退貨和退款
                  <motion.div
                    variants={{
                      initial: { width: 0 },
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute left-0 -bottom-1  h-[1.5px] bg-black dark:bg-white"
                  />
                </motion.div>
              </Link>
            </ul>
          </div>

          <Link to={userLoggedIn ? "/user/detail" : "/user/login"}>
            <div className="member flex flex-col items-center whitespace-nowrap hover:opacity-50 cursor-pointer">
              <CircleUserRound />
              <p>Login</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
