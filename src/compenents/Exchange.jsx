export default function Exchange() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">換貨方式</h1>
        <img src="/image/howtoreturn.jpg" alt="" className=" mb-4" />
        <p className="opacity-50">
          Zara 提供免費更換購買的商品。請參考詳細說明其條件以及辦理方式。
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">換貨條件</h1>
        <ol className="list-disc flex flex-col text-left text-sm gap-6">
          <li className="leading-8">
            您需於規定期限內辦理換貨： <br />
            <b>實體商店購買</b>： 自購買之日起算<b>30天</b>內有效。
          </li>
          <li>
            商品需保持<b>原始狀態</b>並保留所有標籤。
          </li>
          <li>您僅能在與購買時相同的市場/地區進行退貨。</li>
        </ol>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">在 ZARA 商店辦理退貨</h1>
        <p className="mb-4">
          Zara商店的換貨選項不適用於網上購買。提醒您，您可以在規定期限內退回訂單並重新購買。
        </p>
        <p>
          如果您是在商店購買的商品，可以選擇更換其他商品、不同尺寸或不同顏色。
        </p>
        <p className="bg-[#a3a3a3] p-6 my-4">
          <b>提醒您</b>
          ：如欲進行換貨，則需出示購買收據。
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">線上換貨</h1>
        <ol className="flex flex-col text-left text-sm gap-6">
          <li>
            如果您透過網上購買商品，您可以
            <b>使用我們的網站或應用程式申請更換尺寸</b>。
          </li>
          <li className="leading-6">
            流程非常簡單：您只需要選擇想退換的商品和希望收到的尺寸即可。所選商品將以新訂單配送，您也需要退回不想要的商品。為此，我們為您提供了幾個選項，您可以參考如何退貨部分。
          </li>
          <li>
            您必須在申請換貨之日起14天內退回您不想要的服裝。如果逾期未收到換貨商品，則將以原付款方式收取新商品的金額。
          </li>
          <li>
            如果您想修改或取消您的換貨申請，請與我們聯絡以便進行相關處理。
          </li>
        </ol>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          {" "}
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">什麼情況下不能申請線上換貨？</div>
            <div className="collapse-content text-sm">
              <p className="mb-4">
                下列情況無法線上申請換貨，但您可以前往我們的任何一家商店辦理換貨。
              </p>
              <ol className="list-disc flex flex-col text-left text-sm gap-6 ml-4">
                <li className="leading-6">
                  使用下列方式付款的訂單將無法選擇線上換貨選項：Paypal、Ideal、Bancontact、Diners、P24、禮品卡、Bizum、ApplePay、AndroidPay（某些付款方式可能不適用於您所在的市場/地區）。
                </li>
                <li>如果購買的商品為單一尺寸或已無貨，則不會顯示換貨選項。</li>
                <li>
                  無法同時進行兩次以上的換貨申請，但每次申請可包括多達5件商品。
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
