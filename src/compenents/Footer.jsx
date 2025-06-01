import { Link } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="grid grid-rows-[repeat(2,minmax(0,auto))] grid-cols-1 px-6 gap-8 lg:gap-0 lg:px-0 lg:grid-rows-[repeat(2, minmax(0, auto)] mt-16 lg:grid-cols-24 text-sm justify-center bg-[url(/image/footer.jpg)] text-white py-6 pt-24">
      <aside className="flex flex-col items-start gap-6  text-left lg:col-span-5 lg:col-start-3">
        <img
          src="/image/logo2-3.svg"
          alt="zara logo"
          className="w-[75px] h-[60px]"
        />
        <p className="text-sm leading-6">
          ZARA 是最重要的國際化時裝公司之一。 屬於
          Inditex，世界上最大的經銷集團之一。
          我們通過自有商店網路將設計、製造、配送和銷售整合在一起，形成了獨特的商業模式，而客戶是這一模式的中心。
          更多資訊請參訪 Inditex 集團的首頁： www.inditex.comss
        </p>
      </aside>
      <section className="w-full flex  flex-col lg:flex-row lg:justify-evenly gap-8 lg:col-span-16 lg:col-start-8 text-left ">
        <nav className="flex flex-col gap-4 cursor-pointer">
          <h6>協助</h6>
          <hr />
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
                className="absolute left-0 -bottom-1 h-[2px] bg-white"
              />
            </motion.div>
          </Link>
          <Link to={`/help-center/deliverymethods`}>
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
              寄送
              <motion.div
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[2px] bg-white"
              />
            </motion.div>
          </Link>
          <Link to={`/help-center/paymentmethods`}>
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
              付款和發票
              <motion.div
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[2px] bg-white"
              />
            </motion.div>
          </Link>
          <Link to={`/help-center/purchases`}>
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
              我的購買
              <motion.div
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[2px] bg-white"
              />
            </motion.div>
          </Link>
          <Link to={`/help-center/how-to`}>
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
              換貨、退貨和退款
              <motion.div
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[2px] bg-white"
              />
            </motion.div>
          </Link>
        </nav>
        <nav className="flex flex-col gap-4">
          <h6>請跟隨我們</h6>
          <hr />
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
            電子報
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            TIKTOK
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            INSTARGRAM
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            FACEBOOK
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            X
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            LINE
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            PINTEREST
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            YOUTUBE
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
        </nav>
        <nav className="flex flex-col gap-4 cursor-pointer">
          <h6>公司</h6>
          <hr />
          <Link to={`/company/company-corp`}>
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
              我們是誰
              <motion.div
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[2px] bg-white"
              />
            </motion.div>
          </Link>
          <Link to={`/company/location`}>
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
              商店
              <motion.div
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[2px] bg-white"
              />
            </motion.div>
          </Link>
          <Link to={`/company/work-with-us`}>
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
              與我們共事
              <motion.div
                variants={{
                  initial: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-0 -bottom-1 h-[2px] bg-white"
              />
            </motion.div>
          </Link>
        </nav>
        <nav className="flex flex-col gap-4">
          <h6>方針</h6>
          <hr />
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
            隱私條款
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            購買條件
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
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
            COOKIE配置
            <motion.div
              variants={{
                initial: { width: 0 },
                hover: { width: "100%" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 -bottom-1 h-[2px] bg-white"
            />
          </motion.div>
        </nav>
      </section>
      <section className="flex flex-col items-center gap-4 m-auto lg:row-start-2 lg:col-span-20 lg:col-start-3 mt-8 opacity-50">
        <div className="w-[80vw] h-[0.1px] bg-white"></div>
        <p>© All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
