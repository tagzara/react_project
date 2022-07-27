import { useState, useEffect } from "react";
import { db } from '../utils/firebase.js';
import { collection, getDocs } from "firebase/firestore";

export const usersService = () => {
    const [users, setUsers] = useState([]);
    const usersCollection = collection(db, 'users');
    useEffect(() => {

            const getUsers = async () => {
                const data = await getDocs(usersCollection);
                setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            }

            getUsers();
    }, []);
    return users;
}