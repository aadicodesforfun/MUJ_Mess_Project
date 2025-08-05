// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getFirestore,
  doc,
  updateDoc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBP37acJYZ5Q9zxEc0s34mq23ivi-4Sh5M",
  authDomain: "mess-menu-project.firebaseapp.com",
  projectId: "mess-menu-project",
  storageBucket: "mess-menu-project.firebasestorage.app",
  messagingSenderId: "459558920293",
  appId: "1:459558920293:web:100cc73c6ce2a8a1ea268c",
  measurementId: "G-KH7XLCCPHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Items array
const items = [];

// Add item to list
document.getElementById("addItemBtn").addEventListener("click", function () {
  const itemInput = document.getElementById("itemInput");
  const itemName = itemInput.value.trim();
  if (itemName !== "") {
    items.push(itemName);

    const list = document.getElementById("itemsList");
    const div = document.createElement("div");
    div.classList.add("item");
    div.textContent = itemName;
    list.appendChild(div);

    itemInput.value = "";
  }
});

// Form submission
document.getElementById("menuForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const date = document.getElementById("date").value;
  const mess = document.getElementById("mess").value;
  const meal = document.getElementById("meal").value;

  if (!date || !mess || !meal || items.length === 0) {
    alert("Please fill all fields and add at least one item.");
    return;
  }

  console.log("Form Data Submitted:", { date, mess, meal, items });
  alert("Menu submitted successfully!");

  // Clone items and reset form
  const menuItems = [...items];
  items.length = 0;
  document.getElementById("menuForm").reset();
  document.getElementById("itemsList").innerHTML = "";

  // Upload to Firestore
  uploadMenu(date, meal, menuItems, mess);
});

// Upload to Firestore
async function uploadMenu(date, mealType, menuItems, mess) {
  const docRef = doc(db, "menus", date);

  try {
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      await updateDoc(docRef, {
        [`${mess}.${mealType}`]: menuItems
      });
    } else {
      await setDoc(docRef, {
        [mess]: {
          [mealType]: menuItems
        }
      });
    }

    console.log("Menu uploaded/updated successfully!");
  } catch (error) {
    console.error("Error uploading menu:", error);
  }
}
