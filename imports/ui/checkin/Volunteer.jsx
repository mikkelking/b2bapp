import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import { createContainer } from 'meteor/react-meteor-data';

import { Volunteers } from '../../api/Collections.js';

// ...
class Volunteer extends Component {
  render() {
    console.log("Rendering Volunteer");
    return ( 
<div class="card">
    <div class="card-height-indicator"></div>
    <div class="card-content">
        <div class="card-image">
            <img width="64px" src={"/avatars/"+this.props.object.avatar+".jpeg"} />
            <h3 class="card-image-headline">{this.props.object.name}</h3>
        </div>
    </div>
</div>
    );
  };
  deleteThisOne() {
    console.log("Deleting Volunteer: "+this.props.object._id);
    Volunteers.remove(this.props.object._id);
  }
};

Volunteer.propTypes = {
  // This component gets the Volunteer to display through a React prop.
  // We can use propTypes to indicate it is required
  object: PropTypes.object.isRequired,
};

export default createContainer(() => {
return ({});
}, Volunteer);
