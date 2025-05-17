import { useEffect, useState } from "react";
import Header from "../compenents/Header";
import Footer from "../compenents/Footer";
import { getUserProfile } from "../firebase/users";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";
import { auth } from "../firebase/config";

function UserDetail() {
  const { userLoggedIn } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const currentUser = auth.currentUser;
      
      if (userLoggedIn && currentUser.uid) {
        try {
          const userData = await getUserProfile(currentUser.uid);
          setProfile(userData);
        } catch (error) {
          console.error("Failed to fetch profile:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProfile();
  }, [userLoggedIn]);

  const handleSignOut = async () => {
    try {
      await doSignOut();
      // 可選擇導向登入頁或顯示訊息
    } catch (err) {
      console.error("Sign out error:", err);
    }
  };

  return (
    <>
      <Header />
      <div className="">
        {loading && <p>Loading...</p>}
        {!loading && profile && (
          <div>
            <p>Email: {profile.email}</p>
            {profile.avatar && (
              <img
                src={profile.avatar}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mt-2"
              />
            )}
          </div>
        )}
      </div>
      {userLoggedIn && (
        <button 
            onClick={handleSignOut}
            className="h-12 w-12 flex justify-center items-center bg-black dark:bg-white hover:opacity-50 duration-150 cursor-pointer"
        >Sign Out</button>
      )}
      <Footer />
    </>
  );
}

export default UserDetail;
