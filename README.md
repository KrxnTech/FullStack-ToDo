# Full Stack Task Manager (To-Do Application)

A Full Stack Task Manager application built to understand frontend–backend communication, REST API design, and database integration.

This project demonstrates complete CRUD operations using React, Node.js, Express, and SQL.

---

## Overview

This application allows users to:

* Create tasks
* View all tasks
* Mark tasks as completed
* Delete tasks

It follows a standard REST architecture where the frontend communicates with the backend via HTTP requests, and the backend interacts with a relational SQL database.

---

## Tech Stack

**Frontend**

* React
* Vite
* CSS

**Backend**

* Node.js
* Express.js

**Database**

* SQL (Relational Database)

---

## Project Structure

```
FullStack-ToDo/
│
├── task-manager-backend/
│   ├── server.js
│   ├── Schema.sql
│   ├── package.json
│
├── task-manager-frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │
│   ├── package.json
│
└── README.md
```

---

## Application Architecture

The application follows a standard client–server model:

1. The React frontend sends HTTP requests.
2. Express handles routing and business logic.
3. The backend connects to the SQL database.
4. The database returns data to the server.
5. The server responds with JSON.
6. The frontend updates the UI dynamically.

Flow:

```
React (Frontend)
        ↓
HTTP Request (Fetch/Axios)
        ↓
Express Server (Backend)
        ↓
SQL Database
        ↓
JSON Response
        ↓
UI Update
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/FullStack-ToDo.git
cd FullStack-ToDo
```

---

## Backend Setup

Navigate to backend directory:

```bash
cd task-manager-backend
```

Install dependencies:

```bash
npm install
```

Set up the database:

* Create a new database in your SQL environment.
* Execute the `Schema.sql` file to create required tables.

Start the backend server:

```bash
node server.js
```

The backend will run on:

```
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend directory:

```bash
cd task-manager-frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| GET    | /tasks     | Retrieve all tasks |
| POST   | /tasks     | Create a new task  |
| PUT    | /tasks/:id | Update a task      |
| DELETE | /tasks/:id | Delete a task      |

---

## Key Learnings

* Building and consuming REST APIs
* Connecting Node.js with SQL databases
* Structuring a full stack application
* Implementing CRUD operations
* Managing state and API integration in React

---

## Future Improvements

* Authentication and authorization
* Environment variable configuration
* Deployment setup
* Improved UI/UX
* Filtering and sorting functionality
* Error handling and validation improvements

---

## Author

Krishna
Computer Science Student | Full Stack Developer
