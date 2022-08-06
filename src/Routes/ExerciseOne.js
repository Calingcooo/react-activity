import React from 'react'

const ExerciseOne = () => {

    const clickHandler = () => {
        alert('Clicked!')
    }
  return (
    <div className='exercise'>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default ExerciseOne