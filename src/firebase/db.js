import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyB-ID-nLgsL2oRWfeU8FUoi0CPCzs8HVsA",
    authDomain: "vue-clients-list.firebaseapp.com",
    databaseURL: "https://vue-clients-list.firebaseio.com",
    projectId: "vue-clients-list",
    storageBucket: "vue-clients-list.appspot.com",
    messagingSenderId: "153376848097",
    appId: "1:153376848097:web:319b41abb1ad1f639c5fa0",
    measurementId: "G-R7KPD5FM5E"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).database();