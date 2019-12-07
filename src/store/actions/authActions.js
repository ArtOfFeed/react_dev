import firebase from 'firebase/app'

export const SignInAC = (credentials) => {
    return (dispatch, getState) => {
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
};

export const SignOutAC = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: 'SIGN_OUT_SUCCESS'})
            }).catch((err) => {
                console.error(err);
            })
    }
};

export const SignUpAC = (user) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then((response) => {
            console.log(user);
            return () => {
                return firestore.collection('users').doc(response.user.uid).set({
                    firstName: user.firstName,
                    lastName: user.lastName
                });
            }
        }).then(() => {
            dispatch({type: 'SIGN_UP_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'SIGN_UP_ERROR', err})
        });
    }
};
