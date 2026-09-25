# Welcome Form App

A minimal React app with a simple, styled form built using Tailwind CSS. It renders a centered card containing a name input and a submit button.

## Tech Stack

- **React** (functional component + `useState` hook)
- **Tailwind CSS** (utility-first styling)
- **Vite** (implied by `main.jsx` entry point and `.jsx` file structure)

## Project Structure

```
├── App.jsx        # Main component with the form UI and logic
├── App.css        # Component-specific styles (currently empty)
├── index.css      # Global styles / Tailwind import
└── main.jsx       # App entry point, mounts React to the DOM
```

## Features

- Controlled input field for entering a name
- Form submission handler that logs the submitted value to the console
- Input is cleared automatically after submission
- Responsive, centered layout with a dark theme
- Hover and focus animations on the input and button


## Usage

1. Type a name into the input field.
2. Click **Submit** (or press Enter).
3. The submitted name is logged to the browser console, and the input field resets.

## Known Issues / Notes

A few small bugs and typos exist in the current code that you may want to fix:

- `flex flex-c0l` in `App.jsx` should be `flex flex-col` (typo with a zero instead of the letter "o").
- `sumbitHandler` is misspelled — consider renaming to `submitHandler`.
- `settitle` should ideally be `setTitle` to follow standard camelCase naming conventions.
- `type="text "` has a trailing space inside the quotes.
- `text-2l` on the button is not a valid Tailwind class (should likely be `text-2xl` or `text-lg`).
- `ro rounded-lg` on the button contains a stray `ro` class fragment.
- `App.css` is currently empty and unused since styling is handled via Tailwind utility classes.

## License

This project is provided as-is for personal or educational use.
