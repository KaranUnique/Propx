
# PopX Landing Page

A modern React + Vite landing page and authentication flow for PopX, featuring:
- Landing page with call-to-action
- Signup and login forms with validation
- Profile settings page with user info and profile image
- Clean, responsive UI using custom CSS

## Features
- React 19 + Vite for fast development
- React Router v7 for navigation
- Form validation for signup and login
- User info stored in localStorage
- Profile image with change icon (SVG)

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (v9 or newer recommended)

### Installation
1. Clone the repository:
	```sh
	git clone https://github.com/KaranUnique/Propx.git
	cd Propx/popx-landing
	```
2. Install dependencies:
	```sh
	npm install
	```

### Running the App
Start the development server:
```sh
npm run dev
```
Visit the local URL shown in your terminal (usually http://localhost:5173/).

## Project Structure
```
popx-landing/
├── public/
│   └── Raquel.jpg           # Profile image
├── src/
│   ├── Components/
│   │   ├── LandingPage.jsx
│   │   ├── LoginScreen.jsx
│   │   ├── SignupScreen.jsx
│   │   └── ProfileSettings.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Customization
- Update the profile image by replacing `public/Raquel.jpg`.
- Edit form validation logic in `SignupScreen.jsx` and `LoginScreen.jsx`.
- Adjust styles in the respective CSS files in `src/Components/`.

## License
This project is for educational/demo purposes. You may adapt it for your own use.

---
Made with ❤️ using Reactjs , Tailwind CSS and Vite.
