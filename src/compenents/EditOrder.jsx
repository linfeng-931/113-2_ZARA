export default function EditOrder() {
  return (
    <div className="flex flex-col text-left gap-2 m-auto lg:m-0 col-span-12 lg:col-start-4 lg:col-span-8 max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">修改或取消網購訂單</h1>
        <img src="/image/ipad.jpg" alt="" className=" mb-4" />
      </div>
      <div>
        <p className="mb-4 leading-8">
          如果您已完成訂單卻想進行修改，以下為您可能產生的疑問提供答案。
        </p>
        <ol className=" flex flex-col text-left text-sm gap-4 ">
          <li className="leading-8">
            <b>可以撤銷訂單嗎？</b>
            <br />
            只要訂單狀態允許，則可取消購買。如果適用，您可以在 Zara
            帳戶的訂單詳細資訊中看到此選項。
          </li>
          <li className="leading-8">
            <b>可以更改訂單的配送地址嗎？</b>
            <br />
            如果您已選擇宅配寄送，只要您的訂單狀態許可，您即可修改訂單的寄送地址。您可以使用您的帳戶中的訂單詳細資訊頁面進行此操作。
          </li>
          <li className="leading-8">
            <b>可以修改訂單中的商品嗎？</b>
            <br />
            如果您已經完成購買，則無法刪除或修改商品。您可以在收到訂單後進行換貨或退貨。
          </li>
        </ol>
      </div>
    </div>
  );
}
