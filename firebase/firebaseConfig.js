import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyByBzOwPf2k8AS7blm9yut3Z3_p5hvNUoQ",
    authDomain: "week-9-lab-firebase.firebaseapp.com",
    projectId: "week-9-lab-firebase",
    storageBucket: "week-9-lab-firebase.appspot.com",
    messagingSenderId: "989771624564",
    appId: "1:989771624564:web:568301dc3d55a3e2cee121"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);