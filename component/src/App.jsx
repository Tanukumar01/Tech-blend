import React from 'react'
import Card from './components/Card'
import Nav from './components/Nav'

const users = [
     {
       "Name": "John Doe",
       "City": "New York",
       "Profession": "Software Engineer",
       "Age": 28,
       "ProfilePhoto": "https://example.com/photos/john_doe.jpg"
     },
     {
       "Name": "Jane Smith",
       "City": "Los Angeles",
       "Profession": "Graphic Designer",
       "Age": 34,
       "ProfilePhoto": "https://example.com/photos/jane_smith.jpg"
     },
     {
       "Name": "Michael Brown",
       "City": "Chicago",
       "Profession": "Data Scientist",
       "Age": 25,
       "ProfilePhoto": "https://example.com/photos/michael_brown.jpg"
     },
     {
       "Name": "Emily White",
       "City": "San Francisco",
       "Profession": "Product Manager",
       "Age": 30,
       "ProfilePhoto": "https://example.com/photos/emily_white.jpg"
     }
   ]
   
const App = ()=>{

  return (
       <>
       <Nav/>
       <div className = 'p-7'>
         {users.map(function(elem){
          return<Card Name={elem.Name} City={elem.City} Age = {elem.Age} photo = {elem.ProfilePhoto}/>
         })}
       </div>
       </>
  )
}
export default App

