import React from 'react'
import { useState  } from 'react'

const ExerciseSix = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastname] = useState('')

  const handleSubmit = () => {
    alert('Hello ' + firstName + ' ' + lastName)
  }


  return (
    <div className='form'>
      <input type='text' placeholder='First Name' onChange={(event) => setFirstName(event.target.value)}></input>
      <input type='text' placeholder='Last Name' onChange={(event) => setLastname(event.target.value)}></input>
      <button type='submit' onClick={handleSubmit}>Greet me</button>
    </div>
  )
}

export default ExerciseSix