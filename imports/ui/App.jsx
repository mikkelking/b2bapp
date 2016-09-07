import React from 'react'
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'
//import loginButtons from './loginButtons'
import { Accounts, STATES } from 'meteor/std:accounts-ui';

export default React.createClass({
  render() {
    return (
    <span>
      <header>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink className="navbar-brand" to="/">Evolve</NavLink>
          </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink to="/checkin">Checkin</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
                
                <li>Login</li>
            </ul>
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
      </header>
      {this.props.children}
    </span>
    )
  }
});

