import React from "react";
import "./Header.css";
import "./Body.css";

const List = ({ heading, list, linked }) => {

  return (
    <p className="paragraph">
      {heading ? heading : ""}
      <ul>
        {list.map((l, index) => (
          <li>{linked ? <a href="#" onClick={() => document.querySelector(`.modal-container${linked[index]}`).style.display = "flex"}>{l}</a> : l}</li>
        ))}
      </ul>
    </p>
  );
};

export default List;
