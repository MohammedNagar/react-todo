import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDqsEQztQ01VTvjroPiiWMWhhR_clGiYGA",
  authDomain: "mido-todo-app.firebaseapp.com",
  databaseURL: "https://mido-todo-app.firebaseio.com",
  projectId: "mido-todo-app",
  storageBucket: "mido-todo-app.appspot.com",
  messagingSenderId: "893374611570"
};
firebase.initializeApp(config);


var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '2.0.0'
  },
  isRunning: true,
  user: {
    name: 'Mohammed',
    age: 32
  }
});


var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot) => {
  console.log('todo added',snapshot.key,snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});


//
// var notesRef = firebaseRef.child('notes');
//
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added',snapshot.key,snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed',snapshot.key,snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed',snapshot.key,snapshot.val());
// });
//
// var newNotesRef = notesRef.push({
//   text: 'Text Demo!!'
// });
//
// console.log('Todo Id',newNotesRef.key);

// firebaseRef.child('user').on('value',(snapshot) =>{
//   console.log('Fetch the change',snapshot.val());
// });
//
// firebaseRef.update({
//   'user/name': 'Ahmed'
// });
//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });

// firebaseRef.on('value',(snapshot) => {
//   console.log('Fetch the change',snapshot.val());
// });
//
// firebaseRef.off();
//
// firebaseRef.update({
//   isRunning: 'false'
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Fetch The Entire DB',snapshot.key,snapshot.val());
// },(e) => {
//   console.log('Unable To Fetch Data',e);
// });


// firebaseRef.update({
//   'app/name' : 'Todo Application',
//   'user/name': 'Rania'
// });


// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Nashwa'
// });
//
//
// firebaseRef.update({
//   isRunning : null
// });
//
// firebaseRef.child('user/age').remove();

// firebaseRef.update({
//   'app/name': null
// });

//firebaseRef.child('app/name').remove();

//firebaseRef.remove();
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(()=>{
//   console.log('Update Worked');
// },(e) =>{
//   console.log('Update Failed');
// });


// firebaseRef.set({
//   appName: 'Todo Application'
// });

// firebaseRef.child('app').set({
//   name: 'Todo application'
// });
//
//
// firebaseRef.child('user').set({
//   name: 'Ahmed'
// });
