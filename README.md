#B2B App

A Meteor/React project to provide some Meteor goodness for Back2Bikes

#MVP #1
Our first MVP is to provide a Volunteer checkin feature

Volunteers will checkin to an app running on an iPad in the workshop.

  * The checkin page will display a list of volunteers that are not checked in, sorted with the volunteers with the most hours in the past month at the top
  * Volunteers can scroll the list to find themselves
  * Or type part of their name
  * Or tap the "Add" button to add themselves to the system

To checkin 

  * Tap their own icon, a popup will appear to ask how long they are going to work (a list of buttons with 1-8 hours on)
  * They are signed in, and the list of signed in volunteers is displayed for 10 seconds

To checkout

  * As they have nominated the hours already, there is no need to check out, they will automatically be signed out at the end of the day

#Current status on MVP #1

  * We have a basic framework set up, and some pre-populated data
  * Routing is done
    * Home page
    * Checkin page
    * About page
  * A list of volunteers is displayed

## To do

  * Everything else
