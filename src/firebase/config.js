import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVTx4ipxZX-FBEmOSTmMSUjyYbTjM_3mk",
  authDomain: "login-system-bs.firebaseapp.com",
  databaseURL: "https://login-system-bs-default-rtdb.firebaseio.com",
  projectId: "login-system-bs",
  storageBucket: "login-system-bs.appspot.com",
  messagingSenderId: "727899656630",
  appId: "1:727899656630:web:77421267a0158e41c2b117"
};

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };