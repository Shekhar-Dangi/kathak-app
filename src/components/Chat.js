import { collection, orderBy, query } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { sendMessage } from "../firebase/message";
import "./Chat.css";
import MainNavbar from "./MainNavbar";
import "./Modal.css";
function scroll() {
  const chatBody = document.querySelector(".chat_container");
  chatBody.scrollTop = chatBody.scrollHeight;
}
const Chat = () => {
  const [user] = useAuthState(auth);
  const [message, setMessage] = useState("");
  const [messages, loading] = useCollection(
    user && query(collection(db, `messages`), orderBy("timestamp", "asc"))
  );
  useEffect(() => {
    setTimeout(scroll, 1000);
  }, [user]);
  console.log(messages);
  return (
    <div>
      <div className="header">
        <h1>EXAM PREPARATION</h1>
      </div>
      <MainNavbar />
      <div className="chat_container">
        <div className="chats">
          {messages?.docs.map((doc) => {
            const { message, timestamp, email } = doc.data();

            return (
              <div
                className={`${user?.email === email ? "self" : ""} in_chat`}
                id={Math.random() * 1111111}
              >
                <p className="user">{email}</p>
                <p className="paragraph">{message}</p>
                <p className="small">
                  {new Date(timestamp?.toDate()).toUTCString()}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <form>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="inputForm chat"
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            if (user) await sendMessage(user.email, message);
            setMessage("");
            scroll();
          }}
          className="hidden"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
