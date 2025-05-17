import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import Login from "../compenents/auth/login/index"
import CreateAccount from "../compenents/auth/register/CreateAccount";

function UserAccount(){
    
    return(
        <>
            <Header/>
            <div className="w-full">
                <div className="flex gap-15 h-60 justify-center">
                    <Login/>
                    <div className="divider divider-horizontal"></div>
                    <CreateAccount/>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default UserAccount;