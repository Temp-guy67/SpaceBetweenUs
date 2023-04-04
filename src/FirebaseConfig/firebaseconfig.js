
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDV49Ad03nA9xNZeTGHHHuMR2OVsPTBPW8",
  authDomain: "ets-space-6d72d.firebaseapp.com",
  databaseURL: "https://ets-space-6d72d-default-rtdb.firebaseio.com",
  projectId: "ets-space-6d72d",
  storageBucket: "ets-space-6d72d.appspot.com",
  messagingSenderId: "977808999899",
  appId: "1:977808999899:web:a640246c0a35808e4793fe"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default getFirestore(firebaseApp);



