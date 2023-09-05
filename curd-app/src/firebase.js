import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getfirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCfZZEOdCp1rwBb0zLi-0Ow6pJfDHCkfmQ",
  authDomain: "curdapp-d3b0c.firebaseapp.com",
  projectId: "curdapp-d3b0c",
  storageBucket: "curdapp-d3b0c.appspot.com",
  messagingSenderId: "67410053079",
  appId: "1:67410053079:web:bade211b0f7e40187aad92",
  measurementId: "G-BFV2J6C02R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getfirestore(app);