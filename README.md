# Lab 9 - Web Engineering (Full Stack Project)

This project is developed as part of **Lab 9** for the Web Engineering course.  
It demonstrates a complete **Full Stack Application** using:

- **Frontend:** React.js  
- **Backend:** Node.js (Express)  
- **Database:** MySQL  

---

## Project Structure


- **backend** → Express server with API and MySQL integration  
- **frontend** → React app with UI and API integration  

---

## Features Implemented (Practice Questions)

The following scenario-based requirements are fully implemented:

### 1. Phone Number Field
- Added `phone` field in:
  - Database (MySQL)
  - Backend API
  - Frontend form

### 2. Prevent Duplicate Email
- Backend checks if email already exists before inserting
- Returns message if duplicate found

### 3. Search Filter
- Users can search by name
- Implemented using query parameter:




### 5. Login System
- Basic login API implemented
- Validates email and password from database

---

## Database Setup

Run the SQL file in MySQL:

```sql
CREATE DATABASE lab_db;
USE lab_db;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100) UNIQUE,
phone VARCHAR(20),
password VARCHAR(100)
);
