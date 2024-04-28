import { getApp, getApps, initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAuzLeS2Yi15AN_Yoe9DZhmFI98P7FsIoo",
    authDomain: "audio-spoofing-sample-dataset.firebaseapp.com",
    projectId: "audio-spoofing-sample-dataset",
    storageBucket: "audio-spoofing-sample-dataset.appspot.com",
    messagingSenderId: "336593066930",
    appId: "1:336593066930:web:b07320bad921906772e2ab"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig); // this is called singleton pattern
{/*Singleton pattern restricts the instantiation 
of a class and ensures that only one instance of 
the class exists in the Java Virtual Machine */}
const storage = getStorage(app);

export {storage}