import React, { useState } from "react";
import MainNavbar from "./MainNavbar";
import "./Notice.css";
import "./Button.css";
import Modal from "./Modal";
import { addPost, deletePost } from "../firebase/notice";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc, query } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";

const Content = () => {
  const [text, setText] = useState("");
  const change = () => {
    text && addPost(text);
    document.querySelector(".modal-container2").style.display = "none";
    setText("");
  };
  return (
    <>
      <label className="normal" htmlFor="addOn">
        Enter a notice :
      </label>
      <input
        className="inputForm"
        type="text"
        name="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        id="addOn"
        required
      />
      <button onClick={change} className="btn-login">
        Add
      </button>
    </>
  );
};

const Notice = () => {
  const [user] = useAuthState(auth);
  const [info, loading2] = useDocument(
    user && query(doc(db, user.email, "info"))
  );
  const [posts] = useDocument(user && doc(db, "posts", "data"));
  return (
    <div>
      <Modal Component={Content} id={2} form={true} />
      <div className="header">
        <h1>NOTICE</h1>
      </div>
      <MainNavbar />
      <main>
        {info?.data()?.role === "Teacher" ? (
          <a
            className="btn-add"
            onClick={() => {
              document.querySelector(".modal-container2").style.display =
                "flex";
            }}
          >
            Add
          </a>
        ) : (
          ""
        )}

        {posts?.data()?.data?.length > 0 ? (
          posts?.data()?.data.map((doc) => {
            return info?.data()?.role === "Teacher" ? (
              <p className="paragraph">
                <i
                  onClick={() => {
                    deletePost(doc);
                  }}
                  class="fa-solid fa-xmark"
                ></i>
                {doc}
              </p>
            ) : (
              <p className="paragraph">
                <i class="fa-solid  fa-star-of-life"></i>
                {doc}
              </p>
            );
          })
        ) : (
          <p className="paragraph">Nothing here yet!</p>
        )}
      </main>
    </div>
  );
};

export default Notice;
