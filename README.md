# Project List

An application where you can add, view, edit, and delete a list of projects.

## Overview

The Project List application is a full-stack web application designed to help you manage your projects. It allows you to:

- **View:** See a list of all your projects.
- **Create:** Add new projects with details like name, description, and status. _**CURRENTLY ON BACKLOG**_
- **Edit:** Modify existing project details. _**CURRENTLY ON BACKLOG**_
- **Delete:** Remove projects you no longer need. _**CURRENTLY ON BACKLOG**_

## Technologies Used

- **Frontend:** Nextjs v15 (Used client components only)
- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL v17
- **Other:** Auth0 (for authentication)

## Installation Instructions

This document outlines the installation process for both the frontend and backend components of the Project List application.

### Backend Installation (Node.js/Express)

1.  **Prerequisites:**

    - **Node.js:** Ensure you have Node.js (version 22.x or later recommended) installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).
    - **Database:** You'll need to set up a PostgreSQL database in your local machine
    - **Git:** You need to have git installed on your machine.

2.  **Clone the repository:**

    - Open your terminal or command prompt.
    - Use `git` to clone the project repository to your local machine. Replace `<repository_url>` with the actual URL of your project's Git repository.
    - Navigate into the backend directory.

    ```bash
    git clone <repository_url>
    cd project-list/backend
    ```

3.  **Install dependencies:**

    - Ensure you are in the `project-list/backend` directory.
    - Use `npm` to install the project's required packages.

    ```bash
    npm install
    ```

4.  **Environment Variables:**

    - Replace the `.env` file in the `project-list/backend` directory.
    - Add the following environment variables to the `.env` file, replacing the placeholders with your actual values:

    ```
    PORT=3500
    DATABASE_URL=<KINDLY_CONTACT_RONNIE_FOR_THE__KEYS>
    ```

5.  **Start the Backend Server:**

    - Run the following command to start the backend server:

    ```bash
    npm run start
    ```

    - This will typically start the server on `http://localhost:3500` (or the port you specified in the `.env` file).

**NOTES:**

- I deployed the backend to Sliplane (hosting service) via dockerhub (https://hub.docker.com/repository/docker/rjbarcon/project-list-backend/general)

### Frontend Installation

1.  **Navigate to the Frontend Directory:**

    ```bash
    cd project-list/frontend
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Variables:**

    - Add the following environment variables to the `.env` file, replacing the placeholders with your actual values:

    ```
      AUTH0_AUDIENCE=<GET_KEY_FROM_RONNIE>
      AUTH0_BASE_URL=<GET_KEY_FROM_RONNIE>
      AUTH0_CLIENT_ID=<GET_KEY_FROM_RONNIE>
      AUTH0_CLIENT_SECRET=<GET_KEY_FROM_RONNIE>
      AUTH0_ISSUER_BASE_URL=<GET_KEY_FROM_RONNIE>
      AUTH0_PROJECT_SCOPE=<GET_KEY_FROM_RONNIE>
      AUTH0_SECRET=<GET_KEY_FROM_RONNIE>
      NEXT_PUBLIC_API_ENDPOINT=<GET_KEY_FROM_RONNIE>
    ```

4.  **Start the Frontend Server:**

    ```bash
    npm start
    ```

    - This will start the server on `http://localhost:3000`.

## Usage


## License

This is free to use and you can explore how I integrate both the frontend and the backend.
