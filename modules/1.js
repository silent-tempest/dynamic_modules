'use strict';

function waiting ( dict )
{
  console.log( 'wait...' );

  setTimeout( function ()
  {
    console.log( 'success' );
  }, 1000 );

  return dict;
}

module.exports = waiting;
