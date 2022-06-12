import { collection, addDoc, serverTimestamp } from "firebase/firestore";
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
    const docRef2 = await addDoc(collection(db, email), {
      school: roomName,
      joinedAt: serverTimestamp(),
      level,
      role,
    });
    console.log("Document written with ID: ", docRef.id);
    console.log("Document written with ID: ", docRef2.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
