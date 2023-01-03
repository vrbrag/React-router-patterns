import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NewColorForm from './NewColorForm';
import ColorList from './ColorList';
import Color from './Color';

function Routes() {

   const initialColors = JSON.parse(localStorage.getItem("colors")) || {
      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF"
   };

   const [colors, setColors] = useState(initialColors)

   // add a key and value to localStorage
   useEffect(
      () => localStorage.setItem("colors", JSON.stringify(colors)), [colors]
   )

   const addColor = (newColorObj) => (
      setColors(prevColors => ({ ...prevColors, ...newColorObj })
      ))

   function renderCurrentColor(props) {
      const { color } = props.match.params
      const hex = colors[color]
      return <Color {...props} hex={hex} color={color} />
   }
   return (
      <div>
         <BrowserRouter>
            <Switch>
               <Route exact path="/colors">
                  <ColorList colors={colors} />
               </Route>
               <Route exact path="/colors/new">
                  <NewColorForm addColor={addColor} />
               </Route>
               <Route path="/colors/:color" render={renderCurrentColor} />
               <Redirect to="/colors" />
            </Switch>
         </BrowserRouter>
      </div>
   )

}

export default Routes;