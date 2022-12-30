import React, { useState } from "react"
import switchOn from '../assets/switchOn.png'
import switchOff from '../assets/switchOff.png'
import handleClick from "../components/LightSwitch"

const SwitchButton = ()=> {

    // const [switchButton, setSwitchButton] = useState("off")
    // const click = () => {
    // switchButton === "off"? setSwitchButton("on")
    // :setSwitchButton("off")
    // }
    const [lightSwitchStatus, setLightSwitchStatus] = useState("off")
  
    const handleClick = () => {
      lightSwitchStatus === "off"? setLightSwitchStatus("on")
      :setLightSwitchStatus("off")
    }

    return (
        <button onClick={handleClick}
          style={{backgroundImage: lightSwitchStatus === "on"? "url("+switchOn+" )" : "url("+switchOff+")", backgroundSize: "contain"}} ></button>
    )
    
}





export default SwitchButton