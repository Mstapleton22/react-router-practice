import React from 'react'
import { NavLink, Route } from "react-router-dom"
import Nested from './Nested'

const About = (props) => {
  console.log(props)
  const { match, username } = props
  const nestedPath = `${match.path}/Nested`
  console.log(username)
  return (
    <div>
      <h1>About</h1>
      <h2>Welcome, {username}!</h2>
      <p>Readymade kombucha viral, freegan pop-up cardigan dreamcatcher la croix fanny pack sustainable. Franzen truffaut poutine, before they sold out irony shoreditch raw denim whatever waistcoat pabst cliche palo santo DIY freegan. Marfa street art woke portland vexillologist. Sustainable pork belly pug chicharrones farm-to-table la croix, </p>
      <NavLink to={nestedPath}>More Info</NavLink>
      <Route
        path={nestedPath}
        component={Nested} />
    </div>
  )
}

export default About

/* Link to the nested route
Additional route component that uses match.path props for it's path */
// 
