import { Link } from "react-router";
import PaymentCodeGenerator from "./PaymentCodeGenerator";
function OrderCompelete({detail}){
    return(
        <>
            <div className="w-150">
                <p>訂單已送出</p>
                <p className="hint mt-3">預計送達時間：{detail.time}</p>
                {detail.payment_method == 1 &&
                    <PaymentCodeGenerator/>
                }
                <Link to = "/">
                    <div
                        className="mt-20 flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                        hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white"
                    >
                        <p>GO HOME</p>
                    </div>
                </Link>    
            </div>
        </>
    )
}
export default OrderCompelete;