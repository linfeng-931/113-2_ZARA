import { Link } from "react-router";
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
        <nav className="flex flex-col gap-2 cursor-pointer">
          <h6>協助</h6>
          <hr />
          <Link to={`/help-center/size`}>商品和尺寸</Link>
          <Link to={`/help-center/deliverymethods`}>寄送</Link>
          <Link to={`/help-center/paymentmethods`}>付款和發票</Link>
          <Link to={`/help-center/purchases`}>我的購買</Link>
          <Link to={`/help-center/how-to`}>換貨、退貨和退款</Link>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6>請跟隨我們</h6>
          <hr />
          <a>電子報</a>
          <a>TIKTOK</a>
          <a>INSTARGRAM</a>
          <a>FACEBOOK</a>
          <a>X</a>
          <a>LINE</a>
          <a>PINTEREST</a>
          <a>YOUTUBE</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6>公司</h6>
          <hr />
          <a>JOIN LIFE</a>
          <a>辦事處</a>
          <a>商店</a>
          <a>與我們共事</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6>方針</h6>
          <hr />
          <a>隱私條款</a>
          <a>購買條件</a>
          <a>COOKIE配置</a>
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
