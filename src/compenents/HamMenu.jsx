function HamMenu({onClick, isOpen, className}){
    return(
        <>
            <span
                onClick={onClick}
                className={`inline-block z-10 w-8 h-8 rounded-full opacity-[50%] 
                    hover:opacity-100 flex items-center justify-center ${className}`}
            >
                <span className="w-8 h-6 flex flex-col justify-between hover:cursor-pointer">
                    <span className={`h-[2px] transition-all duration-400 w-full origin-center bg-black dark:bg-white
                        ${isOpen ? "opacity-0" : "translate-y-[6px]"}`}
                    ></span>
                    <span className={`h-[2px] transition-all duration-400 w-full origin-center bg-black dark:bg-white
                        ${isOpen ? "rotate-45 w-7 translate-y-[7px] mt-2" : "translate-y-[3px]"}`}
                    ></span>
                    <span className={`h-[2px] transition-all duration-400 w-full origin-center bg-black dark:bg-white
                        ${isOpen ? "rotate-[-45deg] w-7 translate-y-[4px] mb-2" : ""}`}
                    ></span>
                </span>
            </span>
        </>
    )
}
export default HamMenu;