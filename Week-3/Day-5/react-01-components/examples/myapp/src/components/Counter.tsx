import React, { useState } from 'react'

export default function () {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=> setCount(count+1)} >click {count} </button>
    </div>
  )
}
