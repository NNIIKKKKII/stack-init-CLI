stack-init

A small command-line utility that automates the setup of a full-stack web application with a React + Tailwind CSS frontend and a Node.js + Express backend.

1. Problem Statement

When starting a new full-stack project, I repeatedly perform the same setup steps:

Creating a React project

Installing and configuring Tailwind CSS

Initializing a Node.js backend

Installing common backend dependencies

Creating a consistent folder structure

This manual process is time-consuming, repetitive, and prone to configuration errors.
To solve this, I built stack-init, a command-line utility that automates the entire setup with a single command.

2. What stack-init Does

With one command, the utility:

Creates a React frontend using Vite

Configures Tailwind CSS

Creates a Node.js + Express backend

Installs common backend dependencies

Generates a clean, scalable folder structure

Generated Structure
my-app/
├── backend/
│   ├── package.json
│   └── src/
│       ├── index.js
│       ├── config/
│       ├── model/
│       ├── data/
│       ├── routes/
│       ├── middleware/
│       └── controller/
└── frontend/
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── app.jsx
        ├── main.jsx
        ├── index.css
        ├── components/
        ├── api/
        └── pages/

3. How to Run the Program
Prerequisites

Node.js (v18+ recommended)

npm

Running the CLI Tool

From the stack-init directory:

node index.js my-app


This command creates a new folder named my-app with both frontend and backend set up.

The utility can also be linked globally using npm, but running it directly with Node ensures compatibility across different systems.

4. Running the Generated Project
Backend
cd my-app/backend
npm run dev


The backend server runs on:

http://localhost:5000

Frontend
cd my-app/frontend
npm run dev


The frontend runs on:

http://localhost:5173

5. Design Decisions

Node.js was chosen because it is well-suited for building CLI tools.

Only standard Node.js libraries (fs, path, child_process) are used in the CLI logic.

The backend follows a modular structure to separate concerns.

The frontend uses Vite for fast development and Tailwind CSS for utility-first styling.

The utility focuses on automation and consistency, rather than providing many configuration options.

6. Sample Output
✔ Created project: my-app
✔ Backend initialized
✔ Frontend initialized
🎉 stack-init completed successfully!

7. Demo Video

A short demonstration video (3–5 minutes) is provided showing:

The problem with manual setup

How the CLI works

The generated project structure

Key design decisions

🔗 YouTube link: (add your unlisted video link here)

8. Conclusion

stack-init reduces repetitive setup work, ensures consistent project structure, and allows developers to focus on building features instead of configuration. It reflects a practical approach to automating real-world development workflows.
