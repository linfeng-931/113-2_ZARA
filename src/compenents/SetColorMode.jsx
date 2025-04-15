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
                        <div className="member flex flex-col items-center gap-1.5 whitespace-nowrap
                        hover:opacity-50 cursor-pointer">
                            <Sun color = "currentColor"/>
                            <p>日間模式</p>
                        </div>
                    ):(
                        <div className="member flex flex-col items-center gap-1.5 whitespace-nowrap
                        hover:opacity-50 cursor-pointer">
                            <Moon color="currentColor"/>
                            <p>夜間模式</p>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SetColorMode;