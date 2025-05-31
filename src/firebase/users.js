import { db } from "./config";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

export const createUserProfile = async (user) => {
  const userRef = doc(db, "user", user.uid);
  await setDoc(userRef, {
    email: user.email,
    uid: user.uid,
    avatar: "",
    point: 0,
    name: "user",
    createdAt: new Date().toISOString(),
  });
};

export const getUserProfile = async (uid) => {
  if (!uid) throw new Error("UID is required to fetch profile");

  const userRef = doc(db, "user", uid);
  const docSnap = await getDoc(userRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    throw new Error("User profile not found");
  }
};

export const updateUserProfile = async (uid, data) => {
  const userRef = doc(db, "user", uid);
  await updateDoc(userRef, data);
};

export const getUserCart = async (uid) => {
  const userRef = doc(db, "user", uid);
  const docSnap = await getDoc(userRef);
  console.log(userRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    return data.cart || []; // 如果沒 cart 欄位就回傳空陣列
  } else {
    return [];
  }
};

// 加入最愛收藏
export const addToFavorites = async (uid, productId) => {
  const userRef = doc(db, "user", uid);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) throw new Error("User not found");

  const currentFavorites = docSnap.data().favorites || [];

  if (!currentFavorites.includes(productId)) {
    await updateDoc(userRef, {
      favorites: [...currentFavorites, productId],
    });
  }
};

// 移除最愛收藏
export const removeFromFavorites = async (uid, productId) => {
  const userRef = doc(db, "user", uid);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) throw new Error("User not found");

  const currentFavorites = docSnap.data().favorites || [];

  await updateDoc(userRef, {
    favorites: currentFavorites.filter((id) => id !== productId),
  });
};

// 取得收藏
export const getFavorites = async (uid) => {
  const userRef = doc(db, "user", uid);
  const docSnap = await getDoc(userRef);
  if (!docSnap.exists()) throw new Error("User not found");

  return docSnap.data().favorites || [];
};
