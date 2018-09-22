'use strict';

function upper ( dict, next )
{
  console.log( ' - 3.js' );

  Object.keys( dict ).forEach( function ( key )
  {
    dict[ key ] = dict[ key ].toUpperCase();
  } );

  // call next module
  next( dict );
}

module.exports = upper;
