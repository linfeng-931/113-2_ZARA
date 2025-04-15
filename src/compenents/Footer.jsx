const Footer = () => {
  return (
    <footer className="grid grid-rows-[repeat(2, minmax(0, auto)] mt-4 grid-cols-24 text-sm justify-center bg-[url(/image/footer.jpg)] text-white py-6 pt-24">
      <aside className="flex flex-col items-start gap-6  text-left col-span-5 col-start-3">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="text-sm leading-6">
          ZARA 是最重要的國際化時裝公司之一。 屬於
          Inditex，世界上最大的經銷集團之一。
          我們通過自有商店網路將設計、製造、配送和銷售整合在一起，形成了獨特的商業模式，而客戶是這一模式的中心。
          更多資訊請參訪 Inditex 集團的首頁： www.inditex.comss
        </p>
      </aside>
      <section className="w-full flex justify-evenly gap-8 col-span-16 col-start-8 text-left">
        <nav className="flex flex-col gap-2">
          <h6>協助</h6>
          <hr />
          <a>商品和尺寸</a>
          <a>寄送</a>
          <a>付款和發票</a>
          <a>我的購買</a>
          <a>換貨、退貨和退款</a>
          <a>ZARA 體驗</a>
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
      <section className="flex flex-col items-center gap-4 m-auto row-start-2 col-span-20 col-start-3 mt-8 opacity-50">
        <div className="w-[80vw] h-[0.1px] bg-white"></div>
        <p>© All rights reserved</p>
      </section>
    </footer>
  );
};

export default Footer;
