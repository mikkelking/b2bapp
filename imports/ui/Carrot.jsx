import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import { createContainer } from 'meteor/react-meteor-data';

import { Carrots } from '../api/Carrots.js';

// ...
class Carrot extends Component {
  render() {
    console.log("Rendering carrot");
    return ( 
                        <tr>
                            <td>{this.props.object.id}</td>
                            <td>{this.props.object.name}</td>
                            <td>{this.props.object.email}</td>
                            <td>{this.props.object.notes}</td>
                            <td className="td-icon pull-right">
                                <Link className="fa fa-edit btn btn-xs"
                                    to={"/carrots/edit/"+this.props.object._id}> 
                                    
                                </Link>
                                &nbsp;
                                <span className="fa fa-trash btn btn-xs"
                                     onClick={this.deleteThisOne.bind(this)}>
                                </span>
                            </td>
                        </tr>
    );
  };
  deleteThisOne() {
    console.log("Deleting carrot: "+this.props.object._id);
    Carrots.remove(this.props.object._id);
  }
};

Carrot.propTypes = {
  // This component gets the carrot to display through a React prop.
  // We can use propTypes to indicate it is required
  object: PropTypes.object.isRequired,
};

export default createContainer(() => {
return ({});
}, Carrot);
