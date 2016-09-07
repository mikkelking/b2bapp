import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import Griddle from 'griddle-react';
import { createContainer } from 'meteor/react-meteor-data';
import { Carrots } from '../api/Carrots.js';
import CarrotMain from './CarrotMain';
import Carrot from './Carrot';

// ...
class CarrotList extends Component {
  renderCarrots() {
    console.log("Rendering carrots ");
    console.log(this.props.carrots);
    return this.props.carrots.map((c) => ( 
        <Carrot key={c._id} object={c}/>
    ));
  };

  render() {
    console.log("rendering carrotList");
    return (
<div className="page-container container" id="content">
    <div id="carrot-list" className="">
        <form id="dataview-controls" className="form-inline">
            <div id="dataview-controls-insert" className="form-group ">
                <Link to="/carrots/insert" className="btn btn-success pull-right">
                    <span className="fa fa-plus"></span> Add new
                </Link>
                <div id="dataview-controls-search-group" className="form-group">
                    <label className="sr-only" for="search">
                        Search
                    </label>
                    <input type="text" className="form-control" 
                        id="dataview-search-input" placeholder="Search for"
                        name="search" autofocus="autofocus"/>
                    <button type="button" ng-click="search()" className="btn btn-primary">
                        <span className="fa fa-search">
                        </span>
                    </button>
                </div>
            </div>
        </form>
        <div>
            <div id="dataview-data">
                
                <table id="dataview-table" className="table table-striped">
                    <thead id="dataview-table-header">
                        <tr id="dataview-table-header-row">
                        
<th className="th-sortable" data-sort="id">Identifier</th>
<th className="th-sortable" data-sort="id">Full Name</th>
<th className="th-sortable" data-sort="id">E-mail</th>
<th className="th-sortable" data-sort="id">Notes</th>

                            <th className="pull-right">
                                &nbsp;Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody id="dataview-table-items">
                          {this.renderCarrots()}
                    </tbody>
                </table>
                <dir-pagination-controls></dir-pagination-controls>
            </div>
        </div>
        <div className="alert alert-info" ng-show="carrot.count===0">
            No data.
        </div>
        <Griddle results={this.props.carrots}
            tableClassName="table" showFilter={true}
            showSettings={true}
            metadataColumns={["_id"]} 
            columns={["name", "email", "notes"]}
            columnMetadata={this.props.columnMetadata}
             />
            }
    </div>
</div>

    )
  }
};
CarrotList.propTypes = {
  carrots: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
    console.log("Fetching carrots from db");
  Meteor.subscribe('carrots');
  return {
    carrots: Carrots.find({}).fetch(),
    count: Carrots.find({}).count(),
    columnMetadata: [{
        "columnName": "name",
        "displayName": "Full Name"
    },{
        "columnName": "email",
        "displayName": "Email"
    },{
        "columnName": "notes",
        "displayName": "Notes"
    }
    ]
  };
}, CarrotList);
