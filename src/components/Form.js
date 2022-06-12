import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { updateField } from "../firebase/task";

const Form = ({ names, headings }) => {
  const [user] = useAuthState(auth);
  const [action, setAction] = useState(names[0]);
  const [text, setText] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    updateField(user.email, action, text);
    document.querySelector(".modal-container2").style.display = "none";
    setAction(names[0]);
    setText("");
  };
  return (
    <div>
      <form action="">
        <label className="normal" for="task">
          Select action:
        </label>

        <select
          className="inputForm"
          name="task"
          id="task"
          value={action}
          onChange={(e) => {
            setAction(e.target.value);
          }}
        >
          {headings.map((heading, index) => {
            return (
              <option
                className="inputForm"
                value={names[index]}
                onChange={(e) => {
                  setAction(e.target.value);
                }}
              >
                {heading}
              </option>
            );
          })}
        </select>

        <label className="normal" htmlFor="addOn">
          Type here :
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
        <button onClick={addTask} className="btn-login">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
