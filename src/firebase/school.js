import {
  collection,
  setDoc,
  addDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

export const addStudent = async (roomName, email, level, role) => {
  try {
    const docRef = await addDoc(
      collection(db, "schools", roomName, "students"),
      {
        email,
        joinedAt: serverTimestamp(),
        level,
        role,
      }
    );
    const docRef2 = await setDoc(doc(db, email, "info"), {
      school: roomName,
      joinedAt: serverTimestamp(),
      level,
      role,
    });

  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
