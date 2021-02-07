import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCJcVEtzs0i4MNUmZaz6jMk0-81HT8NhY0",
    authDomain: "react-clone-a17f0.firebaseapp.com",
    projectId: "react-clone-a17f0",
    storageBucket: "react-clone-a17f0.appspot.com",
    messagingSenderId: "642586884726",
    appId: "1:642586884726:web:6809951b662281fb14fd57"
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };