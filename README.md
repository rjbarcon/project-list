# Project Listing Application

- An application where you can add, view, edit, and delete a list of projects

---

### The frontend was deployed to Vercel (hosting service)

#### LIVE WEBSITE LINK: **https://project-list-chi.vercel.app/**

- Note that auth0 will prompt immediately once you enter the website
- Note that I tried to deploy the frontend with docker but there's an error connecting the nextjs to the backend (probably some issue with the container)

### The backend was deployed to Render (hosting service) with dockerhub

- **Dockerhub** - https://hub.docker.com/r/rjbarcon/project-list-backend
- **API Endpoint (Secured)** - https://project-list-backend-u45p.onrender.com/api/projects

## Preview (Screenshots)

### Light Mode

![image](https://github.com/user-attachments/assets/32f8c2e4-d421-4436-b910-425b43fb2ab1)

### Dark Mode

![image](https://github.com/user-attachments/assets/b51d5f72-e37f-4722-8a44-48a491e7d352)

### Query by name

![image](https://github.com/user-attachments/assets/2e261c21-2cc1-410d-9269-f307df1f2385)

### Query by id

![image](https://github.com/user-attachments/assets/68ae2907-0284-4a10-825c-4f09ec371b91)

### Responsiveness/Media Query

| Tablet                                                                                    | Mobile                                                                                    |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![image](https://github.com/user-attachments/assets/0433197d-80e2-47c0-97e6-0ff40267ebca) | ![image](https://github.com/user-attachments/assets/5c46be4e-1146-4b1f-85b9-12148f510f56) |

### Live Backend Implementation

![image](https://github.com/user-attachments/assets/e6390830-e3f0-4257-804d-60b8ed757773)

### Auth0 (frontend)

![image](https://github.com/user-attachments/assets/20b9e696-f9f3-4a62-99a7-e1e2565e6616)

### PostgreSQL (NeonDB)

![image](https://github.com/user-attachments/assets/bd7b42cb-ff8f-4ba0-abb0-0f720cc03a48)

## Overview

The Project List application is a full-stack web application designed to help you manage your projects. It allows you to:

**Deployed:**

- **View:** See a list of all projects.
- **Filter by id:** You can filter by id via search bar
- **Filter by name:** You can filter by name via search bar
- **Light & Dark mode:** You can toggle light/dark mode

**Backlogs:**

- **Create:** Add new projects with details like name, description, and status.
- **Edit:** Modify existing project details.
- **Delete:** Remove projects you no longer need.

## Technologies Used

- **Frontend:** Nextjs v15 (Used client components only)
- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL v17 (Used neon on deployment)
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
    AUTH0_AUDIENCE=<CONTACT_RONNIE_FOR_THE_KEYS>
    AUTH0_ISSUER_BASE_URL=<CONTACT_RONNIE_FOR_THE_KEYS>
    PORT=3500
    POSTGRESQL_CONNECTION_STRING=<CONTACT_RONNIE_FOR_THE_KEYS>
    PORT=3500
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

## License

This is free to use and you can explore how I integrate both the frontend and the backend.
