import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react';
import Login from './screens/Login';
import Camera from './screens/Camera';
import Home from "./screens/Home";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import Register from "./screens/Register";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
const db = getFirestore(app);

export default function App() {

  const Stack = createStackNavigator();
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="starting">
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Camera" component={Camera}/> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

