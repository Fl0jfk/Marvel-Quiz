import app from 'firebase/app';

const config = {
    apiKey: "AIzaSyASpt9V_l0tMsRl-5ElOpNM7FlRuWqs_Ec",
    authDomain: "marvel-quiz-bb0cc.firebaseapp.com",
    projectId: "marvel-quiz-bb0cc",
    storageBucket: "marvel-quiz-bb0cc.appspot.com",
    messagingSenderId: "517287978197",
    appId: "1:517287978197:web:4b42be688ff75432662e5c"
  };

class Firebase {
    constructor(){
        app.initializeApp(config)
    }
}

export default Firebase;