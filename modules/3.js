'use strict';

function upper ( dict )
{
  Object.keys( dict ).forEach( function ( key )
  {
    dict[ key ] = dict[ key ].toUpperCase();
  } );

  return dict;
}

module.exports = upper;
