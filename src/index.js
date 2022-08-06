import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ExerciseOne from './Routes/ExerciseOne';
import ExerciseTwo from './Routes/ExerciseTwo';
import ExerciseThree from './Routes/ExerciseThree';
import ExerciseFour from './Routes/ExerciseFour';
import ExerciseFive from './Routes/ExerciseFive';
import ExerciseSix from './Routes/ExerciseSix';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='Routes/ExerciseOne' element={<ExerciseOne />} />
          <Route path='Routes/ExerciseTwo' element={<ExerciseTwo />} />
          <Route path='Routes/ExerciseThree' element={<ExerciseThree />} />
          <Route path='Routes/ExerciseFour' element={<ExerciseFour />} />
          <Route path='Routes/ExerciseFive' element={<ExerciseFive />} />
          <Route path='Routes/ExerciseSix' element={<ExerciseSix />} />
        </Route>
      </Routes>
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
