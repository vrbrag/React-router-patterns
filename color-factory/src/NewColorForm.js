import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './NewColorForm.css'

function NewColorForm({ addColor }) {

   const [form, setForm] = useState({ name: "", hex: "#ffffff" })

   function handleChange(e) {
      e.persist()
      setForm(f => ({ ...f, [e.target.name]: e.target.value }))
   }

   const history = useHistory()

   function handleSubmit(e) {
      e.preventDefault()
      addColor({ [form.name]: form.hex })
      history.push("/colors")
   }

   const { hex, name } = form;

   return (
      <div className="NewColorForm">
         <form onSubmit={handleSubmit}>
            <div className="NewColorForm-name">
               <label htmlFor="name">Color name</label>
               <input
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Enter color name"
                  onChange={handleChange}
               />
            </div>
            <div className="NewColorForm-hex">
               <label htmlFor="hex">Color value</label>
               <input
                  name="hex"
                  id="hex"
                  value={hex}
                  onChange={handleChange}
               />
            </div>
            <input type="submit" value="Add this color" readOnly />
         </form>
      </div>
   )
}

export default NewColorForm;