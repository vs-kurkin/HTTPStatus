HTTPStatus
==========

The most comprehensive list of used http-codes.

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
 
 // or a method using
 HTTPStatus.getStatusText(HTTPStatus.NOT_FOUND) //> 'Not found'
 
 // or
 HTTPStatus.getStatusText(404) //> 'Not found'
```

####API:
`{String} HTTPStatus.getStatusText(code)`
Returns a text of the status code.

#####Parameters:
`{String|Number} code` - Status code.

####Codes:

#####1xx Informational
Request received, continuing process.

Code | Constant | Text
----|----|----
100 | CONTINUE | Continue
101 | SWITCHING_PROTOCOLS | Switching Protocols
102 | PROCESSING | Processing

#####2xx Success
This class of status codes indicates the action requested by the client was received, understood, accepted, and processed successfully.

Code | Constant | Text
----|----|----
200 | OK | OK
201 | CREATED | Created
202 | ACCEPTED | Accepted
203 | NON_AUTHORITATIVE_INFORMATION | Non-Authoritative Information
204 | NO_CONTENT | No Content
205 | RESET_CONTENT | Reset Content
206 | PARTIAL_CONTENT | Partial Content
207 | MULTI_STATUS | Multi-Status
208 | ALREADY_REPORTED | Already Reported
209 | IM_USED | IM Used

#####3xx Redirection
This class of status code indicates the client must take additional action to complete the request.

Code | Constant | Text
----|----|----
300 | MULTIPLE_CHOICES | Multiple Choices
301 | MOVED_PERMANENTLY | Moved Permanently
302 | FOUND | Found
303 | SEE_OTHER | See Other
304 | NOT_MODIFIED | Not Modified
305 | USE_PROXY | Use Proxy
306 | SWITCH_PROXY | Switch Proxy
307 | TEMPORARY_REDIRECT | Temporary Redirect
308 | PERMANENT_REDIRECT | Permanent Redirect

#####4xx Client Error
The 4xx class of status code is intended for situations in which the client seems to have erred.

Code | Constant | Text
----|----|----
400 | BAD_REQUEST | Bad Request
401 | UNAUTHORIZED | Unauthorized
402 | PAYMENT_REQUIRED | Payment Required
403 | FORBIDDEN | Forbidden
404 | NOT_FOUND | Not Found
405 | METHOD_NOT_ALLOWED | Method Not Allowed
406 | NOT_ACCEPTABLE | Not Acceptable
407 | PROXY_AUTHENTICATION_REQUIRED | Proxy Authentication Required
408 | REQUEST_TIMEOUT | Request Timeout
409 | CONFLICT | Conflict
410 | GONE | Gone
411 | LENGTH_REQUIRED | Length Required
412 | PRECONDITION_FAILED | Precondition Failed
413 | REQUEST_ENTITY_TOO_LARGE | Request Entity Too Large
414 | REQUEST_URI_TOO_LONG | Request-URI Too Long
415 | UNSUPPORTED_MEDIA_TYPE | Unsupported Media Type
416 | REQUESTED_RANGE_NOT_SATISFIABLE | Requested Range Not Satisfiable
417 | EXPECTATION_FAILED | Expectation Failed
418 | I_AM_A_TEAPOT | I'm a teapot
419 | AUTHENTICATION_TIMEOUT | Authentication Timeout
420 | METHOD_FAILURE | Method Failure (Spring Framework) / Enhance Your Calm (Twitter)
420 | ENHANCE_YOUR_CALM | Method Failure (Spring Framework) / Enhance Your Calm (Twitter)
422 | UNPROCESSABLE_ENTITY | Unprocessable Entity
423 | LOCKED | Locked
424 | FAILED_DEPENDENCY | Failed Dependency
426 | UPGRADE_REQUIRED | Upgrade Required
428 | PRECONDITION_REQUIRED | Precondition Required
429 | TOO_MANY_REQUESTS | Too Many Requests
431 | REQUEST_HEADER_FIELDS_TOO_LARGE | Request Header Fields Too Large
440 | LOGIN_TIMEOUT | Login Timeout (Microsoft)
444 | NO_RESPONSE | No Response (Nginx)
449 | RETRY_WITH | Retry With (Microsoft)
450 | BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS | Blocked by Windows Parental Controls (Microsoft)
451 | UNAVAILABLE_FOR_LEGAL_REASONS | Unavailable For Legal Reasons / Redirect (Microsoft)
451 | REDIRECT | Unavailable For Legal Reasons / Redirect (Microsoft)
494 | REQUEST_HEADER_TOO_LARGE | Request Header Too Large (Nginx)
495 | CERT_ERROR | Cert Error (Nginx)
496 | NO_CERT | No Cert (Nginx)
497 | HTTP_TO_HTTPS | HTTP to HTTPS (Nginx)
498 | TOKEN_EXPIRED | Token expired/invalid (Esri)
498 | TOKEN_INVALID | Token expired/invalid (Esri)
499 | CLIENT_CLOSED_REQUEST | Client Closed Request (Nginx) / Token required (Esri)
499 | TOKEN_REQUIRED | Client Closed Request (Nginx) / Token required (Esri)

#####5xx Server Error
The server failed to fulfill an apparently valid request.

Code | Constant | Text
----|----|----
500 | INTERNAL_SERVER_ERROR | Internal Server Error
501 | NOT_IMPLEMENTED | Not Implemented
502 | BAD_GATEWAY | Bad Gateway
503 | SERVICE_UNAVAILABLE | Service Unavailable
504 | GATEWAY_TIMEOUT | Gateway Timeout
505 | HTTP_VERSION_NOT_SUPPORTED | HTTP Version Not Supported
506 | VARIANT_ALSO_NEGOTIATES | Variant Also Negotiates
507 | INSUFFICIENT_STORAGE | Insufficient Storage
508 | LOOP_DETECTED | Loop Detected
509 | BANDWIDTH_LIMIT_EXCEEDED | Bandwidth Limit Exceeded (Apache bw/limited extension)
510 | NOT_EXTENDED | Not Extended
511 | NETWORK_AUTHENTICATION_REQUIRED | Network Authentication Required
520 | ORIGIN_ERROR | Origin Error (CloudFlare)
521 | WEB_SERVER_IS_DOWN | Web server is down (CloudFlare)
522 | CONNECTION_TIMED_OUT | Connection timed out (CloudFlare)
523 | PROXY_DECLINED_REQUEST | Proxy Declined Request (CloudFlare)
524 | A_TIMEOUT_OCCURRED | A timeout occurred (CloudFlare)
598 | NETWORK_READ_TIMEOUT_ERROR | Network read timeout error (Unknown)
599 | NETWORK_CONNECT_TIMEOUT_ERROR | Network connect timeout error (Unknown)
