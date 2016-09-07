Package.describe({
  name: 'gscripts',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Scripts to provide seed data for B2B app',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  var things = ["checkins","users","volunteers"];

  //
  // Loop through the things...
  //
  things.forEach(function(thing) {
    api.addAssets(thing+'.json','server');
  });

  api.addFiles('gscripts.js','server');
  api.export('gScripts','server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('gscripts');
//  api.addFiles('gscripts-tests.js');
});
