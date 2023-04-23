import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCYdVtXstcEjqRyL04IOfybjPn34wG2q0I',
  authDomain: 'app-dt-money.firebaseapp.com',
  databaseURL: 'https://app-dt-money-default-rtdb.firebaseio.com',
  projectId: 'app-dt-money',
  storageBucket: 'app-dt-money.appspot.com',
  messagingSenderId: '1095932282325',
  appId: '1:1095932282325:web:39401a1918852798a8695c',
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }
