# Admin Backend

This project handles user authentication, authorization, and note management for the RBAC system.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Introduction
Manages user accounts and authentication and notes admin operations with secure API endpoints and JWT required for all routes.

## Features
- **Admin Login**: Secure registration and token-based authentication.
- **Note Management**: CRUD operations on notes.
- **Admin Access Control**: Protect routes with role-based access.

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

## JWT Token Required for all Routes..

## API Endpoints
- **Admin Login**: `POST [/auth/login](http://localhost:3002/auth/login)`
- **Get All Users**: `GET [/admin/users](http://localhost:3002/admin/users)`
- **Get User by ID**: `GET [/admin/users/:id](http://localhost:3002/admin/users/679349d6f1cd5702b362f9aa)`
- **Delete User**: `DELETE [/admin/users/:id](http://localhost:3002/admin/users/6793cc3dec39a3a3ffa6a11b)`
- **Get Notes from User Backend**: `GET [/admin/notes](http://localhost:3002/admin/notes/)`


