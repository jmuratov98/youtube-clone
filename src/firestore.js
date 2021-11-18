import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAclJ-VOw-UGRsebObRJYSG1KJYXBEnOOs",
  authDomain: "clone-d4ae7.firebaseapp.com",
  projectId: "clone-d4ae7",

  storageBucket: "clone-d4ae7.appspot.com",
  messagingSenderId: "598159567447",
  appId: "1:598159567447:web:d5dc3ec1d71c530d6a1112"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = getAuth();

const login = () => {
  signInWithPopup(auth, provider).then(result => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log({ credential, token, user });
  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log({ errorCode, errorMessage, email, credential });
  });
}

const logout = () => {
  auth.signOut();
  console.log("logout");
}

export { app, auth, login, logout };