'use strict';

// module dependencies
var _promisify = require( 'util' ).promisify;
var _resolve   = require( 'path' ).resolve;
var _fs        = require( 'fs' );

// promisified (async) functions
var _readdir = _promisify( _fs.readdir );
var _lstat   = _promisify( _fs.lstat );

/**
 * Promisified (async) function that returns a list of files in a `folder`.
 * @method ls
 * @param  {string}             folder    The function will return a list of filepaths from this folder.
 * @param  {regexp}             [pattern] The function will include only filepaths that matches this pattern.
 * @return {Promise.<string[]>}           Returns a Promise with an array of absolute filepaths.
 * @example
 * ls( '.', /\.js$/i ); // get only JavaScript files in current folder.
 */
function ls ( folder, pattern )
{
  return _readdir( folder ).then( function ( paths )
  {
    // an array of filepaths or null if it is not a file.
    var promises = paths.map( function ( path )
    {
      var absolute = _resolve( folder, path );

      return _lstat( absolute ).then( function ( stats )
      {
        if ( stats.isFile() && ( ! pattern || pattern.test( absolute ) ) ) {
          return absolute;
        }

        return null;
      } );
    } );

    return Promise.all( promises ).then( function ( /** @type {Array.<string?>} */ paths )
    {
      return paths.filter( function ( path )
      {
        return path !== null;
      } );
    } );
  } );
}

module.exports = ls;
