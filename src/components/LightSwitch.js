import React from "react"
import img1 from '../assets/lightOn.png'

const LightSwitch = (props) => {
console.log(props)



  
  return (
    <>
    
      <div style={{backgroundColor: props.backgroundStatus} } className="lightbulb" >{props.lightSwitchStatus} 
      <img src={img1} alt="lightbulboff"/>
      </div> 
      
    </>
  )
}

export default LightSwitch
