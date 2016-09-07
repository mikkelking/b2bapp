import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import { createContainer } from 'meteor/react-meteor-data';

import { Volunteers } from '../../api/Collections.js';
import CheckinMain from './CheckinMain';
import Volunteer from './Volunteer';

// ...
class VolunteerList extends Component {
  renderVolunteers() {
    console.log("Rendering Volunteers ");
    console.log(this.props.Volunteers);
    return this.props.Volunteers.map((c) => ( 
        <Volunteer key={c._id} object={c}/>
    ));
  };

  render() {
    console.log("rendering VolunteerList");
    return (
      <div>{this.renderVolunteers()}</div>
    )
  }
};
VolunteerList.propTypes = {
  Volunteers: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  console.log("Fetching Volunteers from db");
  Meteor.subscribe('volunteers');
  return {
    Volunteers: Volunteers.find({}).fetch()
  };
}, VolunteerList);
