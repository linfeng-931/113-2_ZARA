export default function Invoices() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">發票</h1>
        <img src="/image/howtoreturn.jpg" alt="" className=" mb-4" />

        <div>
          <ul className="flex flex-col gap-4">
            <li>
              <b>商店購物的發票</b>：當您在我們的 Zara
              商店購物，您會在付款後取得發票。
            </li>
            <li>
              <b>網上購買的發票</b>：
              <ol className="flex flex-col gap-2 list-disc mt-4 ml-4 leading-8">
                <li>
                  在您支付訂單前，您可以按照發票資訊所提供之選擇，確認您發票開立方式。訂單一旦寄出，綠界科技將會以您選擇的資料來開立發票，並寄送電子發票明細通知到您帳戶中所註冊的郵箱。
                </li>
                <li>
                  如發生退貨，如適用，您新的電子發票資訊或折讓單將會由綠界科技發郵件提供。
                </li>
                <li>
                  個人電子發票列印：您可前往超商多媒體機台列印發票，發票列印流程請參考綠界超商多媒體列印消費發票操作流程。
                </li>
                <li>
                  公司戶電子發票及折讓單列印：您可於綠界科技寄送的通知信中取得「電子發票證明聯」或「營業人銷貨退回進貨退出或折讓証明單」電子檔，即可自行列印。
                </li>
                <li>
                  依統一發票使用辦法規定，個人發票一經開立，不得更改或改開公司戶發票。
                </li>
                <li>
                  請記得，應以您的公司資料建立一個帳戶，以便為您的公司開立發票。
                </li>
              </ol>
            </li>
            <li>
              <b>中獎發票列印</b>
              ：發票列印請參考綠界超商多媒體列印中獎發票操作流程説明。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
