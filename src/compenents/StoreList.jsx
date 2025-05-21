export default function StoreList({ onSelect }) {
  const stores = [
    {
      name: "台北京站店",
      position: [25.056228581260275, 121.51814095729591],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "中和環球店",
      position: [25.012678954527285, 121.47419564345212],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "台北統領店",
      position: [25.050008152666653, 121.55109994267876],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "台北101店",
      position: [25.043165316643726, 121.56311623943293],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "桃園台茂店",
      position: [25.05984675512968, 121.28524309978158],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北",
      category: ["Woman", "Man", "Kids"],
    },
    {
      name: "桃園大江店",
      position: [25.006342336159907, 121.22653490706838],
      openTime: 1100,
      closeTime: 2200,
      open: false,
      city: "台北",
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
    <div className="absolute left-42 top-36 z-100  bg-white text-gray-500 text-left px-8 py-4">
      <h1 className="font-semibold mb-4">STORE LOCATOR</h1>

      <ul className="w-64  space-y-2 gap-4">
        {stores.map((store, index) => (
          <li key={index}>
            <button
              className="w-full text-left hover:bg-gray-200"
              onClick={() => onSelect(store)}
            >
              {store.name}
            </button>
            <br />
            {store.open ? "營業中" : "休息中"}
          </li>
        ))}
      </ul>
    </div>
  );
}
