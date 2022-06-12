import React from "react";
import Form from "./Form";
import MainNavbar from "./MainNavbar";
import Modal from "./Modal";
import "./Util.css";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, doc } from "firebase/firestore";

const Teacher = () => {
  const [user] = useAuthState(auth);
  const [cla] = useDocument(user && doc(db, user?.email, "class"));
  const [paym] = useDocument(user && doc(db, user?.email, "paym"));
  const [lesson] = useDocument(user && doc(db, user?.email, "lesson"));

  return (
    <>
      <div className="header">
        <h1>TEACHER</h1>
      </div>
      <MainNavbar />
      <main>
        <a
          className="btn-add"
          onClick={() => {
            document.querySelector(".modal-container2").style.display = "flex";
          }}
        >
          Add
        </a>
        <Modal
          Component={Form}
          id={2}
          form={true}
          names={["class", "paym", "lesson"]}
          headings={["Managing Classes", "Managing Payments", "Lesson Plans"]}
        />
        <div className="top_container">
          <div className="first_container">
            <h2 className="heading">Managing Classes</h2>
            <ul>
              {cla?.data()?.data?.length > 0 ? (
                cla?.data()?.data?.map((doc) => {
                  return <li>{doc}</li>;
                })
              ) : (
                <p className="paragraph">Nothing here!</p>
              )}
            </ul>
          </div>
          <div className="second_container">
            <div className="middle1">
              <h2 className="heading">Managing Payments</h2>
              <ul>
                {paym?.data()?.data?.length > 0 ? (
                  paym?.data()?.data?.map((doc) => {
                    return <li>{doc}</li>;
                  })
                ) : (
                  <p className="paragraph">Nothing here!</p>
                )}
              </ul>
            </div>
            <div className="middle2">
              <h2 className="heading">Lesson Plan</h2>
              <ul>
                {lesson?.data()?.data?.length > 0 ? (
                  lesson?.data()?.data?.map((doc) => {
                    return <li>{doc}</li>;
                  })
                ) : (
                  <p className="paragraph">Nothing here!</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Teacher;
