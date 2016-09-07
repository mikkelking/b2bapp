import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
// ...
export default React.createClass({
  render() {
    console.log("rendering");
    return (
      <div>
        <h2>Repos</h2>

        {/* add some links */}
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})