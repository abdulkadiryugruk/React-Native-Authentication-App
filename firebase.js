import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCd0UpccZjSZkrqYcViz7Xjg5x2gmY1uz4",
  authDomain: "authentication-app-38f7e.firebaseapp.com",
  projectId: "authentication-app-38f7e",
  storageBucket: "authentication-app-38f7e.firebasestorage.app",
  messagingSenderId: "167424994658",
  appId: "1:167424994658:web:b2439329cb66dca342903b"
};

// Initialize Firebase
if(!firebase.apps.length){
	firebase.initializeApp(firebaseConfig);
}
const auth =firebase.auth();

export {auth};