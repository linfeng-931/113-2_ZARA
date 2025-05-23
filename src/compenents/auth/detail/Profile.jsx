import { CircleUserRound, PencilLine, CircleX} from "lucide-react";
import { useState} from "react";
import { updateUserProfile } from "../../../firebase/users";
import DoPasswordChange from "./DoPasswordChange";


function Profile({profile}){
    const [user_profile, setUserProfile] = useState(profile);

    const [errorMessage, setErrorMessage] = useState('');

    const [isActive_btnname, setisActive_btnname] = useState(false);
    const [isActive_btnemail, setisActive_btnemail] = useState(false);
    const [nameError, setnameError] = useState('');
    const [page, setPage] = useState(0);

    const handlenameChange = (e) => {
        const value = e.target.value;
        setUserProfile(prev => ({ ...prev, name: value }));

        if (value == "") {
            setnameError("Cannot be empty.");
        } else if(value.length > 15){
            setnameError("Cannot exceed 15 characters.");
        } else setnameError("");
    };

    const onSubmit = async (e) => {
            setisActive_btnemail(false);
            setisActive_btnname(false);
            e.preventDefault();
            try {
                await updateUserProfile(user_profile.uid, user_profile);
                // Firebase Auth 應該會更新 userLoggedIn 狀態
                // 你也可以在這邊做其他動作
            } catch (error) {
                setErrorMessage(error.message);
            }
            console.log(profile.name);
            console.log(user_profile.name)
        }

    return(
        <>
            {page == 0 &&
            <div className="w-full rounded-md shadow-md p-10">
                <div className="flex gap-5 items-center">
                    {user_profile.avatar ? 
                        <img
                        src={user_profile.avatar}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full mt-2"
                        /> : 
                        <div>
                            <CircleUserRound  className="w-24 h-24 opacity-50"/>
                            {/* <div className="relative z-100 duration-150 h-6 w-6 flex items-center justify-center rounded-full shadow-md bg-white dark:bg-gray-600 mt-[-1.8rem] ml-18
                                            hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer
                            ">
                                <PencilLine className="h-4 w-4"/>
                            </div> */}
                            
                        </div>
                    }
                    <div className="text-left">
                        <p>{user_profile.name}</p>
                        <p className="mt-1 hint">UID / {user_profile.uid}</p>
                    </div>
                </div>

                <div className="mt-7 mb-7 line bg-gray-400 h-[1px] w-full"></div>

                <div className="content flex gap-13 justify-between">
                    <div className="flex flex-col gap-5 w-full">
                        <div className="name-container flex justify-between items-center gap-15">
                            <div className="flex justify-between items-center w-full">
                                <p className="font-bold">Name</p>
                                {isActive_btnname ? 
                                    <div>
                                        <input 
                                        type="text" 
                                        id="input-group-1" 
                                        value={user_profile.name} 
                                        required
                                        onChange={handlenameChange} 
                                        maxLength={15}
                                        className={`
                                            ${nameError ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-red-950 focus:border-red-500 block w-65 ps-10 p-2.5 dark:text-red-200 dark:placeholder-red-500 dark:border-red-500" : 
                                            "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-65 ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                        `}
                                        />
                                        <div className="h-1">
                                            {nameError && 
                                                <div className="flex gap-2 items-center text-red-500 ">
                                                    <CircleX className='h-4 w-4'/>
                                                    <p>{nameError}</p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    : 
                                    <p className="hint">{user_profile.name}</p>
                                }    
                            </div>
                            {isActive_btnemail == false ? 
                                (isActive_btnname ? 
                                    <button 
                                        onClick = {(e) => {
                                        if (nameError === "") {
                                            onSubmit(e);
                                        }
                                        }}
                                        className ={`name-edit text-right
                                            ${isActive_btnemail ? "hint":"text-[#FA347F] cursor-pointer hover:opacity-50"}
                                        `}
                                    >Finish</button> 
                                    :
                                    <button 
                                        onClick = {() => setisActive_btnname(!isActive_btnname)}
                                        className ="name-edit text-right text-[#FA347F] cursor-pointer hover:opacity-50"
                                    >Edit</button>
                                )
                                :
                                <button 
                                    className = "hint"
                                >Edit</button>
                            }
                        </div>
                        
                        <div className="flex justify-between">
                            <p className="font-bold">Email</p>
                            <p className="hint">{user_profile.email}</p>
                        </div>
                    </div>
                </div>

                <button 
                    onClick={()=>setPage(1)}
                    className="mt-10 flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white"
                >Change Password</button>

                {errorMessage && (
                    <span className='text-red-600 font-bold'>{errorMessage}</span>
                )}
            </div>
            }  
            {page == 1 && <DoPasswordChange setPage={setPage}/>}
        </>
    )
}

export default Profile;