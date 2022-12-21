import React from "react"

const LightSwitch = (props) => {
console.log(props)



  
  return (
    <>
    
      <div style={{backgroundColor: props.backgroundStatus} } className="lightbulb" >{props.lightSwitchStatus} 
      
      </div> 
      
    </>
  )
}

export default LightSwitch
