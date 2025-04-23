import React from 'react'

const Nav = () => {
  return (
    <div>
     <nav className = "bg-emerald-800  flex items-center justify-between py-4  "> 
        <h1 className='text-3xl m-4'>TechBlend</h1>

        <div className = " text-xl flex gap-10 items-center mx-4">
         <h3 >About us </h3>
         <h3>Trending blogs</h3>
         <h3>Contact us</h3>
         <h3>Profile</h3>
        </div>
        
       </nav>
    </div>
  )
}

export default Nav