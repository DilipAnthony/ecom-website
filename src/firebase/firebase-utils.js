import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCGh0GX_386i0AwclYlF9GfxYo7ZsPrfc4",
  authDomain: "ecom-website-4f046.firebaseapp.com",
  databaseURL: "https://ecom-website-4f046.firebaseio.com",
  projectId: "ecom-website-4f046",
  storageBucket: "ecom-website-4f046.appspot.com",
  messagingSenderId: "632416891944",
  appId: "1:632416891944:web:c2052a050d547feb5c311d",
  measurementId: "G-SGRHSSFL74",
};

export const createOtherUser = async (userAuth, otherProps) => {
  if (!userAuth) return;

  const uid = userAuth.uid;
  const path = "users/" + uid;
  const userRef = firestore.doc(path);
  const snapShot = await userRef.get();

  console.log("USerref" + userRef);
  console.log("SNapshot" + snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherProps,
      });
    } catch (error) {
      console.log("error is:" + error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

const provider1 = new firebase.auth.FacebookAuthProvider();
export const SignInWithFacebook = () => auth.signInWithPopup(provider1);

export default firebase;
