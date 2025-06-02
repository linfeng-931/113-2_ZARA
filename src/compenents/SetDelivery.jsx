import { useState, useEffect } from "react";
import { Asterisk } from "lucide-react";

function SetDelivery({setisActive, setDetail}){
    const county = ["台北市", "基隆市", "新北市", "桃園市", "新竹縣", "新竹市", "苗栗縣", "台中市", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "嘉義市", "臺南市", "高雄市", "屏東縣", "宜蘭縣", "花蓮縣", "台東縣", "澎湖縣", "金門縣", "連江縣"];
    const [selectedCounty, setSelectedCounty] = useState("台北市");
    const [address, setAddress] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [method, setMethod] = useState(0);
    const [deliveryTime, setDeliverTime] = useState(0);

    const [deliveryDate, setDeliveryDate] = useState(""); //宅配次日送達
    const [deliveryDate2, setDeliveryDate2] = useState(""); //宅配當日送達
    const [deliveryDate3, setDeliveryDate3] = useState(""); //門市、超商取貨

    useEffect(() => {
        const now = new Date();

        // 取得現在的當地小時數
        const localHour = now.getHours(); // 本地時間 (0~23)
        
        // 決定預計送達是明天還是後天
        const delivery = new Date();
        const delivery2 = new Date();
        const delivery3 = new Date();

        const addDays = localHour >= 12 ? 2 : 1;
        const addDays2 = localHour >= 12 ? 1 : 0;
        const addDays3 = localHour >= 12 ? 3 : 2;

        delivery.setDate(delivery.getDate() + addDays);
        delivery2.setDate(delivery2.getDate() + addDays2);
        delivery3.setDate(delivery3.getDate() + addDays3);

        // 格式化為 yyyy/mm/dd
        const year = delivery.getFullYear();
        const month = String(delivery.getMonth() + 1).padStart(2, "0");
        const day = String(delivery.getDate()).padStart(2, "0");

        const year2 = delivery2.getFullYear();
        const month2 = String(delivery2.getMonth() + 1).padStart(2, "0");
        const day2 = String(delivery2.getDate()).padStart(2, "0");

        const year3 = delivery3.getFullYear();
        const month3 = String(delivery3.getMonth() + 1).padStart(2, "0");
        const day3 = String(delivery3.getDate()).padStart(2, "0");

        setDeliveryDate(`${year}/${month}/${day}`);
        setDeliveryDate2(`${year2}/${month2}/${day2}`);
        setDeliveryDate3(`${year3}/${month3}/${day3}`);
    }, []);

    //門市
    const store = {
       "台北市":["台北京站店", "中和環球店", "台北統領店", "台北101店"], 
       "桃園市":["桃園台茂店", "桃園大江店"], 
    };
    const [selectedCity, setSelectedCity] = useState("台北市");
    const [selectedStore, setSelectedStore] = useState("");

    const cityList = Object.keys(store);
    const storeList = store[selectedCity] || [];

    const toggle = () => {
        let final_address = '';
        let time = '';
        if(method === 1){
            final_address = selectedCounty+" "+address.toString();
        }
        if(method === 0) final_address = selectedCity+" "+selectedStore;

        if(deliveryTime == -1) time = deliveryDate3;
        else if(deliveryTime == 0) time = deliveryDate;
        else time = deliveryDate2;
        
        setDetail(prev => ({
            ...prev,
            name: name,
            delivery_method: method,
            phone: phone,
            address: final_address,
            time: time, 
        })
        )
        console.log(final_address);
        setisActive(1);
    };

    return(
        <>
        <div className="text-left w-150">
            <h1>聯絡資訊</h1>
            <div className="divider mt-0"></div>
            <p>訂貨人姓名</p>
            <input 
                type="text" 
                placeholder="請輸入真實姓名" 
                className="input w-full mb-8"
                onChange={(e) => setName(e.target.value)}
            />
            <p>手機號碼</p>
            <label className="input  w-full mb-20">
                +886
                <input 
                    type="text" 
                    className="grow" 
                    placeholder="09XX-XXX-XXX" 
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>

            <h1>配送方式</h1>
            <div className="divider mt-0"></div>

            <div className="flex gap-3 mb-8">
                <div
                    className={`flex h-12 w-[32%] justify-around items-center duration-150   
                                    ${method == 0 ? "bg-black dark:bg-white text-white dark:text-black":"cursor-pointer border-[1px] hover:text-white hover:dark:text-black hover:bg-black hover:dark:bg-white"}
                            `}
                    onClick={() => {setMethod(0); setDeliverTime(-1);}}
                >
                    <p>門市取貨</p>
                </div>
                <div
                    className={`flex h-12 w-[32%] justify-around items-center duration-150   
                                    ${method == 1 ? "bg-black dark:bg-white text-white dark:text-black":"cursor-pointer border-[1px] hover:text-white hover:dark:text-black hover:bg-black hover:dark:bg-white"}
                            `}
                    onClick={() => setMethod(1)}
                >
                    <p>寄送到府</p>
                </div>
                <div
                    className={`flex h-12 w-[32%] justify-around items-center duration-150   
                                    ${method == 2 ? "bg-black dark:bg-white text-white dark:text-black":"cursor-pointer border-[1px] hover:text-white hover:dark:text-black hover:bg-black hover:dark:bg-white"}
                            `}
                    onClick={() => {setMethod(2); setDeliverTime(-1);}}
                >
                    <p>便利店取貨</p>
                </div>
                
            </div>
            {/*門市取貨*/}
            {method == 0 &&
                <div className="">
                    <div className="flex mb-8">
                        <Asterisk className="h-3 text-[#FA347F]"/>
                        <p className="point">目前只支援台北市、桃園市到店取貨，造成您的不便還請見諒。</p>
                    </div>
                    <p>門市資訊</p>
                    <div className="flex gap-2 mb-3 w-full">
                        {/* 選擇縣市 */}
                        <select
                            className="select w-[50%]"
                            value={selectedCity}
                            onChange={(e) => {
                                const city = e.target.value;
                                setSelectedCity(city);
                                setSelectedStore(""); // 重設門市選擇
                            }}
                        >
                            {cityList.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                            ))}
                        </select>

                        {/* 選擇門市 */}
                        <select
                            className="select w-[50%]"
                            value={selectedStore}
                            onChange={(e) => setSelectedStore(e.target.value)}
                        >
                            <option value="" disabled>
                            請選擇門市
                            </option>
                            {storeList.map((shop) => (
                            <option key={shop} value={shop}>
                                {shop}
                            </option>
                            ))}
                        </select>
                    </div>
                    <p className={`hint mb-10 w-full text-left ${selectedStore ? "":"invisible"}`}>預計送達時間：{deliveryDate3}</p>
                </div>
            }

            {/*宅配*/}
            {method == 1 &&
                <div className="">
                    <p>住家地址</p>
                    <div className="flex gap-2 w-full mb-8">
                        <select 
                            defaultValue="Pick a color" 
                            className="select w-30"
                            value={selectedCounty}
                            onChange={(e) => {
                                const County = e.target.value;
                                setSelectedCounty(County);
                            }}
                        >
                            {county.map((x) => (
                                <option key={x} value={x}>
                                {x}
                                </option>
                            ))}
                        </select>
                        <input 
                            type="text" 
                            placeholder="請輸入住家地址" 
                            className="input w-full"
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <p>郵遞區號</p>
                    <input 
                        type="text" 
                        placeholder="請輸入郵遞區號三碼" 
                        className="input w-40 mb-8"
                        maxLength={3}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    
                    <div className="flex items-center gap-1">
                        <input 
                            type="radio" 
                            name="radio-1" 
                            className="radio h-4 w-4" 
                            checked={deliveryTime === 0}
                            onChange={() => setDeliverTime(0)}
                        /><p>次日送達</p>
                    </div>
                    <p className={`hint mb-2 w-full text-left ml-5 ${deliveryTime == 0 ? "":"invisible"}`}>預計送達時間：{deliveryDate}</p>
                    <div className="flex items-center gap-1">
                        <input 
                            type="radio"
                            name="radio-1" 
                            className="radio h-4 w-4"
                            checked={deliveryTime === 1}
                            onChange={() => setDeliverTime(1)}
                        /><p>當日送達</p>
                    </div>
                    <p className={`hint mb-8 w-full text-left ml-5 ${deliveryTime == 1 ? "":"invisible"}`}>預計送達時間：{deliveryDate2}</p>
                </div>
            }
            {/*便利店*/}
            <div
                className="flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white"
                onClick={toggle}
            >
                <p>NEXT</p>
            </div>
        </div>
        
        </>
    )
}
export default SetDelivery;