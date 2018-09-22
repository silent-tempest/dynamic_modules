'use strict';

// module dependencies
var _ls = require( './ls' );

// the dictionary
var _dict = {
  x: 'x',
  y: 'y'
};

// get a list of all modules
_ls( 'modules', /\.(?:js|jsx|ejs)$/ ).then( function ( modules )
{
  var i = 0;

  function next ( returnedDict )
  {
    var dictCopy;

    if ( i >= modules.length ) {
      console.log( ' - The main script successfully finished' );
      console.log( ' - Final dictionary:', returnedDict );
      return;
    }

    dictCopy = Object.assign( {}, returnedDict );

    try {
      require( modules[ i++ ] )( dictCopy, next );
    } catch ( error ) {
      console.log( ' - An error occured', error.message );
      next( dictCopy );
    }
  }

  next( _dict );
}, console.log );
