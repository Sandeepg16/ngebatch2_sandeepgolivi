import './App.css'
import { useState } from 'react'
import ClickerButton from './components/ClickerButton'
import ColourButton from './components/ColourButton'

const App = () => {
  // Our global state
  const [clicks, setClicks] = useState(0)

  const [colour, setColour] = useState("blue");

  const handleColourClick = () =>
  {
    if (colour == "blue")
      setColour("red");
    else
      setColour("blue");
  }

  // Our clicks state mutation function
  const handleCounterClick = () => {
    setClicks(clicks + 1)
  }

  // Render the ClickerButton component and pass down state value as a prop, as well as the function to update the state
  // Render the ColourButton component - TODO: pass down state value as a prop, as well as the function to update the state
  return (
    <>
      <ClickerButton clicks={clicks} handleClick={handleCounterClick} />
      <ColourButton colour={colour} handleClick={handleColourClick}/>
    </>
  )
}

export default App
