export default function Delivery() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">配送方式、時間和費用</h1>
        <img src="/image/deliver.jpg" alt="" className=" mb-4" />
        <ol className=" flex flex-col text-left text-sm gap-4">
          <li>
            根據配送地址、訂單建立時間和商品庫存情況，配送選項可能會有所不同。
          </li>
          <li>
            在處理您的訂單時，我們會向您顯示可用的<b>配送方式</b>、<b>運費</b>和
            <b>預計送達日期</b>。
          </li>
          <li>提醒您，配送僅會於工作日進行。</li>
          <li>提醒您，訂單的配送地址必須屬於購買所在的同一市場/地區。</li>
        </ol>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">寄送至 ZARA 商店</h1>
        <ol className=" flex flex-col text-left text-sm gap-6">
          <li>
            <b>期間</b>：2-3個工作日
          </li>
          <li>
            <b>費用</b>： 免費
          </li>
          <li>
            在下單時，我們將向您顯示<b>可用的商店</b>和<b>預計送達日期</b>。
          </li>
          <li>
            您可在15天內<b>前往門市取件</b>。您只需出示電子 QR 代碼即可。
            若由他人代為送達，代送者需出示身份證明文件。
          </li>
          <li>使用我們的商店位置搜尋工具查詢您附近的 Zara 商店。</li>
        </ol>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">寄送到府</h1>
        <ol className="list-disc flex flex-col text-left text-sm gap-4 ml-4">
          <li className="leading-8">
            <b>次日送達</b> - NT$ 80 <br />
            僅非折扣商品消費滿1500 新台幣可享免費配送
          </li>
          <li>
            <b>購買當日送達</b> - NT$ 120 <br />
            台北地區週一至週六上午11:30之前完成的所有訂單於當日送達（不包括陽明山）。
          </li>
        </ol>
        <p className="mt-4">
          只要您的訂單狀態許可，您可以進入您的帳戶中的訂單詳細資料頁面修改寄送地址。
        </p>
        <p className="bg-[#a3a3a3] p-6 my-4">
          <b>提醒您</b>：
          根據您下單的時間而定，上述某些選項可能不適用。購買時，我們將向您顯示預計送達日期。
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">7-11便利店取貨點</h1>
        <ol className="list-disc flex flex-col text-left text-sm gap-4 ml-4">
          <li>
            <b>期間</b> ：2-3個工作日
          </li>
          <li className="leading-8">
            <b>費用</b>： NT$ 80 <br />
            僅非折扣商品消費滿1500 新台幣可享免費配送
          </li>
        </ol>
        <p className="mt-4">
          在完成購買時，我們將向您顯示<b>適用的交貨點</b>和您的訂單
          <b>預計送達日期</b>。
        </p>
        <p className="mt-4 leading-6">
          當您的訂單抵達選定的交貨點時，我們會通知您。提醒您，您需出示身份證明文件才能取件。如果由他人代為取件，代領人需要出示書面授權文件和您的身份證明文件影本。
        </p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我什麼時候能收到我的訂單？</div>
            <div className="collapse-content text-sm">
              <p>
                下單後，我們將為您提供預計配送日期。您可以透過您的帳戶追蹤配送狀態。
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              如果無法交付我的訂單，後續事宜為何？
            </div>
            <div className="collapse-content text-sm">
              <p>
                如果您選擇配送到府，但送貨時您不在府上，請與我們聯絡，我們將與快遞公司確認。
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我可以拒絕交付我的訂單嗎？</div>
            <div className="collapse-content text-sm">
              <p>
                如果已您不再希望收到您購買的商品，請與我們聯絡，以便我們幫您進行後續處理。
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我可以撤銷訂單嗎？</div>
            <div className="collapse-content text-sm">
              <p>
                如果我們無法在預計日期送達您的訂單，我們將傳送電子郵件通知您，您將能夠在訂單詳情中查看新的配送日期。
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              我的訂單顯示已送達，但我尚未收到，我該怎麼辦？
            </div>
            <div className="collapse-content text-sm">
              <p>
                如果您尚未收到訂單，但卻顯示已送達，請與我們聯絡，我們將與快遞公司查證並進行處理。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
