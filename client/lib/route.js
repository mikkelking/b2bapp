import React from 'react'
import { render } from 'react-dom'
import { Redirect, Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '/imports/modules/App'
import About from '/imports/modules/About'
import Repo from '/imports/modules/Repo'
import Repos from '/imports/modules/Repos'
import CarrotMain from '/imports/ui/CarrotMain'
import CarrotList from '/imports/ui/CarrotList'
import CarrotEdit from '/imports/ui/CarrotEdit'
import CarrotInsert from '/imports/ui/CarrotInsert'
// and the Home component
import Home from '/imports/modules/Home'
import { Accounts, STATES } from 'meteor/std:accounts-ui';

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/* add it here, as a child of `/` */}
        <Route path="/signin" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_IN } />
        <Route path="/signup" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_UP } />      
        <IndexRoute component={Home}/>
        <Redirect from="/carrots" to="/carrots/list"/>
        <Route path="/carrots" component={CarrotMain}>
          <Route path="/carrots/edit/:id" component={CarrotEdit}/>
          <Route path="/carrots/insert" component={CarrotInsert}/>
          <Route path="/carrots/list" component={CarrotList}/>
        </Route>
        <Route path="/repos" component={Repos}>
        {/* add the new route */}
          <Route path="/repos/:userName/:repoName" component={Repo}/>
        </Route>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  ), document.getElementById('myapp'))
});
