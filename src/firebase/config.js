import { firebase } from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDsfIYvRgcU6sAm4PsGObmXJtf_uKHnGcs",
    authDomain: "poly-management.firebaseapp.com",
    projectId: "poly-management",
    storageBucket: "poly-management.appspot.com",
    messagingSenderId: "462258808173",
    appId: "1:462258808173:web:a81cf652f00ded4f11e664"
};

// initialize firebase

firebase.initializeApp(firebaseConfig)


// initialize services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }