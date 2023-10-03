# 🚀💰 USD to Cryptocurrency Converter
![Next.js](https://img.shields.io/badge/-Next.js-20232A?logo=next.js&style=for-the-badge) ![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&style=for-the-badge&color=white) ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&style=for-the-badge&color=white) ![Eslint](https://img.shields.io/badge/-Eslint-4B32C3?logo=eslint&style=for-the-badge) ![React Testing Library](https://img.shields.io/badge/-React%20Testing%20Library-E33332?logo=javascript&style=for-the-badge) ![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&style=for-the-badge) ![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?logo=tailwind-css&style=for-the-badge&color=white)

Welcome to the USD to Cryptocurrency Converter project! With this application, you can see the instant conversion from US dollars (USD) to your favorite cryptocurrencies. This application is built using modern technologies like Next.js 13, TypeScript, React, Eslint, React Testing Library with Jest, and Tailwind CSS. Keep reading to learn how to install, run, and contribute to this exciting project!

# 😎 Demo!

- React Next JS frontend [https://exchange-crypto-currency-app-9t8y.vercel.app](https://exchange-crypto-currency-app-9t8y.vercel.app)

# Requirements

1. Node v18.18.0
2. Npm 9.8.1

# Environment

Required variables to be used on your local development:

- API_URL
- BASE_FETCH_URL

# Create components

This structure required the next steps for standardize code:

- Only use react arrow functional components
- Create folder with **kebab-case**
- Create component with **PascalCase** with extention .TSX
- Create a style file with **PascalCase** and the name of its corresponding component with sass format
- In files use 2 spaces or tabs
- Use semicolon
- Use type **rem measurement** in font size, margin, padding
- Use percentage in width responsive
- If you need others components you have to create a folder with name: **components**
- Create variables, constants or props with **snake_case**
- Create name functions with **camelCase**
- **Components folder** has to be separeted by folders and its name has to be according to function of component
- In constants files create only **ENUMS**
- Code documentation of functions and interfaces, description of what it does and properties

**Example:**

Folder: ``new-component``

Component: ``NewComponent.tsx``

Style component ``NewComponent.scss``

```tsx
//react arrow functional component
const App: React.FC = () => {
  const greeting = 'Hello Function Component!';

  return <h1>Component</h1>;
};
```

## 🏗️ Installation

Before getting started, make sure you have Node.js and npm installed on your machine. Then follow these simple steps:

1. Clone this repository on your local machine:

```bash
git clone https://github.com/yeison-gonzalez/exchange-crypto-currency-app.git
```

2. Navigate to the project directory:

```bash
cd exchange-crypto-currency-app

```

3. Install project dependencies using npm:

```bash
npm install
```

## 🚀 Execution

You are about to run the application! Simply follow these steps:

1. Start the development server:

```bash
npm run dev
```

2. Open your web browser and navigate to `http://localhost:3000` to see the application in action.

## 🧪 Running Tests

To ensure everything is working as expected, we've included unit tests in this project. You can run these tests using the following command:

```bash
npm run test
```

Thank you! 💪✨
