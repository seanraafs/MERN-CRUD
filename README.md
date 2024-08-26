
# CRUDMERN

## Project Description

CRUDMERN is a web-based application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). This project includes CRUD (Create, Read, Update, Delete) functionality and can be used as a foundation for developing other web applications.

## Project Structure

```
CRUDMERN/
│
├── backend/                 # Backend source code
│   ├── controllers/         # API control logic
│   ├── middleware/          # Express middleware
│   ├── models/              # Mongoose models for MongoDB
│   ├── routes/              # API route definitions
│   ├── .env                 # Environment configuration file
│   ├── index.js             # Backend application entry point
│   ├── package.json         # Dependencies and scripts for backend
│   └── request.rest         # API request samples
│
├── frontend/                # Frontend source code
│   ├── public/              # Static files and basic HTML
│   ├── src/                 # React source code
│   ├── .gitignore           # Git ignore file list
│   ├── eslint.config.js     # ESLint configuration for frontend code
│   ├── index.html           # Main HTML file
│   ├── package.json         # Dependencies and scripts for frontend
│   └── vite.config.js       # Configuration for Vite (frontend build tool)
│
└── README.md                # Project documentation
```

## Technologies Used

- **Frontend**: React.js, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Linting**: ESLint

## Features

- [x] CRUD operations (Create, Read, Update, Delete)
- [x] Server-side and client-side data validation
- [x] RESTful API responses

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/seanraafs/MERN-CRUD.git
   cd MERN-CRUD
   ```

2. **Install dependencies for the backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for the frontend:**

   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Run the backend server:**

   ```bash
   cd backend
   npm start
   ```

2. **Run the frontend application:**

   ```bash
   cd ../frontend
   npm run dev
   ```

The application will run on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.


## Contact

If you have any questions or issues, feel free to contact me via [seanraafs@gmail.com].

---
