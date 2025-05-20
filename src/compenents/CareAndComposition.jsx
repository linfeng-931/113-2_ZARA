export default function CareAndComposition() {
  return (
    <div className="flex flex-col text-left col-start-2 col-span-6 lg:col-start-4 lg:col-span-8 gap-2 lg:max-w-[80%]">
      <div>
        <h1 className="mb-4 font-semibold">成份和保養</h1>
        <img src="/image/jeans.jpg" alt="" className=" mb-4" />
      </div>

      <div className="mt-4">
        <ol className="flex flex-col text-left text-sm gap-6">
          <li>
            在 Zara 您可發現各種以天然、人造和合成材質製成的服裝。您在 Zara.com
            和服裝上皆可找到每件商品成份的詳細資訊。
          </li>
          <li>
            我們的<b>動物保護政策</b>
            包括遵守動物保護「五項自由」原則在內的道德標準，以具有道德且負責任的方式處理動物性來源的產品。請點擊此處以了解更多資訊。
          </li>
          <li>
            我們與<b>監管計劃</b>
            合作，以確保我們的服飾符合我們的社會、環境、健康和安全標準。
          </li>
          <li>為了評估合規性，我們擬定了稽核專案和持續改善計劃。</li>
          <li>您可以前往我們的 Join Life 頁面以了解更多資訊。</li>
        </ol>
      </div>
      <div className="mt-10">
        <h1 className="mb-4 font-semibold">保養建議</h1>
        <p className="mb-4 leading-8">
          在每件產品的網路頁面以及服裝的標籤上，您都可以找到服飾保養的相關資訊。
          <br />
          此外，我們還製作了一份指南，幫助您保養衣物並延長其使用壽命。如需了解更多資訊，請參見服裝保養。
        </p>
      </div>
    </div>
  );
}
