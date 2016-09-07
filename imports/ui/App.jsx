import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NavLink from './NavLink'
import Home from './Home'
import { IndexLink } from 'react-router'
//import loginButtons from './loginButtons'
import { Accounts, STATES } from 'meteor/std:accounts-ui';
 
// App component - represents the whole app
class App extends Component {
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
              <li><NavLink to="/repos">Repos</NavLink></li>
              <li><NavLink to="/carrots">Carrots</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li roleName="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
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
};

