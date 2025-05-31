export default function IpodOrder() {
  return (
    <div className="flex flex-col text-left gap-2 m-auto lg:m-0 col-span-12 lg:col-start-4 lg:col-span-8 max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">使用商店裝置進行網上購買</h1>
        <img src="/image/ipad.jpg" alt="" className=" mb-4" />
        <p className="leading-8">
          如果您需要的話，可以於 Zara
          商店進行網購訂單。請向我們的工作人員詢問此服務，他們將幫助您完成購買。
          <br />
          如果您已經擁有 Zara
          帳戶，則可以輸入您的電子郵件地址和密碼並以註冊客戶身份下單。您將以電子郵件的方式收到您購買商品的所有相關資訊。
          <br />
          於商店裝置進行的網上購買與直接在我們的網站上購買具有相同的配送選項。
        </p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我如何為商店的線上訂單付款？</div>
            <div className="collapse-content text-sm leading-8">
              在進行購買時，我們的工作人員將會告知您該門市可提供支付訂單的選項：
              <br />● <b>從進行購買的裝置上</b>付款。
              <br />● <b>在商店收銀台付款。</b>請在 2
              小時內完成付款。如果您未在商店內完成付款，則訂單將會被取消。
              <br />
              請留意，所提供的選項因您前往的 Zara 商店而異。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              我可以如何退回於商店下達的網購訂單？
            </div>
            <div className="collapse-content text-sm leading-8">
              從商店訂購線上商品的退貨方式將依據您的付款方式而定：
              <br />● 如果您已經在<b>商店收銀台</b>
              完成訂單付款，而之後想要退貨，則需前往任何一家 Zara 商店辦理退貨。
              <br />● 如果您購買時使用了<b>線上付款方式</b>
              ，您可以在店內退貨，或者是透過 Zara 官網或 APP 申請退貨。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
