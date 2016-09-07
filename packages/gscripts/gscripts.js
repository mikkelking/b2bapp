// read scripts and put them in a hash
// export the companions via the global variable gScripts
gScripts = {};

//
// To add another collection, just add to this list:
//
var things = ["checkins","users","volunteers"];

//
// Loop through the things...
//
things.forEach(function(thing) {
	gScripts[thing] = JSON.parse(Assets.getText(thing+".json"));
});

