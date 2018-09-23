'use strict';

// module dependencies
var _ls = require( './ls' );

// the dictionary
var _currentDict = {
  x: 'x',
  y: 'y'
};

// get a list of all modules
_ls( 'modules', /\.(?:js|jsx|ejs)$/i ).then( function ( modules )
{
  var i, l;

  for ( i = 0, l = modules.length; i < l; ++i ) {
    var moduleName = modules[ i ];

    try {
      var module = require( moduleName );
      var processedDict = module( _currentDict );
      console.log( 'Module "' + moduleName + '" returned dictionary:', processedDict );
      _currentDict = processedDict;
    } catch ( error ) {
      console.log( 'An error occured in module "' + moduleName + '" (skipping this module)\n', error );
    }
  }

  console.log( 'The main script successfully finished' );
  console.log( 'Final dictionary:', _currentDict );
}, console.log );
