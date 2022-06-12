import React from "react";

const Auth_Add = ({
  role,
  setRole,
  roomName,
  setRoomName,
  level,
  setLevel,
}) => {
  return (
    <>
      <label className="normal" for="school">
        Select a school:
      </label>

      <select
        className="inputForm"
        name="school"
        id="school"
        value={roomName}
        onChange={(e) => {
          setRoomName(e.target.value);
        }}
      >
        <option className="inputForm" value="Tarana Dance Academy">
          Tarana Dance Academy
        </option>
        <option className="inputForm" value="Lasva Fine Arts">
          Lasva Fine Arts
        </option>
        <option className="inputForm" value="Not Applicable">
          Not Applicable
        </option>
      </select>
      <label className="normal" for="level">
        Select a school:
      </label>

      <select
        className="inputForm"
        name="level"
        id="level"
        value={level}
        onChange={(e) => {
          setLevel(e.target.value);
        }}
      >
        <option className="inputForm" value="Part 1">
          Part 1
        </option>
        <option className="inputForm" value="Level 2">
          Level 2
        </option>
        <option className="inputForm" value="Level 3">
          Level 3
        </option>
      </select>
      <label className="normal" for="role">
        Select a role:
      </label>

      <select
        className="inputForm"
        name="role"
        id="role"
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
        }}
      >
        <option className="inputForm" value="Teacher">
          Teacher
        </option>
        <option className="inputForm" value="Student">
          Student
        </option>
      </select>
    </>
  );
};

export default Auth_Add;
