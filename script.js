
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getRedirectResult, GithubAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged , signInWithPopup, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const provider = new GithubAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBTZM8MDjkB4Q3omm_MQvDqs4ZOGVB4b8",
  authDomain: "web-intensive-d30cb.firebaseapp.com",
  projectId: "web-intensive-d30cb",
  storageBucket: "web-intensive-d30cb.appspot.com",
  messagingSenderId: "586517852436",
  appId: "1:586517852436:web:823e93883b5960b0ec9201",
  measurementId: "G-3FKFNQCNJL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const register_form = document.getElementById('register-form');
const login_form = document.getElementById('login-form')
if (register_form) {
  register_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          //...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          //..
        });
    } else {
      alert('Please fill in all fields');
    }
  })
}


login_form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('exampleInputEmail1').value;
  const password = document.getElementById('exampleInputPassword1').value;
  if (email && password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log('success')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  } else {
    alert('Please fill in');
  }
})

const LoginBT = document.getElementById('login-gg');
LoginBT.addEventListener('click', () => {

  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
  })




onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
    console.log('User is logged in');
    console.log(user);
  } else {
    // User is signed out
    // ...
  }
});