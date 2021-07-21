import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA3nNRtdX8oSEStZKNR1apvzZyN5Wcw-XY",
    authDomain: "workoutappbase.firebaseapp.com",
    projectId: "workoutappbase",
    storageBucket: "workoutappbase.appspot.com",
    messagingSenderId: "225666611419",
    appId: "1:225666611419:web:0ea3f5493ec417eff134fe"
  };
  

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app();
}


export default firebase;
