import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvYxe5cEuLgTtIEsRYc29Y8RnpoiACaBc",
    authDomain: "react-dev-66b7d.firebaseapp.com",
    databaseURL: "https://react-dev-66b7d.firebaseio.com",
    projectId: "react-dev-66b7d",
    storageBucket: "react-dev-66b7d.appspot.com",
    messagingSenderId: "520481338584",
    appId: "1:520481338584:web:46c00122e9a441ead413ad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;