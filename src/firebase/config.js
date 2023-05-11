import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyAt8aYOT5TyPr_qwdFja6a_OSKx6hdu-2o",
    authDomain: "linkedinnn-8742c.firebaseapp.com",
    projectId: "linkedinnn-8742c",
    storageBucket: "linkedinnn-8742c.appspot.com",
    messagingSenderId: "711826355786",
    appId: "1:711826355786:web:07d204b911b4e033e358b3",
    measurementId: "G-JEW87RM101"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
