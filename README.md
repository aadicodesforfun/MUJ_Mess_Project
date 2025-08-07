# 🥗 Manipal Mess Menu Viewer (MUJ)

This is a web-based menu viewing platform built for the **hostel students of Manipal University Jaipur**. The application allows students to view daily menu items for both hostel messes — **Bluedove** and **Bluespring** — and is designed to support future functionality where students can vote on the food served each day.

## 🚀 Features

✅ **Current Functionality:**
- View daily menu items for the past few days.
- Menus are displayed mess-wise and meal-wise (Breakfast, Lunch, Snacks, Dinner).
- Stylish and responsive UI with a blurred background for enhanced readability.

⏳ **Upcoming Features (Planned):**
- Daily voting system: Students will be able to vote on each dish.
- Authentication (optional): Restrict voting to one per student per day.
- Voting results dashboard.

## 🏢 Target Audience

- **Students residing in hostels at Manipal University Jaipur (MUJ)**
- Currently supports **two messes**: Bluedove and Bluespring.

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Database:** Firebase Firestore (for storing menus)
- **Hosting:** (TBD)

## 🗂️ Project Structure
📁 public/
├── index.html # Main web page
├── styles.css # All styling
├── script.js # JS logic for rendering menus
└── images/
└── bg.jpg # Background image

📁 database/
└── database.js # Firebase config and menu fetching logic
