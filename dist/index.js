/** @license Apache-2.0 */

'use strict';

/**
* Return an array of an object's own non-enumerable property names.
*
* @module @stdlib/utils-nonenumerable-property-names
*
* @example
* var defineProperty = require( '@stdlib/utils-define-property' );
* var nonEnumerablePropertyNames = require( '@stdlib/utils-nonenumerable-property-names' );
*
* var obj = {};
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': false,
*     'writable': false,
*     'value': 'boop'
* });
*
* var keys = nonEnumerablePropertyNames( obj );
* // returns [ 'beep' ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
