import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
// ...
export default React.createClass({
  render() {
    console.log("rendering");
    return (
      <div>
        <h2>Carrot</h2>

{/* <template name="VegetableInsert"> */}
	<div class="page-container container" id="content">
		<div class="row" id="title_row">
			<div class="col-md-12">
				<div id="page_menu" class="pull-right">
				</div>
			</div>
		</div>
{/*		{{> VegetableInsertForm}} */}
{/* <template name="VegetableInsertForm"> */}
	<div id="vegetable-edit-form" class="">
		<h2 id="component-title">
			Edit Vegetable record
		</h2>
		<form role="form" id="vegetableForm" name="vegetableForm" novalidate>
			<div class="form-group field-id" show-errors='{showSuccess: true}'>
				<label for="id">
					Id
				</label>
				<span class="help-block" > - The Id is required</span>
				<div class="input-div">
					<input type="text" name="id" required class="form-control" autofocus="autofocus" 
					placeholder="Id" ng-model="this_vegetable.id"/>
				</div>
			</div>
			<div class="form-group  field-name" show-errors='{showSuccess: true}'>
				<label for="name">
					Name
				</label>
				<span class="help-block" > - The name is required</span>
				<div class="input-div">
					<input type="text" name="name" required class="form-control" ng-model="this_vegetable.name" placeholder="Name"/>
				</div>
			</div>
			<div class="form-group  field-email" show-errors='{showSuccess: true}'>
				<label for="email">
					Email
				</label>
				<span class="help-block" ng-if="vegetableForm.email.$error.required"> - The email is required</span>
        <span class="help-block" ng-if="vegetableForm.email.$error.email"> - The email address is invalid</span>
				<div class="input-div">
					<input type="email" name="email" required class="form-control" ng-model="this_vegetable.email" placeholder="Email"/>
				</div>
			</div>
			<div class="form-group  field-date" show-errors='{showSuccess: true}'>
				<label for="date">
					Date
				</label>
				<div class="input-div">
					<input type="text" name="date" class="form-control" ng-model="this_vegetable.date"/>
				</div>
			</div>
			<div class="form-group  field-type" show-errors='{showSuccess: true}'>
				<label for="type">
					Type
				</label>
				<div class="input-div">
					<input type="text" name="type" class="form-control" ng-model="this_vegetable.type"/>
				</div>
			</div>
			<div class="form-group  field-notes_pdf">
				<label for="notes_pdf">
					Notes Pdf
				</label>
				<div class="input-div">
					<textarea class="form-control" name="notes_pdf" ng-model="this_vegetable.notes_pdf"></textarea>
				</div>
			</div>
			<div class="form-group  field-notes_xml">
				<label for="notes_xml">
					Notes Xml
				</label>
				<div class="input-div">
					<textarea class="form-control" name="notes_xml" ng-model="this_vegetable.notes_xml"></textarea>
				</div>
			</div>
			<div class="form-group  field-notes">
				<label for="notes">
					Notes
				</label>
				<div class="input-div">
					<textarea class="form-control" name="notes" ng-model="this_vegetable.notes"></textarea>
				</div>
			</div>
			<div class="form-group">
				<div class="submit-div">
					<button class="btn btn-success" type="submit" ng-click="save()">
						<span class="fa fa-check">
						</span>
						Save
					</button>
					<button type="submit" class="btn btn-default" ng-click="resetme()">Reset</button>
					<a href="#" id="form-cancel-button" class="btn btn-default" ng-click="cancel()">
						Cancel
					</a>
{/*			{{#if errorMessage}} */}
			<div class="alert alert-warning" ng-show="errorMessage">
				{{errorMessage}}
			</div>
{/*			{{/if}} */}

{/*			{{#if infoMessage}} */}
			<div class="alert alert-success" ng-show="infoMessage">
				{{infoMessage}}
			</div>
{/* 			{{/if}} */}
				</div>
			</div>
		</form>
	</div>
{/* </template> */}

	</div>
{/* </template> */}
      </div>

    )
  }
})
