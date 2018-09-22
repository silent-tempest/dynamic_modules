'use strict';

// module dependencies
var _ls = require( './ls' );

// get a list of all modules
_ls( 'modules', /\.(?:js|jsx|ejs)$/ ).then( function ( modules )
{
  var dictionary = {
    x: 'x',
    y: 'y'
  };

  var i, l, module;

  for ( i = 0, l = modules.length; i < l; ++i ) {
    // require a module dynamically
    require( modules[ i ] )( dictionary );
  }
}, console.log );
