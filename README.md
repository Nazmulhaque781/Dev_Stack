# Dev Stack

## Project Description

Dev Stack is a React-based web application where users can explore different technologies and build their own technology stack by adding their favorite technologies.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## Features

### 1. Explore Technologies

Users can see different technology cards with icons, categories, descriptions, difficulty levels, ratings, and badges.

### 2. Build Your Stack

Users can add technologies to their own stack, remove individual technologies, or remove all technologies at once.

### 3. Toast Notifications

React-Toastify shows notifications when a technology is added, removed, added twice, or when all technologies are removed.

---

# React Questions and Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It is used in React to make UI code easier to write and understand.

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component and can change over time.

## 3. What does the useState hook do, and where did you use it in this project?

useState is used to manage changing data in a component. In this project, I used it to manage the selected technology stack, loading state, and mobile menu state.

## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects in React. I used it to fetch the technology data from the JSON file when the application loads.

## 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It helps React know which item was added, removed, or changed. In this project, I used each technology's id as the key.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. In this project, I used it in the Your Stack section. When the stack is empty, it shows an empty message. When technologies are added, it shows the selected technologies.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A parent can also pass a function as a prop. The child calls that function to send an action or data back to the parent. In this project, App passes data and functions to TechnologySection and other child components.

---

## Responsive Design

The website is responsive and works on mobile, tablet, and desktop devices.
