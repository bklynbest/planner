import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
  
  // Initialize Firebase
let config = {
  apiKey: "AIzaSyBgBI-zY5Oeh2Pg9yiwfO12f4ceVWXmib4",
  authDomain: "britannia-planner.firebaseapp.com",
  databaseURL: "https://britannia-planner.firebaseio.com",
  projectId: "britannia-planner",
  storageBucket: "britannia-planner.appspot.com",
  messagingSenderId: "411641629087"
};
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});
  
export default firebase;