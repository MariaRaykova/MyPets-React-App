import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics' //ако сме го чекнали

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAx0k2xT96oOND0fxSq_8adVWjwzY-BxFI",
    authDomain: "my-pets-reactapp.firebaseapp.com",
    projectId: "my-pets-reactapp",
    storageBucket: "my-pets-reactapp.appspot.com",
    messagingSenderId: "747017479637",
    appId: "1:747017479637:web:5556c3a39ec9db9393495c"
};
//if(!firebase.apps.length){ //ако не съществува, тогава го инициализирай
    const firebaseApp = firebase.initializeApp(firebaseConfig)
//}
export default firebaseApp; //за да не го импортваме всеки път от firebase.app
//export const auth = firebase.auth(); //защото за да достъпваме всяка една от услугите ние трябва да кажем firebase.auth като функция и по-добре да експортнем така 
