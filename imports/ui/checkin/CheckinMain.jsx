import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
 
// Checkin component - represents a single checkin

class CheckinMain extends Component {
  render() {
  	console.log("RENDER CHECKIN");
    return (
    <div class="row" id="title_row">
        <div class="col-md-12">
            <h2 id="page_title" class="pull-left">
          Checkin
        </h2>
            <div id="page_menu" class="pull-right">
            </div>
        </div>
       	{this.props.children}
    </div>
    );
  }
};

export default createContainer(() => {
  return {
  };
}, CheckinMain);