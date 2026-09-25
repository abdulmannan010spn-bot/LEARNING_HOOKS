<div align="center">

# 👋 Welcome Form App

A minimal React app with a simple, styled form built using Tailwind CSS. It renders a centered card containing a name input and a submit button.

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-as--is-lightgrey)

</div>

---

## 🎮 Overview

Welcome Form App is a small, single-purpose React component: a dark-themed, centered card with a name input and a submit button. It's a lightweight starting point for form handling patterns — controlled inputs, submission logic, and reset behavior — without any extra dependencies.

## ✨ Features

- 🖊️ Controlled input field for entering a name
- 📨 Form submission handler that logs the submitted value to the console
- 🔄 Input clears automatically after submission
- 📱 Responsive, centered layout with a dark theme
- 💫 Hover and focus animations on the input and button

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/welcome-form-app.git

# Navigate into the project directory
cd welcome-form-app

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The optimized build output will be in the `dist/` folder.

## 📁 Project Structure

```
├── App.jsx        # Main component with the form UI and logic
├── App.css        # Component-specific styles (currently empty)
├── index.css      # Global styles / Tailwind import
└── main.jsx       # App entry point, mounts React to the DOM
```

## 🧠 Usage

1. Type a name into the input field.
2. Click **Submit** (or press Enter).
3. The submitted name is logged to the browser console, and the input field resets.

## 🛠️ Tech Stack

| Layer      | Technology                                         |
|------------|-------------------------------------------------------|
| Framework  | React (functional component + `useState` hook)       |
| Styling    | Tailwind CSS (utility-first)                          |
| Build Tool | Vite *(implied by `main.jsx` entry point and `.jsx` file structure)* |

## 🐛 Known Issues / Notes

A few small bugs and typos exist in the current code that you may want to fix:

- [ ] `flex flex-c0l` in `App.jsx` should be `flex flex-col` (typo with a zero instead of the letter "o")
- [ ] `sumbitHandler` is misspelled — consider renaming to `submitHandler`
- [ ] `settitle` should ideally be `setTitle` to follow standard camelCase naming conventions
- [ ] `type="text "` has a trailing space inside the quotes
- [ ] `text-2l` on the button is not a valid Tailwind class (should likely be `text-2xl` or `text-lg`)
- [ ] `ro rounded-lg` on the button contains a stray `ro` class fragment
- [ ] `App.css` is currently empty and unused since styling is handled via Tailwind utility classes

## 🗺️ Possible Improvements

- [ ] Fix the bugs and typos listed above
- [ ] Add form validation (e.g. required field, min length)
- [ ] Replace `console.log` with an actual submission action (API call, state update, etc.)
- [ ] Add a success message or confirmation UI after submission
- [ ] Remove the unused `App.css` file or move Tailwind overrides into it

## 🤝 Contributing

This is a small practice/starter project, but suggestions and pull requests are welcome.

## 📄 License

This project is provided as-is for personal or educational use.

---

<div align="center">
Made with 👋 and React
</div>
