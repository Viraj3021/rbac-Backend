# RBAC Backend

This project is a Role-Based Access Control (RBAC) backend system designed to manage user roles, permissions, and secure access to API endpoints.

## Introduction

The RBAC backend system enables the implementation of role-based access control for users. It allows system administrators to define roles, manage permissions, and securely authenticate users. The system provides flexible API endpoints for user authentication and authorization, as well as role and permission management.

## Features

- **User Authentication and Authorization**: Secure login and token-based authentication.
- **Role Management**: Create, update, and assign roles to users.
- **Permission Management**: Define and manage permissions for different roles.
- **Secure API Endpoints**: Protect API routes with role-based access controls.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/rbac-backend.git

## Navigate to the project directory:
```bash 
   cd rbac-backend
```


## Install the dependencies:
```bash 
   npm install
```

## Setting up JWT_SECRET


### To configure the JWT_SECRET for both the User and Admin backends, follow these steps:

### Check the .env files: Open both the user-backend and admin-backend services.

### Ensure that the JWT_SECRET variables in the .env files for both services are empty.

## Example:
 
 -  JWT_SECRET=Generated_JWT_SECRET key with follow this steps..
  

## Run the Setup Script: Run the following command to generate the JWT_SECRET for both services:
```bash
   npm run setup
```

### This script will automatically generate a secure secret key and populate the JWT_SECRET environment variable in both .env files of the user-backend and admin-backend services.

## Verify the .env Files: After running the setup script, check both .env files to ensure that the JWT_SECRET is now populated with a generated value.

## Example:
### Admin .env file

- PORT=3002
- MONGO_URI=
- USER_BACKEND_URL=
- JWT_SECRET=

### User .env file

- PORT=3001
- MONGO_URI=
- JWT_SECRET=

```bash
JWT_SECRET=your-generated-secret-key
````

## Image

![Alt text]( https://github.com/Viraj3021/rbac-Backend/blob/master/Screenshot%201.png)
![Alt text]( https://github.com/Viraj3021/rbac-Backend/blob/master/Screenshot%202.png)
![Alt text]( https://github.com/Viraj3021/rbac-Backend/blob/master/Screenshot%203.png)





### Proceed with running the services: After setting up the secret, you can start both the user-backend and admin-backend services with the proper JWT secret in place to authenticate and authorize users. 

## Usage
****After completing the setup, the JWT_SECRET will be automatically inserted into both .env files of the user-backend and admin-backend services. You can now proceed to run the services and test the functionality. ****
