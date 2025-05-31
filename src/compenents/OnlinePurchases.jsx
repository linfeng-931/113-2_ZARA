export default function OnlinePurchases() {
  return (
    <div className="flex flex-col text-left gap-2 m-auto lg:m-0 col-span-12 lg:col-start-4 lg:col-span-8 max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">網上購買</h1>
        <img src="/image/ipad.jpg" alt="" className=" mb-4" />
      </div>
      <div>
        <p className="mb-4">以下詳細介紹網站上購買流程，非常簡單！</p>
        <ol className="list-disc flex flex-col text-left text-sm gap-4 ml-4">
          <li className="leading-8">
            您必須進行註冊，才可以在 Zara 官網購物。
          </li>
          <li>
            請將商品增加至<b>購物籃</b>
            中，選擇您要收貨的地點並完成付款。我們為您提供了可以保存付款詳細資訊的選項，以便您日後可以更快速進行購買。
          </li>
          <li>
            您完成購買後，我們將傳送給您含有訂單所有相關資訊的
            <b>確認電子郵件</b>。
          </li>
          <li>
            您可以使用您的帳戶來<b>追蹤您的訂單</b>。
          </li>
        </ol>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              為什麼我沒有收到訂單確認郵件？
            </div>
            <div className="collapse-content text-sm leading-8">
              如果您沒有收到購買確認電子郵件，可能原因如下：
              <br />■ 電子郵件進入了您的垃圾郵件匣。
              <br />■
              您的電子郵件地址不正確。您可以與我們聯絡，我們將為您解決問題。
              <br />■
              過程中出現錯誤，付款未正確完成。我們將傳送一封含有連結的電子郵件給您，以便您重新進行。
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">如何變更市場/地區？</div>
            <div className="collapse-content text-sm leading-8">
              如果您沒有收到購買確認電子郵件，可能原因如下：
              <br />■ <b>使用您的電腦</b>：刪除 cookie
              後前往我們的網站，您將能看到市場/地區選擇。
              <br />■ <b>使用 iOS 應用程式</b>：於手機設定中找到 Zara
              應用程式，然後選擇重置區域選項。再次前往我們的應用程式後，即可以選擇所想要的市場/地區。
              <br />■ <b>使用 Android 應用程式</b>：在 Zara
              應用程式的「設定」選項中選擇您喜歡的市場/地區。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
