import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
export default function Company() {
  return (
    <div>
      <Header />
      <div className="text-left w-[80%] m-auto">
        <h1 className="mb-4 font-semibold mt-10">公司</h1>
        <p className=" mb-4">
          Zara 是最重要的國際化時裝公司之一。 屬於
          Inditex，世界上最大的經銷集團之一。
        </p>
        <p className="mb-4">
          我們通過自有商店網路將設計、製造、配送和銷售整合在一起，形成了獨特的商業模式，而客戶是這一模式的中心。
        </p>
        <p>
          更多資訊請參訪 Inditex 集團的首頁：
          <a href="https://113-2-zara.vercel.app/" className="underline">
            https://113-2-zara.vercel.app/
          </a>
        </p>
      </div>
      <div className="text-left w-[80%] m-auto">
        <h1 className="mb-4 font-semibold mt-10">訂閱最新流行資訊</h1>
        <p className=" mb-4 leading-8">
          請選擇您的興趣並每週接收新消息和流行趨勢。
          <br />
          選擇 訂閱 以確認您的偏好設定或 取消 以停止接收電子報。
        </p>
        <div className="max-w-[300px] lg:max-w-md  space-y-6 text-sm">
          <div>
            <div className="mb-6">
              <label
                for="email"
                className="block mb-2 text-sm font-medium  dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="privacy" className="border-gray-400" />
            <label for="privacy">
              接受{" "}
              <a href="#" className="underline text-blue-600">
                隱私條款
              </a>
            </label>
          </div>

          <div className="font-semibold mt-4">部門</div>

          <div className="space-y-2 ml-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="border-gray-400" />
              <span>WOMAN</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="border-gray-400" />
              <span>MAN</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="border-gray-400" />
              <span>KIDS</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="border-gray-400" />
              <span>BEAUTY</span>
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
