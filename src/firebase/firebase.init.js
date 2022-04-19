// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDK4LI1TykyoNOSTWOr2GOj_oNF6qvgAwo",
  authDomain: "yoga-guide-d1416.firebaseapp.com",
  projectId: "yoga-guide-d1416",
  storageBucket: "yoga-guide-d1416.appspot.com",
  messagingSenderId: "780361983388",
  appId: "1:780361983388:web:ae7c9d53cac6c72fda5459",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
