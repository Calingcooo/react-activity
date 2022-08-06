import React from "react"
import { Outlet, Link } from 'react-router-dom'
import './App.css'
import NavBar from "./components/NavBar";
//Components

export default function App() {

  return (
    <div>
      <nav>
        <Link to='./Routes/ExerciseOne'>Exercise 1</Link>
        <Link to='./Routes/ExerciseTwo'>Exercise 2</Link>
        <Link to='./Routes/ExerciseThree'>Exercise 3</Link>
        <Link to='./Routes/ExerciseFour'>Exercise 4</Link>
        <Link to='./Routes/ExerciseFive'>Exercise 5</Link>
        <Link to='./Routes/ExerciseSix'>Exercise 6</Link>
      </nav>
        <Outlet />
    </div>
  );
}