import { ArrowLeft, ArrowRight, CircleX } from "lucide-react";
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

    const [expiryError, setExpiryError] = useState('');
    const toggle = () => {
        const rawNumber = state.number.replace(/\s/g, "");

        // 解析月份與年份（"1 月" => 1，"2025 年" => 2025）
        const selectedMonth = parseInt(state.month);
        const selectedYear = parseInt(state.year);

        const now = new Date();
        const currentMonth = now.getMonth() + 1; // getMonth() 從 0 開始
        const currentYear = now.getFullYear();

        // 檢查是否過期
        if (
            selectedYear < currentYear ||
            (selectedYear === currentYear && selectedMonth < currentMonth)
        ) {
            setExpiryError("Card has expired.");
            return; // 中止流程
        } else {
            setExpiryError('');
        }

        // 只有通過驗證才執行下一步
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

    {/*防呆與資料控制*/}
    
    const [numberError, setNumberError] = useState('');
    const [NameError, setNameError] = useState('');
    const [cvv2Error, setCvv2Error] = useState('');

    const handleNumberChange = (e) => {
        let value = e.target.value;

        // 先移除非數字（只留數字）
        let rawValue = value.replace(/\D/g, "");

        // 限制長度為最多 16 位
        rawValue = rawValue.slice(0, 16);

        // 每 4 位加空格
        const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();

        // 設定格式化後的值
        setState((prev) => ({ ...prev, number: formattedValue }));

        // 錯誤訊息處理
        if (!rawValue) {
            setNumberError("Please enter your card number.");
        } else if (rawValue.length !== 16) {
            setNumberError("Invalid card number format. It must be 16 digits.");
        } else {
            setNumberError('');
        }
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setState((prev) => ({ ...prev, name: value }));
    
        if (!value) {
            setNameError("Please enter your name.");
        } else {
            setNameError('');
        }
    };

    const handleCvv2Change = (e) => {
        const value = e.target.value;
        setState((prev) => ({ ...prev, cvc: value }));
    
        if (!value) {
            setCvv2Error("Please enter ccv2.");
        } else if (value.length < 3) {
            setCvv2Error("Invalid cvv2 format. It must be 3 or 4 digits.");
        }else {
            setCvv2Error('');
        }
    };

    const isDisabled = 
        !state.number || 
        !state.name || 
        !state.cvc || 
        cvv2Error !== '' || 
        NameError !== '' ||
        numberError !== ''
    ;

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
                    
                    <div className="mb-1">
                        <p>信用卡卡號</p>
                        <input
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            value={state.number}
                            className={`
                            ${numberError ? "w-full mb-1 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-950 focus:border-red-500 block p-2.5 dark:text-red-200 dark:placeholder-red-500 dark:border-red-500" : 
                                "w-full mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                            `}
                            onChange={handleNumberChange}
                        />
                    </div>
                    <div className="h-6 mb-3">
                        {numberError && 
                            <div className="flex gap-2 items-center text-red-500 ">
                                <CircleX className='h-4 w-4'/>
                                <p>{numberError}</p>
                            </div>
                        }
                    </div>

                    <div className="mb-1">
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
                    <div className="h-6 mb-3">
                        {expiryError && 
                            <div className="flex gap-2 items-center text-red-500 ">
                                <CircleX className='h-4 w-4'/>
                                <p>{expiryError}</p>
                            </div>
                        }
                    </div>

                    <div className="h-6 mb-3">
                        {cvv2Error && 
                            <div className="flex gap-2 items-center text-red-500 ">
                                <CircleX className='h-4 w-4'/>
                                <p>{cvv2Error}</p>
                            </div>
                        }
                    </div>

                    <div className="mb-1">
                        <p>持卡人</p>
                        <input
                            type="text"
                            placeholder="請輸入持卡人姓名"
                            value={state.name}
                            className={`
                                ${NameError ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-950 focus:border-red-500 block w-full p-2.5 dark:text-red-200 dark:placeholder-red-500 dark:border-red-500" : 
                                    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                            `}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="h-6 mb-3">
                        {NameError && 
                            <div className="flex gap-2 items-center text-red-500 ">
                                <CircleX className='h-4 w-4'/>
                                <p>{NameError}</p>
                            </div>
                        }
                    </div>

                    <div className="mb-1">
                        <p>CVV2</p>
                        <input
                            type="text"
                            placeholder="卡片背後三或四碼"
                            value={state.cvc}
                            className={`
                                ${cvv2Error ? "w-40 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-950 focus:border-red-500 block p-2.5 dark:text-red-200 dark:placeholder-red-500 dark:border-red-500" : 
                                    "w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                            `}
                            maxLength={4}
                            onChange={handleCvv2Change}
                        />
                    </div>
                    <div className="h-6 mb-23">
                        {cvv2Error && 
                            <div className="flex gap-2 items-center text-red-500 ">
                                <CircleX className='h-4 w-4'/>
                                <p>{cvv2Error}</p>
                            </div>
                        }
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

                    {method == 0 &&
                        <div
                            disabled = {isDisabled}
                            className={`flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                    hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                                    ${isDisabled ? "opacity-50 pointer-events-none" : ""}
                                `}
                            onClick={toggle}
                        >
                            <p>NEXT STEP</p>
                            <ArrowRight className="h-4 w-4"/>
                        </div>
                    }
                    {method == 1 &&
                        <div
                            className={`flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                    hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white
                                `}
                            onClick={toggle}
                        >
                            <p>NEXT STEP</p>
                            <ArrowRight className="h-4 w-4"/>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default PaymentMethod;