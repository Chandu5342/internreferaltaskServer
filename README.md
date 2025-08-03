# 🛠️ Referral Task Backend API

This is the **Node.js + Express** backend server for the Referral Task project. It handles authentication, user management, and donation tracking.

---

## 🌐 Live Backend URL

**Base URL**:  
👉 `https://internreferaltaskserver-1.onrender.com/api`

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- bcryptjs
- CORS

---

## 📁 Project Structure

server/
├── Controller/
│ └── authController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ └── User.js
├── routes/
│ ├── authRoutes.js
│ └── donationRoutes.js
├── config/
│ └── db.js
├── .env
└── index.js


---

## 🔐 API Endpoints

### 📌 Auth Routes `/api/auth`

| Method | Endpoint     | Description            |
|--------|--------------|------------------------|
| POST   | `/signup`    | Register a new user    |
| POST   | `/login`     | Login and get token    |
| GET    | `/me`        | Get current user info (protected) |

### 🎁 Donation Routes `/api/donations`

| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| GET    | `/total`       | Get total donations     |


---
## 🚀 Deployment on Render

You can deploy this backend to **Render**


Let me know if you want to update this with your actual GitHub repo links or customize your karrichandu309@gmail.com




