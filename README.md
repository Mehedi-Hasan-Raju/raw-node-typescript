Building Server with Raw Node-js & Typescript
# 🚀 Raw Node.js + TypeScript REST API

A lightweight REST API built using **Raw Node.js** and **TypeScript** without using any frameworks like Express.js. This project demonstrates how to build a clean and structured backend from scratch while understanding the core concepts of Node.js.

---

## 📌 Features

- ✅ Build a server using Raw Node.js
- ✅ TypeScript support
- ✅ Environment-based configuration
- ✅ Custom API routing system
- ✅ Handle HTTP methods:
  - GET
  - POST
  - PUT
- ✅ Custom Route Handler
- ✅ Custom `sendJson()` helper
- ✅ Request body parsing (`parseBody`)
- ✅ Clean and modular project structure
- ✅ Dynamic route handling
- ✅ Fake JSON database for data storage
- ✅ Build a clean REST API without Express.js

---

## 🛠️ Technologies Used

- Node.js
- TypeScript
- ts-node
- dotenv
- File System (fs)

---

## 📂 Project Structure

```
src/
│
├── config/          # Environment configuration
├── helpers/         # Helper functions (sendJson, parseBody)
├── routes/          # API routes
├── handlers/        # Route handlers
├── database/        # Fake JSON database
├── types/           # TypeScript types
├── utils/           # Utility functions
└── server.ts        # Entry point
```

---

## 📖 What I Learned

During this project, I learned how to:

- Build an HTTP server using Raw Node.js
- Configure environment variables
- Create a custom routing system
- Handle GET, POST, and PUT requests
- Parse incoming request bodies manually
- Send JSON responses using a reusable helper
- Implement dynamic routes
- Store data using a fake JSON database
- Organize a backend project with a clean architecture
- Work with TypeScript in a Node.js environment

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/raw-node-typescript.git
```

### Install dependencies

```bash
npm install
```

### Configure Environment

Create a `.env` file:

```env
PORT=5000
NODE_ENV=development
```

### Run the project

```bash
npm run dev
```

The server will start on:

```
http://localhost:5000
```

---

## 📌 Example API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get a single user |
| POST | `/users` | Create a user |
| PUT | `/users/:id` | Update a user |

> Replace the endpoints above if your project uses different routes.

---

## 🎯 Future Improvements

- DELETE API
- Request validation
- Error handling middleware
- UUID support
- Logging
- Unit testing
- File-based database improvements
- Authentication (JWT)

---

## 📸 Project Goal

The main goal of this project is to understand how backend frameworks like Express.js work internally by implementing the core functionality manually using Raw Node.js and TypeScript.

---

## 👨‍💻 Author

**Sheikh Raju**

- GitHub: https://github.com/Mehedi-Hasan-Raju

---

## ⭐ If you found this project helpful

Give this repository a ⭐ on GitHub to support the project!
