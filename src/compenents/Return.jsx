export default function Return() {
  return (
    <div className="flex flex-col text-left gap-2 m-auto lg:m-0 col-span-12 lg:col-start-4 lg:col-span-8 max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">如何退貨</h1>
        <img src="/image/howtoreturn.jpg" alt="" className=" mb-4" />
        <p className="opacity-50">
          如果購買的商品不符合您的期望，我們提供您退貨的可能性。
        </p>
        <p className="opacity-50">
          請參考詳細說明其條件和可用的各種選項，以便您辦理退貨。
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">退貨條件</h1>
        <ol className="list-disc flex flex-col text-left text-sm gap-6 ml-4">
          <li className="leading-8">
            您需在規定<b>期限</b>內辦理退貨： <br />
            <b>網上購買</b>： 自您的訂單出貨之日起算<b>30天</b>內有效。
            <br />
            <b>實體商店購買</b>： 自購買之日起算<b>30天</b>內有效。
          </li>
          <li>
            商品需保持<b>原始狀態</b>並保留所有標籤。
          </li>
          <li>您僅能在與購買時相同的市場/地區進行退貨。</li>
        </ol>
        <p className="bg-[#a3a3a3] p-6 my-4">
          <b>提醒您</b>：在您的訂單詳情中，我們將會顯示退貨有效期限。
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">在 ZARA 商店辦理退貨</h1>
        <p className="mb-4">
          您可以在我們的任何一家 Zara 商店<b>免費辦理</b>
          退貨，只要其具有所屬的商品部門即可。
        </p>
        <p className="leading-6">
          網上購買和實體商店購買的商品皆可選擇前往實體商店退貨。
          您只需交付退貨商品並出示<b>購買收據</b>即可。
          在實體商店購買的商品退貨，請提供統一發票（或電子發票）和購買收據。
        </p>
        <p className="bg-[#a3a3a3] p-6 my-4">
          <b>提醒您</b>
          ：如果您個人無法前往商店辦理退貨，可委託他人代為處理（信用卡以及電子支付方式除外）。
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">到府取件</h1>
        <ol className="flex flex-col text-left text-sm gap-6">
          <li>
            您可以選擇到府取件服務的方式退回商品。
            <b>申請退貨</b>費用：80NT$，將從您的退款中扣除。
          </li>
          <li>您可以前往您帳戶的退貨頁面申請退貨。</li>
          <li>
            在您提出退貨申請後，快遞公司將在<b>24-48小時</b>
            內前往您選擇的地址收取您的包裹。
          </li>
          <li>無需印出退貨標籤，快遞人員將會準備退貨標籤。</li>
          <li>提醒您，此選項僅適用於網上購買。</li>
          <li>無需包含購買票據。</li>
        </ol>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">使用交貨點進行退貨</h1>
        <ol className="flex flex-col text-left text-sm gap-6">
          <li>您可以將包裹送至交貨點來退回商品。</li>
          <li>
            <b>申請退貨費用</b>：80NT$，將從您的退款中扣除。
          </li>
          <li>您可以前往您帳戶的退貨頁面申請退貨。</li>
          <li>
            在您提出退貨申請後，我們將傳送一封電子郵件給您，其中包含寄送用裝箱和標籤等相關配送說明。
          </li>
          <li>
            請按照說明操作，並前往您選擇的交貨點超商（7-11）交付欲退貨的商品。
          </li>
          <li>提醒您，此選項僅適用於網上購買。</li>
          <li>無需包含購買票據。</li>
        </ol>
        <p className="bg-[#a3a3a3] p-6 my-4">
          <b>提醒您</b>
          ：您需在退貨期限內寄出欲退貨的商品。
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
            <div className="collapse-title ">我應如何準備退貨包裹？</div>
            <div className="collapse-content text-sm">
              如果您已丟棄原包裝，可以使用其他包裝裝入退貨商品，但需妥善密封以避免商品遺失。無需於包裹上書寫任何配送地址。
              無需包含購買票據。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              我已申請訂單取件，但尚未執行，我該怎麼辦？
            </div>
            <div className="collapse-content text-sm">
              如果快遞公司沒有前往收取您的訂單，請與我們聯絡，以便我們重新處理。
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
            <div className="collapse-title ">
              我是否需要列印退貨標籤才能於交貨點交付訂單？
            </div>
            <div className="collapse-content text-sm">
              如果您已收到退貨標籤，則請將其列印出來以便於交貨點辦理。如果您收到條碼或
              QR 代碼則無需列印，只需按照電子郵件中隨附的說明操作即可。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              我可以在同一次寄送中退回不同訂單的商品嗎？
            </div>
            <div className="collapse-content text-sm">
              提醒您，您可以在同一批退貨中退回不同訂單的商品。無論屬於哪張訂單，請選擇您要退貨的所有商品，然後繼續申請退貨流程直到完成。提醒您，在此過程中，您需告知您將用於寄送退貨的箱子數量。
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
              <br />■
              如果您已經在商店收銀台完成訂單付款，而之後想要退貨，則需前往任何一家
              Zara 商店辦理退貨。
              <br />■
              如果您購買時使用了線上付款方式，您可以在店內退貨，或者是透過 Zara
              官網或 APP 申請退貨。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
