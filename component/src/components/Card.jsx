import React from 'react'

const  Card = (props) => {

  console.log(props)
  return (
    <div className ="  inline-block  rounded m-4 text-center text-xl bg-white  px-4 text-black">
    
      <img  className = " ml-1 rounded h-32 w-32 mb-3 "src= {props.photo} alt="" /> 
        <h1 className ="text-2xl font-semibold md-4">{props.Name}</h1>
        <h2>{props.City},{props.Age}</h2>
        <button className = "m-5  mt-5 px-5 py-1 bg-green-500 rounded font-medium">Submit</button>
      </div> 
      
  )
}

export default Card