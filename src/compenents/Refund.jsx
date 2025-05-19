export default function Refund() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">退貨款項</h1>
        <img src="/image/howtoreturn.jpg" alt="" className=" mb-4" />
        <p className="opacity-50">我們處理好您退貨的商品後即會進行退款。</p>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">商店購買的退款</h1>
        <ol className=" flex flex-col text-left text-sm gap-6">
          <li className="leading-8">
            如果您為商店購買的商品辦理退貨，將以購買時使用的原付款方式進行退款。
          </li>
          <li>
            如果無法按原付款方式退款，我們的門市人員將為您提供其他退款方式。
          </li>
        </ol>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">網上購買退款</h1>
        <ol className=" flex flex-col text-left text-sm gap-6">
          <li>
            當您為網上購買的商品辦理退貨時，將以您購買時使用的相同付款方式收到退款。
          </li>
          <li>
            如果您使用配送業者退回商品，將於我們的營業處收到退貨商品後的 72
            小時內進行處理。
          </li>
          <li>退貨完成後，我們將寄送一封確認退貨的電子郵件給您。</li>
          <li>
            提醒您，您在退貨後可能需要 14
            天才能收到退款，實際狀況依您的銀行而定。
          </li>
          <li>
            如果您的帳戶14天後尚未收到退款，請向您的發卡銀行出示此確認信，以便其加快流程。
          </li>
          <li>
            您可以在我們的購買條款中找到退換貨政策或撤銷權的更多相關資訊。
          </li>
        </ol>
        <p className="bg-[#a3a3a3] p-6 my-4">
          <b>提醒您</b>：
          如果您使用我們的到府取件或交貨點服務將退貨商品退回給我們，將從您的退款金額中收取退貨費用。
        </p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              為什麼我沒有收到退款確認的電子郵件？
            </div>
            <div className="collapse-content text-sm">
              <ol className="flex flex-col text-left text-sm gap-4">
                <li>
                  如果您沒有收到含有退款資訊的電子郵件，請檢查與您的購買相關的電子郵件地址是否正確。
                </li>
                <li className="leading-6">
                  提醒您，如果您使用到府取件服務或交貨點辦理退貨，我們將在商品到達我們的作業處後才會開始進行處理。
                  完成後，您將收到含有退貨詳細資訊的電子郵件。
                </li>
              </ol>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">
              為什麼我僅收到退貨的部分退款？
            </div>
            <div className="collapse-content text-sm">
              <ol className="flex flex-col text-left text-sm gap-4">
                <li className="leading-6">
                  提醒您，如果您將商品分裝在多個箱子寄送給我們，我們處理退貨的時間將會有所不同。我們將寄送給您一封確認電子郵件，其中含有每箱的詳細資訊。
                </li>
                <li>您也可以與我們聯絡，我們將為您查看訂單的處理狀況。</li>
              </ol>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我如何查看我的退款發票？</div>
            <div className="collapse-content text-sm">
              <p>您可以在訂單詳情頁面中查看退款發票。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
