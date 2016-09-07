import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import Griddle from 'griddle-react';
import { createContainer } from 'meteor/react-meteor-data';
import Carrot from '../ui/Carrot'

// ...
class CarrotList extends Component {
export default React.createClass({

  renderCarrots() {
    return this.props.carrots.map((carrot) => (
      <Task key={carrot._id} carrot={carrot} />
    ));
  },
 
  props: {searchString: ''},
  render() {
    console.log("rendering");
    return (
<div class="page-container container" id="content">
    <div class="row" id="title_row">
        <div class="col-md-12">
            <h2 id="page_title" class="pull-left">
          Carrot
        </h2>
            <div id="page_menu" class="pull-right">
            </div>
        </div>
    </div>
    <div id="carrot-list" class="">
        <form id="dataview-controls" class="form-inline">
            <div id="dataview-controls-insert" class="form-group ">
                <button type="submit" href="/carrot/insert" class="btn btn-success">
                    <span class="fa fa-plus">
          </span> Add new
                </button>
            </div>
            <div id="dataview-controls-search" ng-show="isNotEmpty">
                <div id="dataview-controls-search-group" class="form-group">
                    <label class="sr-only" for="search">
                        Search
                    </label>
                    <input type="text" class="form-control" 
                        id="dataview-search-input" placeholder="Search for"
                        name="search" defaultValue="{searchString}" autofocus="autofocus"/>
                    <button type="button" ng-click="search()" class="btn btn-primary">
                        <span class="fa fa-search">
                        </span>
                    </button>
                </div>
            </div>
        </form>
        <div>
            <div class="alert alert-warning" ng-show="isNotFound">
                "{/* {{searchString}} */}" not found.
            </div>
            <ui-view></ui-view>
            <div id="dataview-data">
                
                <table id="dataview-table" class="table table-striped">
                    <thead id="dataview-table-header">
                        <tr id="dataview-table-header-row">
                        
<th class="th-sortable" data-sort="id">Identifier</th>
<th class="th-sortable" data-sort="id">Full Name</th>
<th class="th-sortable" data-sort="id">E-mail</th>
<th class="th-sortable" data-sort="id">Notes</th>

                            <th>
                                &nbsp;
                            </th>
                            <th>
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody id="dataview-table-items" dir-paginate="v in carrot | itemsPerPage: 4">
                        <tr id="dataview-table-items-row">
<ul>
  {this.renderCarrots()}
</ul>

<td>{/* {{id}} */}</td>
<td>{/* {{full_name}} */}</td>
<td>{/* {{email}} */}</td>
<td>{/* {{notes}} */}</td>
                            <td class="td-icon">
                                <span id="edit-button" ng-click="edit(v._id)" class="fa fa-pencil " title="Edit">
              </span>
                            </td>
                            <td class="td-icon">
                                <span id="delete-button" ng-click="delete(v._id)" class="fa fa-trash-o " title="Delete">
              </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <dir-pagination-controls></dir-pagination-controls>
            </div>
        </div>
        <div class="alert alert-info" ng-show="carrot.count===0">
            No data.
        </div>
    </div>
</div>

    )
  }
})
export default createContainer(() => {
  return {
    tasks: Tasks.find({}).fetch(),
  };
}, App);
