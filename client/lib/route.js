import { Accounts, STATES } from 'meteor/std:accounts-ui';

import React from 'react'
import { render } from 'react-dom'
import { Redirect, Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from '/imports/ui/App'
import About from '/imports/ui/About'

import CheckinMain from '/imports/ui/checkin/CheckinMain'
import CheckinList from '/imports/ui/checkin/CheckinList'
import CheckinAdd from '/imports/ui/checkin/CheckinAdd'
import CheckinSignedin from '/imports/ui/checkin/CheckinSignedin'


// and the Home component
import Home from '/imports/ui/Home'

Meteor.startup(() => {
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {/* add it here, as a child of `/` */}
        <Route path="/signin" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_IN } />
        <Route path="/signup" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_UP } />      
        <IndexRoute component={Home}/>

        <Redirect from="/checkin" to="/checkin/list"/>
        <Route path="/checkin" component={CheckinMain}>
          <Route path="/checkin/list" component={CheckinList}/>
          <Route path="/checkin/add" component={CheckinAdd}/>
          <Route path="/checkin/signedin" component={CheckinSignedin}/>
        </Route>

        <Route path="/about" component={About}/>
      </Route>
    </Router>
  ), document.getElementById('myapp'))
});
