export default function DeliveryRestrictions() {
  return (
    <div className="flex flex-col text-left gap-2 m-auto lg:m-0 col-span-12 lg:col-start-4 lg:col-span-8 max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">寄送地址</h1>
        <img src="/image/deliver.jpg" alt="" className=" mb-4" />
        <ol className=" flex flex-col text-left text-sm gap-4">
          <li>
            我們致力讓 Zara.com
            服務觸及每個角落。如果您的配送地址具有某些配送限制，您在購買時將看到相關訊息。
          </li>
          <li>
            提醒您，如果您的訂單包含大型商品，則不適用於寄送至商店或交貨點。
          </li>
        </ol>
      </div>
    </div>
  );
}
