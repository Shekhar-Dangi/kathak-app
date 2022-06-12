import {  db } from "../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

const addPost = async (post) => {
  const c = doc(db, "posts", "data");
  await updateDoc(c, { data: arrayUnion(post) });
};

const deletePost = async (post) => {
  const c = doc(db, "posts", "data");
  await updateDoc(c, { data: arrayRemove(post) });
};

export { addPost, deletePost };
