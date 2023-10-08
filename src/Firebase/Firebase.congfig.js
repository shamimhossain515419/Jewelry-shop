import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
     apiKey: "AIzaSyAkoW9PWGuuQMGsLU3NgFAjRTRwkl1I64k",
     authDomain: "jewelry-sh.firebaseapp.com",
     projectId: "jewelry-sh",
     storageBucket: "jewelry-sh.appspot.com",
     messagingSenderId: "464237797403",
     appId: "1:464237797403:web:f7cc806e35fc7e7af7d8be",
     measurementId: "G-RP18GBNLZQ"
};

// Initialize Firebase
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];


export default app;