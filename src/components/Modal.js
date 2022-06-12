import React from "react";
import "./Modal.css";

const Modal = ({ Component, id, name, form, names, headings }) => {
  const close = () => {
    document.querySelector(`.modal-container${id}`).style.display = "none";
  };
  return (
    <div className={`modal-container modal-container${id} taals`}>
      <div className={`modal`}>
        <i
          class="fa-solid fa-xmark cross"
          onClick={() => {
            close(id);
          }}
        ></i>
        <div
          className={`${form ? "form_modal" : "taal"} ${
            name ? "modal_image" : ""
          }`}
        >
          {name ? (
            <Component
              index={id}
              image1={`./images/${name}1.png`}
              image2={`./images/${name}2.png`}
              image3={`./images/${name}3.png`}
            />
          ) : (form ? (
            <Component names={names} headings={headings} />
          ) : (
            <Component id={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
