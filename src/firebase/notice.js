import { auth, db } from "../firebase";
import {
  getDocs,
  setDoc,
  doc,
  collection,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

const addPost = async (post) => {
  const c = doc(db, "posts", "data");
  await updateDoc(c, { data: arrayUnion(post) });
};

const deletePost = async (post) => {
  const c = doc(db, "posts", "data");
  await updateDoc(c, { data: arrayRemove(post) });
};

export { addPost, deletePost };
