import React from 'react'

const ExerciseTwo = () => {

  const buttonOne = () => {
    alert('You clicked button 1!')
  }
  const buttonTwo = () => {
    alert('You clicked button 2!')
  }
  const buttonThree = () => {
    alert('You clicked button 3!')
  }
  return (
    <div className='exercise'>
      <button onClick={buttonOne}>Button 1</button>
      <button onClick={buttonTwo}>Button 2</button>
      <button onClick={buttonThree}>Button 3</button>
    </div>
  )
}

export default ExerciseTwo