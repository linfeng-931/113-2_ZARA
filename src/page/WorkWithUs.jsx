import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
export default function WorkWithUs() {
  return (
    <div>
      <Header />
      <div className="text-left max-w-[60%] mx-auto flex flex-col mt-10">
        <div
          className="text-4xl font-bold mb-4 leading-16 tracking-[20px]
"
        >
          加入
          <br />
          團隊
        </div>
        <p className="leading-8 mb-4">
          我們的員工熱情、有好奇心、多才多藝 、積極和充滿活力 。
          每個人有自己獨特的個性，他們對所做的每一件事都充滿熱忱、並且富有創造力、永不止步、聰明且積極主動
          。
        </p>
        <a
          href="https://www.inditexcareers.com/portalweb/zh-TW/web/joinfashion/offers"
          className="underline"
        >
          你想成為我們的一員嗎?
        </a>
      </div>
      <Footer />
    </div>
  );
}
