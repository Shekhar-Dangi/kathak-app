import { auth, db } from "../firebase";
import {
  addDoc,
  serverTimestamp,
  collection,
} from "firebase/firestore";

const sendMessage = async (email, message) => {
  const col = collection(db, "messages");
  await addDoc(col, { email, message, timestamp: serverTimestamp() });
};

export { sendMessage };
