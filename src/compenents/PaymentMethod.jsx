import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

function PaymentMethod({setisActive, setDetail}){
    const [method, setMethod] = useState(0);

    const [state, setState] = useState({
        number: '',
        month: "1 月",
        year: "2025 年",
        cvc: '',
        name: '',
        focus: '',
    });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    if (name === "number") {
        // 移除非數字
        let rawValue = value.replace(/\D/g, "");
        // 限制長度最多 16 個數字
        rawValue = rawValue.slice(0, 16);
        // 每 4 位數加空格
        const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();
        setState((prev) => ({ ...prev, [name]: formattedValue }));
    } else {
        setState((prev) => ({ ...prev, [name]: value }));
    }
};

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

    const toggle = () => {
        const rawNumber = state.number.replace(/\s/g, "");
        setDetail(prev => ({
            ...prev,
            payment_method: method,
            card: {
            ...state,
            number: rawNumber,
            }
        }));
        setisActive(2);
    };
    const toggle2 = () => {
        setisActive(0);
    };

    return(
        <>
            <div className="text-left w-150">
                <div className="flex gap-3 mb-12">
                    <div
                        className={`flex h-12 w-[50%] justify-around items-center duration-150   
                                        ${method == 0 ? "bg-black dark:bg-white text-white dark:text-black":"cursor-pointer border-[1px] hover:text-white hover:dark:text-black hover:bg-black hover:dark:bg-white"}
                                `}
                        onClick={() => setMethod(0)}
                    >
                        <p>信用卡支付</p>
                    </div>
                    <div
                        className={`flex h-12 w-[50%] justify-around items-center duration-150   
                                        ${method == 1 ? "bg-black dark:bg-white text-white dark:text-black":"cursor-pointer border-[1px] hover:text-white hover:dark:text-black hover:bg-black hover:dark:bg-white"}
                                `}
                        onClick={() => setMethod(1)}
                    >
                        <p>門市付款</p>
                    </div>
                </div>

                {/*到店付款*/}
                {method == 1 &&
                    <div className="mt-18 w-full flex justify-center mb-20">
                        <p className="hint">完成訂單後，會於頁面中顯示您的Payment Code。</p>
                    </div>
                }

                {/*信用卡支付*/}
                {method == 0 &&
                <div>
                    
                    <div className="mb-8">
                        <p>信用卡卡號</p>
                        <input
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            value={state.number}
                            className="input w-full"
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                        />
                    </div>
                    <div className="mb-8">
                        <p>期限</p>
                        <div className="flex w-full gap-5">
                        <select 
                            defaultValue="Pick a color" 
                            value = {state.month}
                            className="select"
                            onChange={(e)=>setState((prev)=>({...prev, month:e.target.value}))}
                        >
                            {Array.from({ length: 12 }).map((_, index) => (
                                <option key={index}>{index + 1} 月</option>
                            ))}
                        </select>
                        <select 
                            defaultValue="Pick a color" 
                            className="select"
                            value = {state.year}
                             onChange={(e)=>setState((prev)=>({...prev, year:e.target.value}))}
                        >
                            {Array.from({ length: 31 }).map((_, index) => (
                                <option key={index}>{index + 2025} 年</option>
                            ))}
                        </select>
                        </div>
                    </div>
                    <div className="mb-8">
                        <p>持卡人</p>
                        <input
                            type="text"
                            placeholder="請輸入持卡人姓名"
                            value={state.name}
                            className="input w-full"
                            onChange={(e)=>setState((prev) => ({ ...prev, name: e.target.value }))}
                        />
                    </div>
                    <div className="mb-20">
                        <p>CVV2</p>
                        <input
                            type="text"
                            placeholder="卡片背後三或四碼"
                            value={state.cvc}
                            className="input w-40"
                            maxLength={4}
                            onChange={(e)=>setState((prev) => ({ ...prev, cvc: e.target.value }))}
                        />
                    </div>
                </div>
                }
                <div className="flex gap-30">
                    <div
                        className="flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white"
                        onClick={toggle2}
                    >
                        <ArrowLeft className="h-4 w-4"/>
                        <p>PREVIOUS STEP</p>
                    </div>
                    <div
                        className="flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white"
                        onClick={toggle}
                    >
                        <p>NEXT STEP</p>
                        <ArrowRight className="h-4 w-4"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PaymentMethod;