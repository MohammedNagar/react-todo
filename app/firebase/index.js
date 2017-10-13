import firebase from 'firebase';

try{
  var config = {
    apiKey: "AIzaSyDqsEQztQ01VTvjroPiiWMWhhR_clGiYGA",
    authDomain: "mido-todo-app.firebaseapp.com",
    databaseURL: "https://mido-todo-app.firebaseio.com",
    projectId: "mido-todo-app",
    storageBucket: "mido-todo-app.appspot.com",
    messagingSenderId: "893374611570"
  };
  firebase.initializeApp(config);
}catch(e){

}


export var firebaseRef = firebase.database().ref();
export default firebase;
