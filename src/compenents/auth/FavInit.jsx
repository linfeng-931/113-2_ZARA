import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../contexts/authContext";
import { auth, db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { setFavoriteItems } from "../../redux/favSlice";

function FavoriteInit() {
  const dispatch = useDispatch();
  const { userLoggedIn } = useAuth();

  useEffect(() => {
    const fetchFavorites = async () => {
      const currentUser = auth.currentUser;
      if (userLoggedIn && currentUser) {
        const userRef = doc(db, "user", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const favItems = userSnap.data().favItems || [];
          dispatch(setFavoriteItems(favItems));
          localStorage.setItem("favoriteItems", JSON.stringify(favItems));
        }
      }
    };

    fetchFavorites();
  }, [userLoggedIn]);

  return null;
}

export default FavoriteInit;
