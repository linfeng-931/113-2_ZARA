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
