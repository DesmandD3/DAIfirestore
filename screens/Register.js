import { View, Button, Text, Image, TextInput } from "react-native";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function Register() {

    const [fn, setFn] = useState ("");
    const [age, setAge] = useState ("");
    const [ava, setAva] = useState ("");

    // need age, fullname and avatar url
    const AddUser = async () =>{
        const db = getFirestore();
        const docRef = await addDoc(collection(db, "users"), {
            fullname: fn,
            age: age, 
            avatar: ava
        });
        console.log("Document writting: ", docRef.id)
    }

    return (
        <View>
            <TextInput placeholder="fullname" onChangeText={(txt)=>setFn(txt)} />
            <TextInput placeholder="age" onChangeText={(txt)=>setAge(txt)} />
            <TextInput placeholder="avatar" onChangeText={(txt)=>setAva(txt)} />
            <Button title="add" onPress={()=>AddUser()} />
        </View>
    )
}