import { auth } from "./config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

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

export const checkemail = () => {
  const user = auth().currentUser;

  user
    .sendEmailVerification()
    .then(function () {
      // 驗證信發送完成
      window.alert("驗證信已發送到您的信箱，請查收。");
    })
    .catch((error) => {
      // 驗證信發送失敗
      console.log(error.message);
    });
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

// export const doPasswordChange = (password) => {, signInWithPopup, updatePassword
//     return updatePassword(auth.currentUser, password);
// };

// export const doSendEmailVerification = () => {
//     return sendEmailVerification(auth.currentUser,{
//         url: ${window.location.origin}/Home,
//     });
// };
