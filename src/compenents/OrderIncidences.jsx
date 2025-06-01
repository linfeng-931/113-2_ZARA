export default function OrderIncidences() {
  return (
    <div className="flex flex-col text-left gap-2 m-auto lg:m-0 col-span-12 lg:col-start-4 lg:col-span-8 max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">我的訂單相關狀況</h1>
        <img src="/image/ipad.jpg" alt="" className=" mb-4" />
        <p>
          Zara
          將努力確保您在規定的期限內收到訂單中的商品，並保持商品完整。但如果您在購買時遇到問題，請與我們聯絡，以便我們評估您的狀況並幫助您解決問題。
        </p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我可以撤銷訂單嗎？</div>
            <div className="collapse-content text-sm leading-8">
              如果我們無法在預計日期送達您的訂單，我們將傳送電子郵件通知您，您將能夠在訂單詳情中查看新的配送日期。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              如果我收到了錯誤的物品，我該怎麼辦？
            </div>
            <div className="collapse-content text-sm leading-8">
              如果您收到的商品與您購買的商品不符，我們很樂意為您審查情況並進行處理。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              我沒有收到我購買的所有物品，我該怎麼辦？
            </div>
            <div className="collapse-content text-sm leading-8">
              提醒您，您的訂單可能會分批配送。請至您的帳戶頁面的訂單詳情中查看此資訊。
              <br />
              如果您有任何疑問，請與我們聯絡，以便我們確認狀況並協助處理。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
