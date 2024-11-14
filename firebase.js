import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {

};

// Initialize Firebase
if(!firebase.apps.length){
	firebase.initializeApp(firebaseConfig);
}
const auth =firebase.auth();

export {auth};
