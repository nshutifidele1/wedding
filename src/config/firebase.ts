import  { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ_Jgva5VQF6SR_pi_81yHjuzHupaz5cM",
  authDomain: "wedding-b7e72.firebaseapp.com",
  projectId: "wedding-b7e72",
  storageBucket: "wedding-b7e72.firebasestorage.app",
  messagingSenderId: "344638247063",
  appId: "1:344638247063:web:402548d6dd8701519059d2",
  measurementId: "G-FNL0VRNRHH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 