#!/usr/bin/env node
// console.log("🔥 NEW STACK-INIT VERSION RUNNING");

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

/* -------------------- ESM __dirname FIX -------------------- */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -------------------- INPUT VALIDATION -------------------- */

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Error: Project name is required.");
  console.error("Usage: stack-init <project-name>");
  process.exit(1);
}

const rootPath = path.join(process.cwd(), projectName);

if (fs.existsSync(rootPath)) {
  console.error("❌ Error: Folder already exists.");
  process.exit(1);
}

/* -------------------- CREATE ROOT -------------------- */

fs.mkdirSync(rootPath);
console.log(`✔ Created project: ${projectName}`);

/* -------------------- BACKEND SETUP -------------------- */

const backendPath = path.join(rootPath, "backend");
const backendSrcPath = path.join(backendPath, "src");

fs.mkdirSync(backendPath);
fs.mkdirSync(backendSrcPath);

[
  "config",
  "model",
  "data",
  "routes",
  "middleware",
  "controller",
].forEach((dir) =>
  fs.mkdirSync(path.join(backendSrcPath, dir))
);

/* ---------- backend package.json (ESM) ---------- */

execSync("npm init -y", { cwd: backendPath, stdio: "ignore" });

const backendPkgPath = path.join(backendPath, "package.json");
const backendPkg = JSON.parse(fs.readFileSync(backendPkgPath, "utf-8"));

backendPkg.type = "module";
backendPkg.scripts = {
  start: "node src/index.js",
  dev: "nodemon src/index.js",
};

fs.writeFileSync(
  backendPkgPath,
  JSON.stringify(backendPkg, null, 2)
);

/* ---------- install backend deps ---------- */

execSync(
  "npm install express dotenv cors nodemon",
  { cwd: backendPath, stdio: "inherit" }
);

/* ---------- backend src/index.js ---------- */

const backendIndex = `
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`;

fs.writeFileSync(
  path.join(backendSrcPath, "index.js"),
  backendIndex.trim()
);

console.log("✔ Backend initialized (ESM)");

/* -------------------- FRONTEND (VITE + REACT) -------------------- */

execSync("npm create vite@latest frontend -- --template react", {
  cwd: rootPath,
  stdio: "inherit",
});

const frontendPath = path.join(rootPath, "frontend");
const frontendSrcPath = path.join(frontendPath, "src");

execSync("npm install", {
  cwd: frontendPath,
  stdio: "inherit",
});

/* -------------------- TAILWIND SETUP -------------------- */

const viteConfigPathJs = path.join(frontendPath, "vite.config.js");
const viteConfigPathTs = path.join(frontendPath, "vite.config.ts");

const viteConfigContent = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
`;

if (fs.existsSync(viteConfigPathJs)) {
  fs.writeFileSync(viteConfigPathJs, viteConfigContent.trim());
} else if (fs.existsSync(viteConfigPathTs)) {
  fs.writeFileSync(viteConfigPathTs, viteConfigContent.trim());
} else {
  console.error("❌ Vite config file not found");
}

/* -------------------- FRONTEND (VITE + REACT + TAILWIND) -------------------- */

// 1️⃣ Create Vite app
execSync("npm create vite@latest frontend -- --template react", {
    cwd: rootPath,
    stdio: "inherit",
  });
  
//   const frontendPath = path.join(rootPath, "frontend");
//   const frontendSrcPath = path.join(frontendPath, "src");
  
  // 2️⃣ Install Vite dependencies
  execSync("npm install", {
    cwd: frontendPath,
    stdio: "inherit",
  });
  
  // 3️⃣ Install Tailwind + Vite plugin
  execSync("npm install tailwindcss @tailwindcss/vite", {
    cwd: frontendPath,
    stdio: "inherit",
  });
  
  // 4️⃣ FORCE overwrite vite.config.js
  const viteConfigPath = path.join(frontendPath, "vite.config.js");
  
  const viteConfig = `
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from '@tailwindcss/vite'
  
  export default defineConfig({
    plugins: [
      react(),
      tailwindcss(),
    ],
  })
  `;
  
  fs.writeFileSync(viteConfigPath, viteConfig.trim(), { flag: "w" });
  
  // 5️⃣ FORCE overwrite index.css
  const indexCssPath = path.join(frontendSrcPath, "index.css");
  
  const indexCss = `
  @import "tailwindcss";
  `;
  
  fs.writeFileSync(indexCssPath, indexCss.trim(), { flag: "w" });
  
  // 6️⃣ Create folders
  ["components", "api", "pages"].forEach((dir) =>
    fs.mkdirSync(path.join(frontendSrcPath, dir), { recursive: true })
  );
  
  // 7️⃣ FORCE overwrite main.jsx
  const mainJsx = `
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import App from './app'
  import './index.css'
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  `;
  
  fs.writeFileSync(
    path.join(frontendSrcPath, "main.jsx"),
    mainJsx.trim(),
    { flag: "w" }
  );
  
  // 8️⃣ FORCE overwrite app.jsx
  const appJsx = `
  function App() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold underline text-blue-600">
          Tailwind is working
        </h1>
      </div>
    )
  }
  
  export default App
  `;
  
  fs.writeFileSync(
    path.join(frontendSrcPath, "app.jsx"),
    appJsx.trim(),
    { flag: "w" }
  );
  
  console.log("✔ Frontend initialized with Tailwind");
  
/* -------------------- DONE -------------------- */

console.log("\n🎉 stack-init completed successfully!\n");
console.log("Next steps:");
console.log(`cd ${projectName}/backend && npm run dev`);
console.log(`cd ${projectName}/frontend && npm run dev`);
