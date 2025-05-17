import { Link } from "react-router-dom";

function CreateAccount(){
    return(
        <>
            <div className="flex flex-col justify-between text-left w-72 h-full">
                <div className="content">
                    <h1 className="mb-5">Don't have an account?</h1>
                    <p>
                        New here? Create your ZARA account now to unlock discounts, coupons, and exclusive event updates!
                    </p>
                </div>
                <Link to="/user/register">
                    <button
                        className="bottom-0 flex h-12 w-full justify-around items-center gap-3 bg-black dark:bg-white text-white dark:text-black cursor-pointer duration-150
                                    hover:bg-inherit hover:border-[1px] hover:text-black hover:dark:text-white"
                    >
                            Register
                    </button>
                </Link>
             </div>
        </>
    )
}

export default CreateAccount;