# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

✨





# 🚀 React Performance Optimization Training 

A hands-on React project demonstrating real-world performance optimization techniques.








## 📖 Overview

This project showcases how to optimize React applications using modern best practices and built-in hooks.

It demonstrates:

- ⚡ Preventing unnecessary re-renders

- 🧠 Memoizing expensive calculations

- 🔁 Stabilizing function references

- 📦 Code splitting with lazy loading

- 🎯 Efficient state updates

## 🛠️ Tech Stack

- React (Functional Components)

- React Hooks

- JavaScript (ES6+)

- CSS3
  
## 📂 Project Structure

src
│
├── Components
│   ├── Header.js
│   ├── ProductCard.js
│   ├── ProductList.js
│   └── SlowComponent.js
│
├── Pages
│   ├── Home.js
│   ├── About.js
│   └── Dashboard.js
│
├── App.js
├── App.css
└── index.js

## 🧠 Performance Optimization Techniques
### 1️⃣ React.memo

Used in ProductCard

- Prevents component re-render if props don’t change

- Improves rendering efficiency in lists

 ### 2️⃣ useCallback

Used in ProductList

- Prevents recreation of functions on every render

- Keeps stable function reference for memoized components

###3️⃣ useMemo

Used in SlowComponent

- Memoizes expensive calculations

- Recalculates only when dependencies change

### 4️⃣ Lazy Loading (Code Splitting)

Used in App.js

- Components loaded only when required

- Reduces initial bundle size

- Improves application startup time

## 🎯 Key Features

- 🛒 Cart counter with optimized updates

- 🐢 Simulated heavy computation with memoization

- 📦 Dynamic component loading

- 🎨 Clean and colorful UI

- 🔍 Console-based render tracking


 ## 🚀 Getting Started
### 1️⃣ Clone the repository
git clone https://github.com/your-username/react-performance-optimization.git

### 2️⃣ Navigate into the project
cd react-performance-optimization

### 3️⃣ Install dependencies
npm install

### 4️⃣ Start the development server
npm start


#### Application will run at:

http://localhost:3000

## 📊 What You’ll Learn

- How React rendering works internally

- When and why components re-render

- How to control rendering behavior

- Practical usage of memoization hooks

- Real-world optimization strategies

## 🏆 Ideal For

- React beginners learning performance optimization

- Developers preparing for interviews

- Students attending React training sessions

- Anyone wanting to write efficient React code

## 📌 Future Improvements

- Add React Profiler demonstration

- Add performance comparison (Before vs After)

- Convert to TypeScript version

- Add unit tests

  ## 📜 License

This project is licensed under the MIT License.

## Output
<img width="1911" height="913" alt="Screenshot 2026-02-18 203025" src="https://github.com/user-attachments/assets/c36bca59-65f6-493d-9206-096505875e37" />
