const firebase = require('firebase')

var config = {
    apiKey: "AIzaSyDdPjLEVY-7iYMRBGVzyC61m5TcdkT7sYU",
    authDomain: "messagingapp-a1a77.firebaseapp.com",
    databaseURL: "https://messagingapp-a1a77.firebaseio.com",
    projectId: "messagingapp-a1a77",
    storageBucket: "messagingapp-a1a77.appspot.com",
    messagingSenderId: "568766461949"
  }
  firebase.initializeApp(config)

const provider = new firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()

module.exports = {
  firebase,
  provider,
  auth
}