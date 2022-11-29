import { View, Button, Text, Image } from "react-native";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function Home({ navigation }) {

    //get firestore data and show
    const [users, setUsers] = useState([]);

    const GetData = async () => {

        const db = getFirestore();

        const querySnapshot = await getDocs(collection(db, "users"));

        const dbUsers = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            dbUsers.push({
                ...doc.data(),
                id: doc.id
            });
        });

        setUsers([
            ...dbUsers
        ]);
    };

    return (
        <View>
            <Button title="Get Some Data!" onPress={() => GetData()} />
            <Button title="Add User" onPress={() => navigation.navigate("Register")} />
            {users.map(o => <View key={o.id}>
                <Image source={{ uri: o.avatar }} style={{ width: 100, height: 100 }} />
                <Text>{o.id} - {o.fullname} </Text>
            </View>)}
        </View>
    );
}