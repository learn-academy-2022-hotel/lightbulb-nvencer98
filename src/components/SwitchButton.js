import React, { useState } from "react"
import switchOn from '../assets/switchOn.png'
import switchOff from '../assets/switchOff.png'

const SwitchButton = ()=> {

    const [switchButton, setSwitchButton] = useState("off")
    const click = () => {
    switchButton === "off"? setSwitchButton("on")
    :setSwitchButton("off")
    }

    return (
        <button onClick={click}
          style={{backgroundImage: switchButton === "on"? "url("+switchOn+" )" : "url("+switchOff+")", backgroundSize: "contain"}} ></button>
    )
    
}





export default SwitchButton