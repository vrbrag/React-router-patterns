import React from 'react'
import { Link } from 'react-router-dom'
import './Color.css'

function Color({ hex, color, history }) {

   if (!hex) {
      history.push("/colors")
   }

   return (
      <div className="Color" style={{ backgroundColor: hex }}>
         <p>This is {color}</p>
         <p>Isn't it beautiful?</p>
         <p>
            <Link to="/colors">Go Back</Link>
         </p>
      </div>
   )
}

export default Color;