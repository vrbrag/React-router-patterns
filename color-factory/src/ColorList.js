import React from 'react'
import { Link } from 'react-router-dom'
import './ColorList.css'

function ColorList({ colors }) {

   const links = Object.keys(colors).map(
      colorName => (
         <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
         </li>
      ))

   return (
      <div className="ColorList">
         <div className="ColorList-header">
            <h1>Welcome to the Color Factory.</h1>
            <h2>
               <Link to="/colors/new">Add a color.</Link>
            </h2>
         </div>

         <div className="ColorList-select">
            <p>Please select a color.</p>
            <ul>{links}</ul>
         </div>
      </div>
   )
}

export default ColorList;