export default function ItemsAvailability() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">商品庫存</h1>
        <img src="/image/jeans.jpg" alt="" className=" mb-4" />
        <p className="opacity-50">
          您在此可以找到我們的商品在網上和商店的庫存資訊。我們每週都有新上架單品！
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">商品的線上庫存</h1>
        <ol className="flex flex-col text-left text-sm gap-6">
          <li className="leading-8">
            我們建議您查看我們的網站，以了解所有新上市單品和我們商品的庫存。
          </li>
          <li>
            如果您感興趣的商品尺碼缺貨，但具有<b>即將補貨</b>
            標示，您可以提供給我們您的電子郵件，如果接下來的15天內再次有貨，我們會通知您。如果這段期間未收到通知，則該通知服務將失效，您需要重新登記。此非預訂流程。
          </li>
          <li>
            我們一些商品可能顯示某些尺寸<b>數量有限</b>
            的訊息。如果您對該商品感興趣，我們建議您在其缺貨前盡快購買。
          </li>
          <li>
            提醒您，保存在<b>購物籃</b>
            中的商品不代表預訂商品。如果您的購物籃中部分商品缺貨，我們將會通知您，以便您將其移除並繼續完成其餘商品的購買。
          </li>
        </ol>
        <p className="bg-[#a3a3a3] p-6 my-4">
          您可以在每項商品的頁面上找到我們為您提供的<b>造型搭配</b>
          建議，或者是您可能會感興趣的<b>類似產品</b>。
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">門市商品庫存</h1>
        <p className="mb-4 leading-6">
          此外，您還可在 Zara.com 上查看<b>商店的庫存情況</b>
          ，只要使用「檢視商店庫存情況」選項即可。選擇您感興趣的商品和位置，我們就會向您展示附近有銷售該商品的商店。提醒您，我們商店的庫存資訊僅供參考。
        </p>
        <p>
          如果您正在我們的 Zara
          店內，而您感興趣的服裝沒有現貨，我們的員工可以夠幫助您使用門市內的裝置完成網上購買。
        </p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              我可以使用圖片查詢商品位置嗎？
            </div>
            <div className="collapse-content text-sm">
              您可以在我們的應用程式中找到此選項。點擊放大鏡符號即可以按圖片進行搜尋。如果找不到您正在尋找的服裝，請與我們連絡，以便我們為您提供協助。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">是否可以跨店面寄送商品？</div>
            <div className="collapse-content text-sm">
              提醒您，我們無法在不同的 Zara 商店之間進行調貨。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">ZARA 商店的營業時間為何？</div>
            <div className="collapse-content text-sm">
              使用我們的商店位置搜尋工具了解您附近 Zara
              商店的資訊。選擇您喜歡的商店後將會顯示地址、電話號碼和營業時間。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
