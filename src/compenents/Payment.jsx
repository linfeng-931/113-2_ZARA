export default function Payment() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">付款方式</h1>
        <img src="/image/howtoreturn.jpg" alt="" className=" mb-4" />
        <p className="opacity-50 mb-4">
          Zara.com
          提供下列付款方式。在處理您的購買時，我們將向您顯示適用於您訂單的選項。
        </p>
        <p className="opacity-50">
          我們會定期從您的帳戶中刪除過期或無效的付款方式。
        </p>
      </div>
      <div className="mt-4">
        <ul className="flex flex-col gap-8">
          <li className="flex gap-4 items-center">
            <img src="/image/visa.png" className="max-w-[72px]" alt="" />
            Visa
          </li>
          <li className="flex gap-4 items-center">
            <img src="/image/mastercard.png" className="max-w-[72px]" alt="" />
            Mastercard
          </li>
          <li className="flex gap-6 items-center">
            <img src="/image/jcb.png" className="max-w-[52px] ml-3" alt="" />
            JCB
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p className="mb-4">
          在完成支付時，您可以選擇其中一種方式處理電子發票：
        </p>
        <ul className="list-disc flex flex-col gap-8 text-sm ml-4">
          <li>
            存入會員載具：由 Zara.com管理您的電子發票,
            並於您中獎時寄發通知給您。
          </li>
          <li>捐贈發票：將您的電子發票捐贈給經政府立案核准的財團法人。*</li>
          <li>
            存入共通性載具：將您的電子發票存到您的個人載具,
            Zara.com將不保管您的電子發票。*
          </li>
        </ul>
        <p className="mt-4 font-semibold">
          * 捐贈發票和存入共通性載具功能因為技術上的問題暫時無法使用,
          如果您需要捐贈發票或將您的發票存入共通性載具, 請聯繫客服支援。
        </p>
        <p className="mt-4">
          如果您在付款時選擇列印電子發票，發票將由顧客自行處理。
        </p>
        <p className="mt-4">
          請注意，如需申請公司發票請以“公司”名義註冊會員。如果您是以“個人”
          名義註冊，您將無法申請公司發票。
        </p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          {" "}
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我的訂單何時扣款？</div>
            <div className="collapse-content text-sm">
              款項將在您的訂單出貨時收取。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">是否能在購物時使用折扣碼？</div>
            <div className="collapse-content text-sm">
              Zara 沒有折扣代碼。請訂閱我們的電子報以了解我們所有的促銷活動。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我如何取得我的退貨票據？</div>
            <div className="collapse-content text-sm">
              您可隨時前往帳戶的退貨頁面取得退貨標籤。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我可以分期付款嗎？</div>
            <div className="collapse-content text-sm">
              分期付款根據您購買時所使用卡片的相關條件而異。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              我被收取了兩次購買金額，我該怎麼辦？
            </div>
            <div className="collapse-content text-sm">
              部分銀行可能會顯示預授權和之後的實際扣款費用。預授權金額將自動解鎖。如果未自動解鎖，我們建議您與銀行聯絡，以加快預授權的解鎖操作。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我如何為商店的線上訂單付款？</div>
            <div className="collapse-content text-sm leading-8">
              在進行購買時，我們的工作人員將會告知您該門市可提供支付訂單的選項：
              <br />■ 從進行購買的裝置上付款。
              <br />■ 在商店收銀台付款。請在 2
              小時內完成付款。如果您未在商店內完成付款，則訂單將會被取消。
              <br />
              請留意，所提供的選項因您前往的 Zara 商店而異。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
