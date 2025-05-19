export default function SplitOrders() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">分次配送的訂單</h1>
        <img src="/image/deliver.jpg" alt="" className=" mb-4" />
        <ol className=" flex flex-col text-left text-sm gap-4">
          <li>
            在某些情況下，我們會根據商品的庫存情況，分批向您配送訂單中的商品，以便您盡快收到部分商品。
          </li>
          <li>
            在選擇配送方式時，我們會向您顯示配送的各種選項，以及額外費用，以便您選擇適合您的方式。
          </li>
        </ol>
      </div>
    </div>
  );
}
