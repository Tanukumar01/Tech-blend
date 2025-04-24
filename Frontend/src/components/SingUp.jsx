import React from 'react'
import login from './login'

const SingUp = (porps) => {
  return (

    <div className = "flex flex-col items-center justify-center h-screen bg-gray-300">

      <form className = "bg-white p-6  shadow-md w-96 rounded-md max-h-200">

      <h1 className = "text-3xl font-bold mb-4 text-blue-500 text-center">Sign Up</h1>
        <div className = "mb-4">
          <label className = "block text-gray-700 text-sm font-bold mb-2"  htmlFor="email">Email</label>
          <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder=""/>
        </div>
        <div className = "mb-4">
          <label className = "block text-gray-700 text-sm font-bold mb-2 mt-7" htmlFor="password">Password</label>
          <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
        </div>
        <div className = "mb-4">
          <label className = "block text-gray-700 text-sm font-bold mb-2 mt-7" htmlFor="password">Confirm Password</label>
          <input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
        </div>
        <button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none w-full focus:shadow-outline mt-7" type="button">Sign Up</button>
          <p className = "text-center text-gray-500 text-xs mt-4">Already have an account? <a href="Login.jsx" className = "text-blue-500 hover:text-blue-800">Login </a>
          </p>
          <p className = "text-center text-gray-500 text-xs mt-4 ">Forgot your password? <a href="#" className = "text-blue-500 hover:text-blue-800" onCanPlayThrough={login.porps}>Reset it</a> </p>
         <button className = "  text-blue-500 font-thin hover:bg-blue-300   w-full mt-2">Continue With Google</button>

        </form>
        </div>
    )
}

export default SingUp