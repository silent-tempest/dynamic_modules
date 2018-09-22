'use strict';

function waiting ( dict, next )
{
  console.log( ' - 1.js' );
  console.log( 'wait...' );

  setTimeout( function ()
  {
    console.log( 'success' );
    // call next module
    next( dict );
  }, 1000 );
}

module.exports = waiting;
