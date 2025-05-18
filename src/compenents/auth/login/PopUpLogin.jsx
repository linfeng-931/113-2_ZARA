import React, {useState, useEffect} from 'react';
import Login from '.';
import { CircleX ,EyeOff, Eye } from 'lucide-react';
import { useAuth } from '../../../contexts/authContext';
import { Link } from 'react-router';

function PopUpLogin({isOpen, toggleModal}){
    const [showToast, setShowToast] = useState(false);
    const {userLoggedIn} = useAuth();

    useEffect(() => {
        if (userLoggedIn && isOpen) {
            toggleModal(false);
            setShowToast(true);
        }
        setTimeout(()=>{
            setShowToast(false);
        },2000);
    }, [userLoggedIn, isOpen]);

    return(
        <>
        {isOpen && (
         <div className="modal modal-open text-black backdrop-blur-sm z-9999999">
            <div className="w-[90%] md:w-[70%] flex flex-col items-center">
                <div className="modal-box flex flex-col justify-center p-10">
                    <Login/>
                    <div className="w-full mt-3">
                        <div className="flex gap-3 justify-center">
                            <p>Don't have an account?</p>
                            <Link to='/user/register'><p className='point hover:opacity-50 cursor-pointer'>Sign Up</p></Link>
                        </div>
                    </div>
                    <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <div className="btn btn-xs btn-circle btn-ghost absolute right-2 top-2 shadow-xs shadow-gray-500 rounded-full hover:bg-black hover:text-white duration-[.2s]"
                                onClick={() => toggleModal(false)}
                            >✕</div>
                    </form>
                </div>
            </div>
        </div>
        )}
        {showToast &&(
            <div className="toast z-9999">
                <div className="alert w-72 md:w-full">
                    <p className="reak-words whitespace-normal">
                        You have successfully logged in.
                    </p>
                </div>
            </div>
        )}
        </>
    )
}

export default PopUpLogin;