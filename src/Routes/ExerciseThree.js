import React, { useEffect, useState } from 'react'

const ExerciseThree = () => {
  const [counter, setCounter] = useState(0)

  return (
   
    <div className='exercise'>
     <p>Button has been clicked: {counter} times</p>
      <button onClick={() => setCounter(counter + 1 )}>Click me</button>
    </div>
  )
}

export default ExerciseThree