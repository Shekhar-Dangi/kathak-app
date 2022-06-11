import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signUp = (email, password) => {
  let user;
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((creds) => {
      user = creds.user;
      console.log(user);
      document.querySelector(".modal-container").style.display = "none";
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
    });
};

export const signIn = (email, password) => {
  let user;
  signInWithEmailAndPassword(auth, email, password)
    .then((creds) => {
      user = creds.user;
      console.log(user);
      document.querySelector(".modal-container").style.display = "none";
    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
    });
  return user;
};

export const authGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      document.querySelector(".modal-container").style.display = "none";
    })
    .catch((error) => {
      alert(error.message);
    });
};
