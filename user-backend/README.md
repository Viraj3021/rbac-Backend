# User Backend

This project handles user authentication, authorization, and note management for the RBAC system.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction
Manages user accounts, authentication, and note operations with secure API endpoints.

## Features
- **User Registration and Login**: Secure registration and token-based authentication.
- **Note Management**: CRUD operations on notes.
- **Role-Based Access Control**: Protect routes with role-based access.

## Installation

1. Navigate to the user-backend directory:
    ```bash
    cd rbac-backend/user-backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables in `.env`:
    ```
    PORT=3001
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:
    ```bash
    npm run dev
    ```

## Usage
Use the following API endpoints to interact with the service.

## API Endpoints
# Authentication User Routes 
- **User Registration**: `POST http://localhost:3001/auth/register`
- **User Login**: `POST http://localhost:3001/auth/login`
# User Routes   
- **Get Notes**: `GET http://localhost:3001/notes`
- **Create Note**: `POST /notes/create`
- **Update Note**: `PATCH /notes/:id`
- **Delete Note**: `DELETE /notes/:id`


