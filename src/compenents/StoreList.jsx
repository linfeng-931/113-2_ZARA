export default function StoreList({ onSelect }) {
  const stores = [
    {
      name: "台北京站店",
      position: [25.056228581260275, 121.51814095729591],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北市",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "中和環球店",
      position: [25.012678954527285, 121.47419564345212],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北市",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "台北統領店",
      position: [25.050008152666653, 121.55109994267876],
      openTime: 1030,
      closeTime: 2230,
      open: false,
      city: "台北市",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "台北101店",
      position: [25.043165316643726, 121.56311623943293],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北市",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "桃園台茂店",
      position: [25.05984675512968, 121.28524309978158],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "桃園縣",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "桃園大江店",
      position: [25.006342336159907, 121.22653490706838],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "桃園縣",
      category: ["Woman", "Man", "Kids"],
    },
  ];

  function isOpen(now, openTime, closeTime) {
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const openMinutes = Math.floor(openTime / 100) * 60 + (openTime % 100);
    const closeMinutes = Math.floor(closeTime / 100) * 60 + (closeTime % 100);

    if (openMinutes < closeMinutes) {
      // 正常營業時間：當天開、當天關
      return nowMinutes >= openMinutes && nowMinutes < closeMinutes;
    } else {
      // 跨午夜營業時間：例如 23:00 開、05:00 關
      return nowMinutes >= openMinutes || nowMinutes < closeMinutes;
    }
  }

  stores.forEach((store) => {
    store.open = isOpen(new Date(), store.openTime, store.closeTime);
  });

  return (
    <div className="lg:w-[300px] w-full   lg:p-4 overflow-y-auto max-h-[650px] ">
      <h1 className="font-semibold mb-2 text-left">STORE LOCATOR</h1>

      <ul className="space-y-3 h-[400px]">
        {stores.map((store, index) => (
          <li key={index} className="w-[90%]">
            <button
              className="w-full text-left hover:bg-gray-100 text-sm font-semibold cursor-pointer mb-2 flex flex-row justify-between"
              onClick={() => onSelect(store)}
            >
              {store.name}
              <i className="ri-arrow-drop-right-line block"></i>
            </button>
            <div className="text-xs text-left mb-2 ">{store.city}</div>
            <div className="flex gap-2 items-center text-xs">
              <div
                className={`w-2 h-2 rounded-full ${
                  store.open ? "bg-cyan-500" : "bg-pink-500"
                }`}
              ></div>
              {store.open ? "營業中" : "休息中"}
            </div>
            <div className="flex gap-1 text-xs ">
              {store.category.join(" | ")}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
