import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "kathak-app.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
