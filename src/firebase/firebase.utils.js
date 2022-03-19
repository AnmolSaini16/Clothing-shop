import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDB1tu5hwveBhebNpX0zZyOhB-sZG6zD-k",
    authDomain: "clothing-app-react-83349.firebaseapp.com",
    projectId: "clothing-app-react-83349",
    storageBucket: "clothing-app-react-83349.appspot.com",
    messagingSenderId: "839323404371",
    appId: "1:839323404371:web:c1efbb293b05c154209ea6",
    measurementId: "G-CN46PQGECE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
 
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
        } catch (error) {
           console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogele = () => auth.signInWithPopup(provider);

export default firebase;
