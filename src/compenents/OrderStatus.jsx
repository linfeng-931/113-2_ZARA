export default function OrderStatus() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">我的線上訂單狀態</h1>
        <img src="/image/ipad.jpg" alt="" className=" mb-4" />
      </div>
      <div>
        <p className="mb-4 leading-8">
          您可以透過個人帳戶中的購買頁面來<b>追蹤</b>您的訂單。
          <br />
          以下為訂單的各個階段：
        </p>
        <ol className="list-disc flex flex-col text-left text-sm gap-4 ml-4">
          <li className="leading-8">
            <b>已購買</b>：您已正確完成購買訂單。
          </li>
          <li>
            <b>訂單處理中</b>：我們已收到您的購買資訊。
          </li>
          <li>
            <b>準備中</b>
            ：我們的倉庫正在準備您的訂購商品。
          </li>
          <li>
            <b>已寄送</b>：訂購商品已從我們的倉庫送出。
          </li>
          <li>
            <b>快遞公司已上門取貨</b>
            ：您的訂單正在配送途中，您很快就能收到訂購商品。
          </li>
          <li>
            <b>已發貨給客戶</b>：您已收到訂購商品。
          </li>
        </ol>
        <p className="mt-4">您將透過電子郵件收到訂單狀態的相關更新資訊。</p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我什麼時候能收到我的訂單？</div>
            <div className="collapse-content text-sm leading-8">
              下單後，我們將為您提供預計配送日期。您可以透過您的帳戶追蹤配送狀態。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
