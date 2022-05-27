import React from "react";

const ColorfulMessage=(props)=>{
const {color,children}=props
    const contentStyle={
        color:color,
        fontsize:'18px'
      }
     
    return(
      <p style={contentStyle}>{props.children}</p>

    )
}

export default ColorfulMessage