export default function MySize() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">如何知道我的尺寸？</h1>
        <img src="/image/jeans.jpg" alt="" className=" mb-4" />
        <p className="opacity-50">
          Zara
          提供範圍廣泛的尺碼，這些尺碼會根據每件服飾的款式、剪裁和布料而有所不同。為了幫助您選擇適合您的尺碼，我們提供您兩種工具：我們的尺寸測量指南和查找尺碼選項。
        </p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">尺寸測量指南</h1>
        <p className="mb-4 leading-6">
          您可以在產品頁面中找到我們的<b>尺寸測量指南</b>
          。選擇您感興趣的尺寸，我們將向您展示適合的體型尺碼。
        </p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">查找尺碼</h1>
        <p className="mb-4 leading-6">
          為了協助您選擇合適的尺碼，建議您使用每項商品頁面中的<b>查找尺碼</b>
          選項。此工具能根據您提供給我們的資訊（您的身體尺寸和您喜歡的穿著風格）計算出適合您的尺碼。
        </p>
      </div>

      <div className="mt-10">
        <h1 className="mb-4 font-semibold">常見問題</h1>
        <div className="flex flex-col gap-4 text-sm">
          <div
            tabIndex={0}
            className="collapse collapse-plus bg-base-100 border-base-300 border"
          >
            <div className="collapse-title ">我如何了解商品的尺寸？</div>
            <div className="collapse-content text-sm">
              如果您想了解任何商品的尺寸，您可以查閱我們的尺寸測量指南。如果找不到您需要的尺碼，請與我們連絡，我們將為您提供協助。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
