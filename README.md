# Secure Registration Form using MERN Stack

## Overview
This project aims to provide a secure and seamless user registration experience using the MERN (MongoDB, Express.js, React, Node.js) stack. The Registration Form allows users to create an account and log in using their credentials, ensuring the highest standards of security through password hashing and thorough credential validation.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Folder Structure](#folder-structure)
5. [Environment Variables](#environment-variables)
6. [Dependencies](#dependencies)
7. [Security Measures](#security-measures)
8. [Contributing](#contributing)
9. [License](#license)

## Features
- User-friendly and interactive registration form built with React.
- Secure password hashing using the bcrypt module.
- Thorough validation of user credentials for reliability.
- JWT authentication for secure user authentication.
- MongoDB database for efficient storage and retrieval of user information.

## Installation
1. Clone the repository: `git clone https://github.com/gladwin2802/signup-login.git`
2. Navigate to the project directory: `cd signup-login`
3. Install dependencies: `npm install`
4. Edit the `.env` file with the required environment variables (check [Folder Structure](#folder-structure) and [Environment Variables](#environment-variables)).

## Usage
1. In cmd, change directory `cd <path>/signup-login/backend`
2. Start the backend server: `npm start`
3. In another cmd, change directory `cd <path>/signup-login/frontend` 
4. Start the frontend: `npm start`
5. Open the frontend in your browser: [http://localhost:3000](http://localhost:3000)

## Folder Structure
The project follows an industry-level folder structure to keep the code organized and maintain separation between different components.
<pre>
/signup-login
|-- <strong>/backend</strong>
    |-- <strong>/controllers</strong>
        |-- <strong>userController.js</strong>
    |-- <strong>/middleware</strong>
        |-- <strong>requireAuth.js</strong>
    |-- <strong>/models</strong>
        |-- <strong>userModel.js</strong>
    |-- <strong>/routes</strong>
        |-- <strong>user.js</strong>
    |-- <strong>.env</strong>
    |-- <strong>package-lock.json</strong>
    |-- <strong>package.json</strong>
    |-- <strong>server.js</strong>
|-- <strong>/frontend</strong>
    |-- <strong>/public</strong>
    |-- <strong>/src</strong>
        |-- <strong>/components</strong>
            |-- <strong>Navbar.js</strong>
        |-- <strong>/context</strong>
            |-- <strong>AuthContext.js</strong>
        |-- <strong>/hooks</strong>
            |-- <strong>useAuthContext.js</strong>
        |   |-- <strong>useLogin.js</strong>
            |-- <strong>useLogOut.js</strong>
        |   |-- <strong>useSignUp.js</strong>
        |-- <strong>/pages</strong>
            |-- <strong>Home.js</strong>
            |-- <strong>Login.js</strong>
            |-- <strong>SignUp.js</strong>
        |-- <strong>App.js</strong>
        |-- <strong>index.css</strong>
        |-- <strong>index.js</strong>
    |-- <strong>.gitignore</strong>
    |-- <strong>package-lock.json</strong>
    |-- <strong>package.json</strong>
|-- <strong>README.md</strong>
</pre>


## Environment Variables
Ensure to edit the `.env` file with the following variables:
```dotenv
PORT=5000
DB_URL=<atlas_mongodb_url>
SECRET='your_secret_key'
```
## Dependencies
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- validator

## Security Measures
- Passwords are securely hashed using the bcrypt module.
- JWT authentication ensures secure user authentication.
- Sensitive information is stored in a secure .env file.

## Contributing
Feel free to contribute to the project by opening issues or creating pull requests. Your input is highly valued!

## License
This project is licensed under the MIT License.


