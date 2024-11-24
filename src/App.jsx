import './App.css'
import { useState, useEffect } from 'react';

function Header(val) {
  return (
    <header>
      <h2>My First {val.name} Project 😍</h2>
    </header>
  );
}

function App() {
  const [myVar, setMyVar] = useState("JavaScript");

  useEffect(() => {
    const wordsList = ["JavaScript! 😁", "React! ✌️", "World! 🌏"];
    const interval = setInterval(() => {
      setMyVar(wordsList[Math.floor(Math.random() * wordsList.length)]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header name="React" />
      <h1>Hello {myVar}</h1>
    </>
  );
}

export default App
