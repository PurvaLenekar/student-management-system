# Student Management System

A simple full-stack web application to store and manage student records using MongoDB, Express.js, Node.js, and JavaScript.

---

# Features

- Add student records
- View all students
- Update student details
- Delete student records
- REST API integration
- MongoDB database connectivity

---

# Technologies Used

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

---

# Project Structure

student-management-system/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   │
│   ├── models/
│   │     └── Student.js
│   │
│   └── routes/
│         └── studentRoutes.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

---

# Installation Steps

## 1. Open Backend Folder

cd backend

---

## 2. Install Dependencies

npm install

---

## 3. Start Server

npm start

Server runs on:

http://localhost:5000

---

# MongoDB Setup

Install MongoDB locally OR use MongoDB Atlas.

Connection string used in:

backend/server.js

Example:

mongoose.connect("mongodb+srv://complete-backend:t1clO0Cf45PqS3Y1@cluster0.q5hy2cq.mongodb.net/students?retryWrites=true&w=majority")

---

# Frontend Setup

Open:

frontend/index.html

in browser.

---

# API Endpoints

## Create Student

POST /api/students

---

## Get All Students

GET /api/students

---

## Update Student

PUT /api/students/:id

---

## Delete Student

DELETE /api/students/:id

---

# CRUD Operations

- Create Student
- Read/View Student
- Update Student
- Delete Student

---

# Sample Student Data

Name: Purva  
Roll No: 101  
Course: Computer Engineering

---

# Future Improvements

- Student Login System
- Search Functionality
- Responsive Design
- Pagination
- Authentication

---

