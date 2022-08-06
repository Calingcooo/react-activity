import React from 'react'


const ExerciseFour = () => {

  const animals = ['dog', 'cat', 'chicken', 'cow', 'horse']
  const displayAnimals = animals.map((animals) => {
    return <li>{animals}</li>
  })

  return (
    <div className='exercise'>
      <ul>
        {displayAnimals}
      </ul>
    </div>
  )
}

export default ExerciseFour