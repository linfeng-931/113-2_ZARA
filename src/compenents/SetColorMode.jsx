import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../redux/colorSlice";
import { Sun, Moon } from "lucide-react";
function SetColorMode(){
    const lightMode = useSelector(selectLightMode);
    const dispatch = useDispatch();

    const toggleColor = () => {
        dispatch(setColorMode(!lightMode))
        if(lightMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            }else{
                document.documentElement.setAttribute('data-theme', 'light');
            }
    }

    return(
        <>
            <div onClick={toggleColor} className="cursor-pointer">
                {
                    lightMode ? (
                        <div className="member fixed bottom-0 left-4 md:static md:flex md:flex-col md:items-center md:gap-1.5 md:whitespace-nowrap
                        hover:opacity-50 cursor-pointer">
                            <div className="flex bg-white h-10 w-10 rounded-full hover:opacity-50 shadow-md md:shadow-none md:h-auto md:w-auto justify-center items-center"><Sun color = "currentColor"/></div>
                            <p className="invisible md:visible">Light Mode</p>
                        </div>
                    ):(
                        <div className="member fixed bottom-0 left-4 md:static md:flex md:flex-col md:items-center md:gap-1.5 md:whitespace-nowrap
                        hover:opacity-50 cursor-pointer">
                            <div className="flex bg-black h-10 w-10 rounded-full hover:opacity-50 shadow-md md:shadow-none md:h-auto md:w-auto justify-center items-center"><Moon color = "currentColor"/></div>
                            <p className="invisible md:visible">Dark Mode</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SetColorMode;