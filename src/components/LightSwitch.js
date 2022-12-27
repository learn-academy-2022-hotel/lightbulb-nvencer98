import React, { useState } from "react"
import lightOn from '../assets/lightOn.png'
import lightOff from '../assets/lightOff.png'


const LightSwitch = (props) => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  
  const handleClick = () => {
    lightSwitchStatus === "off"? setLightSwitchStatus("on")
    :setLightSwitchStatus("off")
  }

  
  return (
    <>
      <div 
        onClick={handleClick}
        style={{backgroundImage: lightSwitchStatus === "on"? "url("+lightOn+")" : "url("+lightOff+")", backgroundSize: "contain"}} 
        className="lightbulb"
      >
        {lightSwitchStatus} 
      </div> 
      
    </>
  )
}
export default LightSwitch
