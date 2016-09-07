import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

import { createContainer } from 'meteor/react-meteor-data';

import { Carrots } from '../api/Carrots.js';
import Carrot from './Carrot.jsx';


// ...
//class CarrotInsert extends Component {
class CarrotInsert extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log("Adding record");
 
    // Find the text field via the React ref
 
    Carrots.insert({
      name: ReactDOM.findDOMNode(this.refs.name).value.trim(),
      email: ReactDOM.findDOMNode(this.refs.email).value.trim(),
      createdAt: new Date(), // current time
    });
 
    // Clear form
    document.insertForm.reset();
    // ??? How to go back to the list now?
  };


  render() {
    console.log("rendering carrotInsert");
    return (
<div className="page-container container" id="content">
    <div className="row" id="title_row">
        <div className="col-md-12">
            <h2 id="page_title" className="pull-left">
              Add Carrot
            </h2>
        </div>
    </div>
    <div className="row" id="title_row">
        <div className="col-md-12">
         <form name="insertForm" className="new-carrot" onSubmit={this.handleSubmit.bind(this)} >

            <div className="form-group field-name">
              <label for="name">
                Name
              </label>
              <div className="input-div">
                <input type="text" ref="name" name="name" className="form-control" autofocus="autofocus" required="required"/>
              </div>
            </div>

            <div className="form-group field-name">
              <label for="email">
                Email
              </label>
              <div className="input-div">
                <input type="email" ref="email" name="email" className="form-control" autofocus="autofocus" required="required"/>
              </div>
            </div>

            <div className="form-group field-name pull-right">
              <Link to="/carrots/list" className="btn btn-danger">Cancel</Link>
              <button className="btn btn-success" onclick={this.handleSubmit.bind(this)}>Save</button>
            </div>

          </form>
        </div>
    </div>
</div>

    )
  }
};

export default createContainer(() => {
  return {
    carrots: Carrots.find({}).fetch(),
  };
}, CarrotInsert);