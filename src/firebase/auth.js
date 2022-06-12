import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addStudent } from "./school";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createProperties } from "./task";

export const signUp = async (email, password, roomName, level, role) => {
  let user;
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (creds) => {
      user = creds.user;
      console.log(user);
      await addStudent(roomName, email, level, role);
      createProperties(user.email, role === "Student");

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

export const authGoogle = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const email = result.user.email;
      console.log(email);
      const c = collection(db, email);
      const d = await getDocs(c);
      console.log(d.empty);

      if (!d.empty) {
        document.querySelector(".modal-container").style.display = "none";
      } else {
        document.querySelector(".modal-container").style.display = "none";
        document.querySelector(".moreDet").style.display = "flex";
      }
    })
    .catch((error) => {
      alert(error);
    });
};
