import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyBP37acJYZ5Q9zxEc0s34mq23ivi-4Sh5M",
  authDomain: "mess-menu-project.firebaseapp.com",
  projectId: "mess-menu-project",
  storageBucket: "mess-menu-project.firebasestorage.app",
  messagingSenderId: "459558920293",
  appId: "1:459558920293:web:100cc73c6ce2a8a1ea268c",
  measurementId: "G-KH7XLCCPHD"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function getAllMenus() {
  const querySnapshot = await getDocs(collection(db, "menus"))

  const allMenus = {}
  querySnapshot.forEach(doc => {
    allMenus[doc.id] = doc.data()
  })

  if (Object.keys(allMenus).length > 0) {
    return allMenus
  } else {
    console.log("❌ No menus found.")
    return null
  }
}