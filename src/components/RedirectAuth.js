import React from "react";
import { addStudent } from "../firebase/school";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Auth_Add from "./Auth_Add";
import { createProperties } from "../firebase/task";

const RedirectAuth = ({
  role,
  setRole,
  roomName,
  setRoomName,
  level,
  setLevel,
}) => {
  const [user, loading] = useAuthState(auth);
  const register = async () => {
    if (loading) {
      return;
    }
    await addStudent(roomName, user.email, level, role);
    createProperties(user.email, role === "Student");
    document.querySelector(".moreDet").style.display = "none";
  };
  return (
    <div className="moreDet">
      <div className="modal">
        <div className="form">
          <h2 className="heading"> KATHAK SCHOOL</h2>
          <form action="">
            <Auth_Add
              role={role}
              setRole={setRole}
              roomName={roomName}
              setRoomName={setRoomName}
              level={level}
              setLevel={setLevel}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                register();
              }}
              className="btn-login"
            >
              REGISTER FOR SCHOOL
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RedirectAuth;
