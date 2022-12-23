import React, { useState } from "react"
import img1 from '../assets/lightOn.png'
import img2 from '../assets/lightOff.png'


const LightSwitch = (props) => {
console.log(props)

const [lightSwitchStatus, setLightSwitchStatus] = useState("off")


  
    const handleClick = () => {
      if (lightSwitchStatus === "off"){
        setLightSwitchStatus("on")
      } else {
          setLightSwitchStatus("off")
      }
    }
  return (
    <>
    
      <div onClick={handleClick}style={{backgroundImage: lightSwitchStatus === "on"? "url("+img1+")": "url("+img2+")", backgroundSize: "contain"} } className="lightbulb" >{lightSwitchStatus} 
      
      </div> 
      
    </>
  )
  }

export default LightSwitch
