import React, { useState } from "react"
import lightOn from '../assets/lightOn.png'
import lightOff from '../assets/lightOff.png'
import switchOn from '../assets/switchOn.png'
import switchOff from '../assets/switchOff.png'


const LightSwitch = () => {
  const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  
  const handleClick = () => {
    lightSwitchStatus === "off"? setLightSwitchStatus("on")
    :setLightSwitchStatus("off")
  }

  
  return (
    <>
      <div 
        
        style={{backgroundImage: lightSwitchStatus === "on"? "url("+lightOn+")" : "url("+lightOff+")", backgroundSize: "contain",backgroundRepeat:"no-repeat"}} 
        className="lightbulb"
      >
        {lightSwitchStatus} 
      </div> 
      <div>
      <button onClick={handleClick}
          style={{backgroundImage: lightSwitchStatus === "on"? "url("+switchOn+" )" : "url("+switchOff+")", backgroundSize: "contain",backgroundRepeat:"no-repeat"}} ></button>
      </div>
    </>
  )
}
export default LightSwitch
