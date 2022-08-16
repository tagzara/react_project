import { db } from '../utils/firebase.js';
import { ref, onValue } from "firebase/database";

export const getUsername = () => {
        onValue(ref(db, 'users'), (snapshot) => {
            const data = snapshot.val();
        })
        
}