# 🗓️ React Calendar App

This is a calendar web app built using **React**, **Tailwind CSS**, and **Day.js**. It displays a calendar UI similar to Google Calendar, allows navigation by month, highlights today’s date, and shows events from a static JSON file.

Live Demo 👉 [https://Abhishek23456.github.io/calendar-app](https://Abhishek23456.github.io/calendar-app)

---

## 🚀 Getting Started

These instructions will get your project running locally and deployed to GitHub Pages.

### 🛠️ Prerequisites

- Node.js & npm installed
- GitHub account
- A public GitHub repo (e.g., `calendar-app`)

---

## 📦 Available Scripts

### `npm install`
Installs all dependencies.

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser.

### `npm run build`
Builds the app for production to the `build/` folder.

### `npm run deploy`
Builds the app and deploys it to GitHub Pages.

---

## 🌐 Deployment

To deploy this app on GitHub Pages:

1. Make sure `package.json` contains:
   ```json
   "homepage": "https://<your-username>.github.io/calendar-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
