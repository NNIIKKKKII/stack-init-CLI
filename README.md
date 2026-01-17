# 🚀 stack-init

**A blazingly fast command-line utility that automates full-stack web application setup**

Tired of repeatedly configuring React + Tailwind CSS frontends and Node.js + Express backends? **stack-init** does it all in one command.



## 📋 Table of Contents

- [Problem Statement]
- [What stack-init Does]
- [Installation & Usage]
- [Running the Generated Project]
- [Project Structure]
- [Design Decisions]
- [Demo Video]
- [Contributing]
- [License]


## 🎯 Problem Statement

Starting a new full-stack project involves the same tedious setup every time:

- ✅ Creating a React project
- ✅ Installing and configuring Tailwind CSS
- ✅ Initializing a Node.js backend
- ✅ Installing common backend dependencies
- ✅ Creating a consistent folder structure

This manual process is **time-consuming**, **repetitive**, and **error-prone**.

**stack-init** solves this by automating the entire setup with a single command.

---

## ✨ What stack-init Does

With one command, the utility:

- 🎨 Creates a **React frontend** using Vite
- 🌈 Configures **Tailwind CSS** automatically
- ⚡ Creates a **Node.js + Express backend**
- 📦 Installs common backend dependencies
- 🗂️ Generates a clean, scalable folder structure

---

## 🛠️ Installation & Usage

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm**

### Running the CLI Tool

From the `stack-init` directory:

```bash
node index.js my-app
```

This creates a new folder named `my-app` with both frontend and backend fully configured.

### Global Installation (Optional)

You can also link the CLI globally:

```bash
npm link
stack-init my-app
```

---

## 🏃 Running the Generated Project

### Backend Server

```bash
cd my-app/backend
npm run dev
```

**Backend runs on:** `http://localhost:5000`

### Frontend Development Server

```bash
cd my-app/frontend
npm run dev
```

**Frontend runs on:** `http://localhost:5173`

---

## 📁 Project Structure

```
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
    ├── tailwind.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        ├── components/
        ├── api/
        └── pages/
```

**Clean. Modular. Production-ready.**

---

## 🧠 Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Node.js** | Well-suited for building CLI tools with excellent file system support |
| **Standard Libraries Only** | Uses only `fs`, `path`, and `child_process` for maximum compatibility |
| **Modular Backend** | Separates concerns (routes, controllers, middleware) for scalability |
| **Vite + Tailwind** | Fast development experience with utility-first styling |
| **Convention over Configuration** | Focuses on automation and consistency rather than excessive options |

---

## 🎬 Demo Video

Watch a quick demonstration showing:

- ❌ The problem with manual setup
- ⚡ How the CLI works
- 📂 The generated project structure
- 🎨 Key design decisions

**🔗 [Watch on YouTube](#)** *(add your unlisted video link here)*

---

## 🎉 Sample Output

```
✔ Created project: my-app
✔ Backend initialized
✔ Frontend initialized

🎉 stack-init completed successfully!

Next steps:
  cd my-app/backend && npm run dev
  cd my-app/frontend && npm run dev
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests

---

## 📄 License

MIT License - feel free to use this in your own projects!

---

## 🌟 Why stack-init?

**stack-init** reduces repetitive setup work, ensures consistent project structure, and allows developers to focus on building features instead of configuration.

**Stop configuring. Start building.**

---

Made with ❤️ by developers, for developers.
