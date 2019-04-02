var firebase = require('firebase');


firebase.initializeApp({
    apiKey: "AIzaSyBUp4ijfSJeDKXLKMV8xdwrvUB5FcUF4hw",
    authDomain: "chatter-937f6.firebaseapp.com",
    databaseURL: "https://chatter-937f6.firebaseio.com",
    projectId: "chatter-937f6",
    storageBucket: "chatter-937f6.appspot.com",
    messagingSenderId: "170277978852"
});


export const onMessage = (data) => {
    return new Promise((res) => {
        return firebase.database().ref("Messages").push(data);
    });
};