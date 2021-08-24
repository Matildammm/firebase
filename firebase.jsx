import firebase from 'firebase';


    const Config = {
        apiKey: "AIzaSyDNXjoO1PuuTopsCxkrvt-QvZ2iK36W1VE",
        authDomain: "codetribe-66397.firebaseapp.com",
        projectId: "codetribe-66397",
        storageBucket: "codetribe-66397.appspot.com",
        messagingSenderId: "777098093689",
        appId: "1:777098093689:web:c43cf5c1a9e641295f60a8",
        measurementId: "G-P5J2K5YE7M"
      };
      // Initialize Firebase
      firebase.initializeApp(Config);
      firebase.analytics();


      export default firebase
    
