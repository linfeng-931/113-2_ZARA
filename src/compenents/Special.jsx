export default function Special() {
  return (
    <div className="flex flex-col text-left gap-2 m-auto lg:m-0 col-span-12 lg:col-start-4 lg:col-span-8 max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">退貨特殊條款</h1>
        <img src="/image/howtoreturn.jpg" alt="" className=" mb-4" />
        <p className="mb-4">
          我們的某些商品因其特殊性，需符合以下條件才能換貨或退貨：
        </p>
        <ol className="list-disc flex flex-col text-left text-sm gap-6 ml-4">
          <li>泳裝： 必須包括有膠的衛生標籤貼。</li>
          <li>
            內衣：內衣類商品不設退換，但童裝類原包裝未經拆封的上衣、連體衣和背心除外。
          </li>
          <li>退貨完成後，我們將寄送一封確認退貨的電子郵件給您。</li>
          <li>配飾： 退貨時需有完整未拆封的包裝袋或原裝紙盒。</li>
          <li>香水與蠟燭： 必須保持完整且未開封的原包裝盒退回。 </li>
          <li>
            腕錶:退還時商品及其配件必須保持原始狀態，僅限透過上門提取方式進行退貨。
          </li>
          <li>化妝品：必須保持原始包裝未拆封，僅支持上門收貨方式退貨。</li>
          <li>套組：套組中的商品無法單獨退貨。</li>
          <li>
            特殊包裝和附加配件：帶有特殊包裝（布袋、特殊包裝盒等）或包含其他配件的產品，需連同商品一併退回且保持原狀。
          </li>
        </ol>
      </div>
    </div>
  );
}
