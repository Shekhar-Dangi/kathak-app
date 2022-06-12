import React from "react";
import MainNavbar from "./MainNavbar";
import "./Header.css";
import "./Util.css";
import "./Button.css";
import Form from "./Form";
import Modal from "./Modal";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, doc } from "firebase/firestore";
const Student = () => {
  const [user] = useAuthState(auth);
  const [col] = useCollection(user && collection(db, user?.email));
  const [prep] = useDocument(user && doc(db, user?.email, "prep"));
  const [task] = useDocument(user && doc(db, user?.email, "task"));
  const [exam] = useDocument(user && doc(db, user?.email, "exam"));
  const [cla] = useDocument(user && doc(db, user?.email, "class"));
  const len = col?.docs.length;
  console.log(cla?.data());
  return (
    <>
      <div className="header">
        <h1>STUDENT</h1>
      </div>
      <MainNavbar />
      <Modal
        Component={Form}
        id={2}
        form={true}
        names={["task", "prep", "exam", "class"]}
        headings={[
          "Upcoming Tasks",
          "Next Performance Dates",
          "Next Exam Dates",
          "Next Class Date",
        ]}
      />
      <main>
        <a
          className="btn-add"
          onClick={() => {
            document.querySelector(".modal-container2").style.display = "flex";
          }}
        >
          Add
        </a>
        <div className="top_container">
          <div className="first_container">
            <h2 className="heading">Upcoming Tasks</h2>
            <p className="paragraph">
              <ul>
                {task?.data()?.data?.length > 0 ? (
                  task?.data()?.data?.map((doc) => {
                    return <li>{doc}</li>;
                  })
                ) : (
                  <p className="paragraph">Nothing here!</p>
                )}
              </ul>
            </p>
          </div>

          <div className="middle_container">
            <div className="middle1">
              <h2 className="heading">Next Exam Date</h2>
              <p className="paragraph">
                <ul>
                  {exam?.data()?.data?.length > 0 ? (
                    exam?.data()?.data?.map((doc) => {
                      return <li>{doc}</li>;
                    })
                  ) : (
                    <p className="paragraph">Nothing here!</p>
                  )}
                </ul>
              </p>
            </div>
            <div className="middle2">
              <h2 className="heading">Next Performance Date</h2>
              <p className="paragraph">
                <ul>
                  {prep?.data()?.data?.length > 0 ? (
                    prep?.data()?.data?.map((doc) => {
                      return <li>{doc}</li>;
                    })
                  ) : (
                    <p className="paragraph">Nothing here!</p>
                  )}
                </ul>
              </p>
            </div>
          </div>
          <div className="bottom_container">
            <h2 className="heading">Next Class Dates</h2>
            <p className="paragraph">
              <ul>
                {cla?.data()?.data?.length > 0 ? (
                  cla?.data()?.data?.map((doc) => {
                    return <li>{doc}</li>;
                  })
                ) : (
                  <p className="paragraph">Nothing here!</p>
                )}
              </ul>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Student;
