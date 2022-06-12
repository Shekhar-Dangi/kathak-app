import React from "react";
import { auth, db } from "../firebase";
import {
  getDocs,
  setDoc,
  doc,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const updateField = async (email, action, text) => {
  const d = doc(db, email, action);
  await updateDoc(d, { data: arrayUnion(text) });
};

const createProperties = async (email, student) => {
  if (student) {
    await setDoc(doc(db, email, "task"), { data: [] });
    await setDoc(doc(db, email, "prep"), { data: [] });
    await setDoc(doc(db, email, "exam"), { data: [] });
    await setDoc(doc(db, email, "class"), { data: [] });
  } else {
    await setDoc(doc(db, email, "class"), { data: [] });
    await setDoc(doc(db, email, "paym"), { data: [] });
    await setDoc(doc(db, email, "lesson"), { data: [] });
  }
};

export { createProperties, updateField };
