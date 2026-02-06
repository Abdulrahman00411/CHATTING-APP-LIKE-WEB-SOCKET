# Chatting App Like WebSocket 💬

This is a **simple real-time chat application** built using **Node.js**, **Express**, and **Socket.IO**.  
Messages sent by one user instantly appear for all connected users — just like in many modern chat apps.

This project is from the GitHub repo:
https://github.com/Abdulrahman00411/CHATTING-APP-LIKE-WEB-SOCKET

---

## 📌 Features

✔ Real-time chat between users  
✔ Messages broadcast to all connected clients instantly  
✔ Very easy and beginner-friendly code

---

## 📦 Technologies Used

- Node.js
- Express.js
- Socket.IO
- HTML & JavaScript

---

## 🗂 Project Structure

CHATTING-APP-LIKE-WEB-SOCKET/
├── index.js # Server code using Express + Socket.IO
├── index.html # Chat UI (frontend)
├── package.json # Dependencies
├── package-lock.json
└── .gitignore


---

## 🚀 Installation

1. **Clone the repo**
```bash
git clone https://github.com/Abdulrahman00411/CHATTING-APP-LIKE-WEB-SOCKET.git
cd CHATTING-APP-LIKE-WEB-SOCKET
Install dependencies

npm install
▶️ Run the App
Start the server:

node index.js
Open your browser and go to:

http://localhost:3000
Open multiple browser tabs to test real-time chatting.

💡 How It Works (Simple)
Server (index.js) uses Socket.IO to listen and broadcast messages.

Client (index.html) connects using socket.io client script.

When a user sends a message:

The browser sends it to the server

Server sends it back to all connected clients

Everyone sees the message immediately

📌 Notes
✔ You can run this locally
✔ Works without refreshing the page
✔ Great for learning real-time communication

📖 Reference
Official Socket.IO Chat Tutorial:
https://socket.io/get-started/chat

👨‍💻 Author
Project by Abdulrahman00411
(Simple web chat using WebSocket / Socket.IO)

