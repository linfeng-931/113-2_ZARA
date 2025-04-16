import HamMenu from "./HamMenu"
import Navbar from "./Navbar";
import { useState } from "react"

function Menu(){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <div className="drawer">
                <input 
                    id="drawer-toggle" 
                    type="checkbox" 
                    className="drawer-toggle" 
                    checked={isOpen}
                />
                <HamMenu
                    id="drawer-toggle"
                    className="transform -translate-y-4 drawer-toggle z-9999"
                    onClick={()=>setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div className="drawer-side z-999">
                    <label htmlFor="drawer-toggle" className="drawer-overlay" onClick=
                    {() => setIsOpen(false)}></label>
                    <div className="fixed h-[100px] w-[100%] md:w-[59%] lg:w-[32%] bg-white dark:bg-black z-9998"></div>
                    <div className="menu p-7 w-[100%] md:w-[60%] lg:w-[35%] bg-white dark:bg-black min-h-full gap-5 text-left p-15 pt-40">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu;