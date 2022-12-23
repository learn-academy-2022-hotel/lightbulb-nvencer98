import React, { useState } from "react"
import "./App.css"
import LightSwitch from "./components/LightSwitch"


const App = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  const [backgroundStatus, setBackgroundStatus] = useState("white")





  const handleClick = () => {
  if (lightSwitchStatus === "off"){
    setLightSwitchStatus("on")
  } else {
      setLightSwitchStatus("off")
  }
  lightSwitchStatus === "off"? setLightSwitchStatus("on") :setLightSwitchStatus("off")
    backgroundStatus === "white"? setBackgroundStatus("yellow"):setBackgroundStatus("white")
  }







  return (
    <>
      <h1>Lightbulb Challenge</h1>
      <button onClick={handleClick}>on/off</button>
      <LightSwitch lightSwitchStatus ={lightSwitchStatus}
      backgroundStatus = {backgroundStatus}
      /> 
    
  
    </>
  )
}

export default App
