import { arrayRemove, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { clearFavoriteItems } from "../redux/favSlice";

export const handleClearFavorites = async (favItems, dispatch) => {
  try {
    const user = auth.currentUser;
    if (!user) return;

    const userDocRef = doc(db, "user", user.uid);

    // 從前端的 favItems 清除
    for (let item of favItems) {
      await updateDoc(userDocRef, {
        favItems: arrayRemove(item),
      });
    }

    dispatch(clearFavoriteItems());
  } catch (err) {
    console.error("清空收藏失敗：", err);
  }
};
