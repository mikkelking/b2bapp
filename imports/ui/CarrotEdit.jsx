import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router'

import { createContainer } from 'meteor/react-meteor-data';

import { Carrots } from '../api/Carrots.js';
import Carrot from './Carrot.jsx';


// ...
class CarrotEdit extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log("Editing record");
 
    // Find the text field via the React ref
 
    Carrots.update(this.refs._id,{
      name: ReactDOM.findDOMNode(this.refs.name).value.trim(),
      email: ReactDOM.findDOMNode(this.refs.email).value.trim(),
      updatedAt: new Date(), // current time
    });
 
    // Clear form
    document.insertForm.reset();
    // ??? How to go back to the list now?
  };

  render() {
    console.log("rendering carrotEdit");
//    console.log(this.props.params.id);
    console.log(this.props);
    // let filteredTasks = this.props.tasks;
    // if (this.state.hideCompleted) {
    //   filteredTasks = filteredTasks.filter(task => !task.checked);
    // }

    let neos = this.props.carrots;
    neos = neos.filter(carrot => (carrot._id === this.props.id));
    console.log(neos);
    if (neos.length == 0) 
        return <div>Could not find data for {this.props.id}</div>;
    else
    var x = neos.map((neo) => (
<div className="page-container container" id="content">
    <div className="row" id="title_row">
        <div className="col-md-12">
            <h2 id="page_title" className="pull-left">
              Edit Carrot {neo.name}
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
    ))
        return x[0];

  }
};

export default createContainer(({params}) => {
  Meteor.subscribe('carrots');
  console.log(params);
  return {
    id: params.id,
    carrots: Carrots.find().fetch(),
  };
}, CarrotEdit);