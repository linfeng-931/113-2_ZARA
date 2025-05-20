export default function WithdrawedItems() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">召回商品</h1>
        <img src="/image/jeans.jpg" alt="" className=" mb-4" />
      </div>

      <div className="mt-4">
        <ol className="flex flex-col text-left text-sm gap-6">
          <li>
            Zara
            致力於保障商品的高品質和顧客安全，因此就出於特定原因而召回的商品進行通知。
          </li>
          <li>
            特此通知您，我們發現產品編號為 6048/551/400
            的帶袖嬰兒襯衫有部分批次商品未妥善縫緊鈕扣，目前正在進行商品召回。
          </li>
          <li>
            為預防起見，如果您曾購買此款商品，懇請您聯繫我們的客戶服務團隊或前往我們的任何一家商店，我們將協助您辦理退貨和後續退款事宜。
          </li>
        </ol>
      </div>
    </div>
  );
}
