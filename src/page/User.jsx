import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import { doSignOut } from "../firebase/auth";
import { useAuth } from "../contexts/authContext";

function UserAccount(){
    const {userLoggedIn} = useAuth();
    const handleSignOut = async () => {
        try {
          await doSignOut();
          // 可選擇導向登入頁或顯示訊息
        } catch (err) {
          console.error("Sign out error:", err);
        }
      };

    return(
        <>
            <Header/>
            <p>Login ok</p>
            {userLoggedIn && (
                <button 
                    onClick={handleSignOut}
                    className="h-12 w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer"
                >Sign Out</button>
            )}
            <Footer/>
        </>
    )
}

export default UserAccount;