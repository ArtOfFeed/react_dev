import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, getFirestore, reduxFirestore} from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
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

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirestore})),
        reduxFirestore(firebaseConfig),
    ));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
