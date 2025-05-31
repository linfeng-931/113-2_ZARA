import { auth } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  //signInWithPopup,
  updatePassword,
} from "firebase/auth";
import { createUserProfile } from "./users";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  //載入進firestore
  await createUserProfile(user);

  // 寄驗證信
  await sendEmailVerification(user);

  return userCredential;
};

export const doSignInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (user, password) => {
  return updatePassword(user, password);
};

// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser,{
//         url: ${window.location.origin}/Home,
//     });
// };
