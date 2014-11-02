HTTPStatus
==========

The CommonJS module. The most comprehensive list of used http-codes.

####Features:
 * Includes additional codes used in Nginx, Microsoft, CloudFlare and others products.
 * Detailed description of the http-code from [Wikipedia](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes). See [source](./HTTPStatus.js).
 * Simple.

####Example usage:
```js
 // Get the status code
 HTTPStatus.NOT_FOUND; //> 404
 
 // Get the status description
 HTTPStatus[404]; //> 'Not found'
```
