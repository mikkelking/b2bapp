import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
// ...
export default React.createClass({
  render() {
    console.log("rendering");
    return (
      <div>
        <h2>Carrots</h2>

        {this.props.children}
      </div>
    )
  }
})
