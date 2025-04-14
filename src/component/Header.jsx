import { ShoppingCart, CircleUserRound, CircleHelp, Moon, Sun} from "lucide-react";
import HamMenu from "./HamMenu";
import SetColorMode from "./SetColorMode";

function Header(){
    return(
        <>
            <div className="header-container flex w-screen h-28 items-center justify-between">
                <div className="left flex gap-17 pl-15 items-center">
                    <HamMenu/>
                    <img className="h-11 invisible md:visible dark:hidden" src="/public/image/logo2-1.png"></img>
                    <img className="h-11 invisible md:visible light:hidden" src="/public/image/logo2-2.PNG"></img>
                </div>
                <div className="right flex pr-15 gap-8 items-center">
                    <SetColorMode/>

                    <div className="line h-12 w-[1px] bg-black dark:bg-white opacity-50"></div> 

                    <div className="member flex flex-col items-center gap-1.5 whitespace-nowrap
                    hover:opacity-50 cursor-pointer">
                        <CircleUserRound />
                        <p>登入</p>
                    </div>
                    <div className="member flex flex-col items-center gap-1.5 whitespace-nowrap
                    hover:opacity-50 cursor-pointer">
                        <ShoppingCart />
                        <p>購物籃</p>
                    </div>
                    <div className="member flex flex-col items-center gap-1.5 whitespace-nowrap
                    hover:opacity-50 cursor-pointer">
                        <CircleHelp />
                        <p>協助</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;