/**
 * @fileOverview List of HTTP status codes.
 * @author Vladislav Kurkin <b-vladi@cs-console.ru>
 */

/**
 * List of HTTP status codes.
 * The following is a list of Hypertext Transfer Protocol (HTTP) response status codes. This includes codes from
 * IETF internet standards as well as other IETF RFCs, other specifications and some additional commonly used codes.
 * The first digit of the status code specifies one of five classes of response; the bare minimum for an HTTP client
 * is that it recognises these five classes. The phrases used are the standard examples, but any human-readable
 * alternative can be provided. Unless otherwise stated, the status code is part of the HTTP/1.1 standard (RFC 7231).
 *
 * The Internet Assigned Numbers Authority (IANA) maintains the official registry of HTTP status codes.
 *
 * Microsoft IIS sometimes uses additional decimal sub-codes to provide more specific information, but these are
 * not listed here.
 *
 * @namespace HTTPStatus
 * @type {Object}
 * @see http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 * @example
 * // Get the status code
 * HTTPStatus.NOT_FOUND; //> 404
 *
 * // Get the status description
 * HTTPStatus[404]; //> 'Not found'
 * // or
 * HTTPStatus[HTTPStatus.NOT_FOUND];'
 */
module.exports = {
    /*
    * 1xx Informational
    * */

    /**
     * This means that the server has received the request headers,
     * and that the client should proceed to send the request body (in the case of a request for which a body
     * needs to be sent; for example, a POST request).
     * If the request body is large, sending it to a server when a request has already been rejected based upon
     * inappropriate headers is inefficient. To have a server check if the request could be accepted based on the
     * request's headers alone, a client must send Expect: 100-continue as a header in its initial request and
     * check if a {@link HTTPStatus.CONTINUE} (100) status code is received in response before continuing (or
     * receive {@link HTTPStatus.EXPECTATION_FAILED} (417) and not continue).
     * @type {Number}
     * @default 100
     * @const
     */
    CONTINUE: 100,

    /**
     * This means the requester has asked the server to switch protocols and the server is acknowledging that
     * it will do so.
     * @type {Number}
     * @default 101
     * @const
     */
    SWITCHING_PROTOCOLS: 101,

    /**
     * As a WebDAV request may contain many sub-requests involving file operations, it may take a long time to
     * complete the request. This code indicates that the server has received and is processing the request,
     * but no response is available yet. This prevents the client from timing out and assuming the request was lost.
     * @see WebDAV
     * @see RFC-2518
     * @type {Number}
     * @default 102
     * @const
     */
    PROCESSING: 102,

    /*
    * 2xx Success
    * */

    /**
     * Standard response for successful HTTP requests. The actual response will depend on the request method used.
     * In a GET request, the response will contain an entity corresponding to the requested resource.
     * In a POST request the response will contain an entity describing or containing the result of the action.
     * @type {Number}
     * @default 200
     * @const
     */
    OK: 200,

    /**
     * The request has been fulfilled and resulted in a new resource being created.
     * @type {Number}
     * @default 201
     * @const
     */
    CREATED: 201,

    /**
     * The request has been accepted for processing, but the processing has not been completed. The request might or
     * might not eventually be acted upon, as it might be disallowed when processing actually takes place.
     * @type {Number}
     * @default 202
     * @const
     */
    ACCEPTED: 202,

    /**
     * The server successfully processed the request, but is returning information that may be from another source.
     * @since HTTP/1.1
     * @type {Number}
     * @default 203
     * @const
     */
    NON_AUTHORITATIVE_INFORMATION: 203,

    /**
     * The server successfully processed the request, but is not returning any content. Usually used as a response to
     * a successful delete request.
     * @type {Number}
     * @default 204
     * @const
     */
    NO_CONTENT: 204,

    /**
     * The server successfully processed the request, but is not returning any content. Unlike a
     * {@link HTTPStatus.NO_CONTENT} response, this response requires that the requester reset the document view.
     * @type {Number}
     * @default 205
     * @const
     */
    RESET_CONTENT: 205,

    /**
     * The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
     * The range header is used by tools like wget to enable resuming of interrupted downloads, or split a download
     * into multiple simultaneous streams.
     * @type {Number}
     * @default 206
     * @const
     */
    PARTIAL_CONTENT: 206,

    /**
     * The message body that follows is an XML message and can contain a number of separate response codes, depending
     * on how many sub-requests were made.
     * @see RFC-4918
     * @type {Number}
     * @default 207
     * @const
     */
    MULTI_STATUS: 207,

    /**
     * The members of a DAV binding have already been enumerated in a previous reply to this request, and are not
     * being included again.
     * @see WebDAV
     * @see RFC-5842
     * @type {Number}
     * @default 208
     * @const
     */
    ALREADY_REPORTED: 208,

    /**
     * The server has fulfilled a request for the resource, and the response is a representation of the result
     * of one or more instance-manipulations applied to the current instance.
     * @see RFC-3229
     * @type {Number}
     * @default 209
     * @const
     */
    IM_USED: 209,

    /*
    * 3xx Redirection
    * */

    /**
     * Indicates multiple options for the resource that the client may follow. It, for instance, could be used to
     * present different format options for video, list files with different extensions, or word sense disambiguation.
     * @type {Number}
     * @default 300
     * @const
     */
    MULTIPLE_CHOICES: 300,

    /**
     * This and all future requests should be directed to the given URI.
     * @see http://en.wikipedia.org/wiki/301_Moved_Permanently
     * @type {Number}
     * @default 301
     * @const
     */
    MOVED_PERMANENTLY: 301,

    /**
     * This is an example of industry practice contradicting the standard.
     * The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect
     * (the original describing phrase was "Moved Temporarily"), but popular browsers implemented
     * {@link HTTPStatus.FOUND} (302) with the functionality of a {@link HTTPStatus.SEE_OTHER} (303). Therefore,
     * HTTP/1.1 added status codes {@link HTTPStatus.SEE_OTHER} (303) and {@link HTTPStatus.TEMPORARY_REDIRECT} (307) to
     * distinguish between the two behaviours. However, some Web applications and frameworks use the
     * {@link HTTPStatus.FOUND} (302) status code as if it were the {@link HTTPStatus.SEE_OTHER} (303).
     * @see http://en.wikipedia.org/wiki/302_Found
     * @type {Number}
     * @default 302
     * @const
     */
    FOUND: 302,

    /**
     * The response to the request can be found under another URI using a GET method. When received in response
     * to a POST (or PUT/DELETE), it should be assumed that the server has received the data and the redirect should be
     * issued with a separate GET message.
     * @see http://en.wikipedia.org/wiki/303_See_Other
     * @since HTTP/1.1
     * @type {Number}
     * @default 303
     * @const
     */
    SEE_OTHER: 303,

    /**
     * Indicates that the resource has not been modified since the version specified by the request headers
     * If-Modified-Since or If-Match. This means that there is no need to retransmit the resource, since the client
     * still has a previously-downloaded copy.
     * @type {Number}
     * @default 304
     * @const
     */
    NOT_MODIFIED: 304,

    /**
     * The requested resource is only available through a proxy, whose address is provided in the response.
     * Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this
     * status code, primarily for security reasons.
     * @since HTTP/1.1
     * @type {Number}
     * @default 305
     * @const
     */
    USE_PROXY: 305,

    /**
     * No longer used. Originally meant "Subsequent requests should use the specified proxy".
     * @type {Number}
     * @default 306
     * @const
     */
    SWITCH_PROXY: 306,

    /**
     * In this case, the request should be repeated with another URI; however, future requests should still use
     * the original URI. In contrast to how {@link HTTPStatus.FOUND} (302) was historically implemented,
     * the request method is not allowed to be changed when reissuing the original request. For instance, a POST
     * request should be repeated using another POST request.
     * @since HTTP/1.1
     * @type {Number}
     * @default 307
     * @const
     */
    TEMPORARY_REDIRECT: 307,

    /**
     * The request, and all future requests should be repeated using another URI.
     * {@link HTTPStatus.TEMPORARY_REDIRECT} (307) and {@link HTTPStatus.PERMANENT_REDIRECT} (308) (as proposed)
     * parallel the behaviours of {@link HTTPStatus.FOUND} (302) and {@link HTTPStatus.MOVED_PERMANENTLY} (301),
     * but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected
     * resource may continue smoothly.
     * @see RFC-7238
     * @type {Number}
     * @default 308
     * @const
     */
    PERMANENT_REDIRECT: 308,

    /*
    * 4xx Client Error
    * */

    /**
     * The server cannot or will not process the request due to something that is perceived to be a client error.
     * @type {Number}
     * @default 400
     * @const
     */
    BAD_REQUEST: 400,

    /**
     * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not
     * yet been provided. The response must include a WWW-Authenticate header field containing a challenge applicable
     * to the requested resource. See Basic access authentication and Digest access authentication.
     * @type {Number}
     * @default 401
     * @const
     */
    UNAUTHORIZED: 401,

    /**
     * Reserved for future use. The original intention was that this code might be used as part of some form of digital
     * cash or micropayment scheme, but that has not happened, and this code is not usually used.
     * YouTube uses this status if a particular IP address has made excessive requests, and requires the person to
     * enter a CAPTCHA.
     * @type {Number}
     * @default 402
     * @const
     */
    PAYMENT_REQUIRED: 402,

    /**
     * The request was a valid request, but the server is refusing to respond to it. Unlike a
     * {@link HTTPStatus.UNAUTHORIZED} (401) response, authenticating will make no difference.
     * @see http://en.wikipedia.org/wiki/HTTP_403
     * @type {Number}
     * @default 403
     * @const
     */
    FORBIDDEN: 403,

    /**
     * The requested resource could not be found but may be available again in the future.
     * Subsequent requests by the client are permissible.
     * @see http://en.wikipedia.org/wiki/HTTP_404
     * @type {Number}
     * @default 404
     * @const
     */
    NOT_FOUND: 404,

    /**
     * A request was made of a resource using a request method not supported by that resource; for example,
     * using GET on a form which requires data to be presented via POST, or using PUT on a read-only resource.
     * @type {Number}
     * @default 405
     * @const
     */
    METHOD_NOT_ALLOWED: 405,

    /**
     * The requested resource is only capable of generating content not acceptable according to the Accept headers
     * sent in the request.
     * @type {Number}
     * @default 406
     * @const
     */
    NOT_ACCEPTABLE: 406,

    /**
     * The client must first authenticate itself with the proxy.
     * @type {Number}
     * @default 407
     * @const
     */
    PROXY_AUTHENTICATION_REQUIRED: 407,

    /**
     * The server timed out waiting for the request. According to HTTP specifications: "The client did not produce a
     * request within the time that the server was prepared to wait. The client MAY repeat the request without
     * modifications at any later time".
     * @type {Number}
     * @default 408
     * @const
     */
    REQUEST_TIMEOUT: 408,

    /**
     * Indicates that the request could not be processed because of conflict in the request, such as an edit
     * conflict in the case of multiple updates.
     * @type {Number}
     * @default 409
     * @const
     */
    CONFLICT: 409,

    /**
     * Indicates that the resource requested is no longer available and will not be available again.
     * This should be used when a resource has been intentionally removed and the resource should be purged.
     * Upon receiving a 410 status code, the client should not request the resource again in the future.
     * Clients such as search engines should remove the resource from their indices. Most use cases do not require
     * clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
     * @type {Number}
     * @default 410
     * @const
     */
    GONE: 410,

    /**
     * The request did not specify the length of its content, which is required by the requested resource.
     * @type {Number}
     * @default 411
     * @const
     */
    LENGTH_REQUIRED: 411,

    /**
     * The server does not meet one of the preconditions that the requester put on the request.
     * @type {Number}
     * @default 412
     * @const
     */
    PRECONDITION_FAILED: 412,

    /**
     * The request is larger than the server is willing or able to process.
     * @type {Number}
     * @default 413
     * @const
     */
    REQUEST_ENTITY_TOO_LARGE: 413,

    /**
     * The URI provided was too long for the server to process. Often the result of too much data being encoded as
     * a query-string of a GET request, in which case it should be converted to a POST request.
     * @type {Number}
     * @default 414
     * @const
     */
    REQUEST_URI_TOO_LONG: 414,

    /**
     * The request entity has a media type which the server or resource does not support. For example,
     * the client uploads an image as image/svg+xml, but the server requires that images use a different format.
     * @type {Number}
     * @default 415
     * @const
     */
    UNSUPPORTED_MEDIA_TYPE: 415,

    /**
     * The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
     * For example, if the client asked for a part of the file that lies beyond the end of the file.
     * @type {Number}
     * @default 416
     * @const
     */
    REQUESTED_RANGE_NOT_SATISFIABLE: 416,

    /**
     * The server cannot meet the requirements of the Expect request-header field.
     * @type {Number}
     * @default 417
     * @const
     */
    EXPECTATION_FAILED: 417,

    /**
     * This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324,
     * Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers.
     * @see RFC-2324
     * @type {Number}
     * @default 418
     * @const
     */
    I_AM_A_TEAPOT: 418,

    /**
     * Not a part of the HTTP standard, 419 Authentication Timeout denotes that previously valid authentication has
     * expired. It is used as an alternative to {@link HTTPStatus.UNAUTHORIZED} (401) in order to differentiate from otherwise
     * authenticated clients being denied access to specific server resources.
     * @see RFC-2616
     * @type {Number}
     * @default 419
     * @const
     */
    AUTHENTICATION_TIMEOUT: 419,

    /**
     * Not part of the HTTP standard, but defined by Spring in the HttpStatus class to be used when a method failed.
     * This status code is deprecated by Spring.
     * @see http://en.wikipedia.org/wiki/Spring_Framework
     * @type {Number}
     * @default 420
     * @const
     */
    METHOD_FAILURE: 420,

    /**
     * Not part of the HTTP standard, but returned by version 1 of the Twitter Search and Trends API when the client
     * is being rate limited. Other services may wish to implement the {@link HTTPStatus.TOO_MANY_REQUESTS} (429) response code instead.
     * @type {Number}
     * @default 420
     * @const
     */
    ENHANCE_YOUR_CALM: 420,

    /**
     * The request was well-formed but was unable to be followed due to semantic errors.
     * @see RFC-4918
     * @type {Number}
     * @default 422
     * @const
     */
    UNPROCESSABLE_ENTITY: 422,

    /**
     * The resource that is being accessed is locked.
     * @type {Number}
     * @default 423
     * @const
     */
    LOCKED: 423,

    /**
     * The request failed due to failure of a previous request (e.g., a PROPPATCH).
     * @see RFC-4918
     * @type {Number}
     * @default 424
     * @const
     */
    FAILED_DEPENDENCY: 424,

    /**
     * The client should switch to a different protocol such as TLS/1.0.
     * @type {Number}
     * @default 426
     * @const
     */
    UPGRADE_REQUIRED: 426,

    /**
     * The origin server requires the request to be conditional. Intended to prevent "the 'lost update' problem,
     * where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third
     * party has modified the state on the server, leading to a conflict".
     * @see RFC-6585
     * @type {Number}
     * @default 428
     * @const
     */
    PRECONDITION_REQUIRED: 428,

    /**
     * The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.
     * @see RFC-6585
     * @type {Number}
     * @default 429
     * @const
     */
    TOO_MANY_REQUESTS: 429,

    /**
     * The server is unwilling to process the request because either an individual header field, or all the header
     * fields collectively, are too large.
     * @see RFC-6585
     * @type {Number}
     * @default 431
     * @const
     */
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,

    /**
     * A Microsoft extension. Indicates that your session has expired.
     * @type {Number}
     * @default 440
     * @const
     */
    LOGIN_TIMEOUT: 440,

    /**
     * Used in Nginx logs to indicate that the server has returned no information to the client and closed the
     * connection (useful as a deterrent for malware).
     * @type {Number}
     * @default 444
     * @const
     */
    NO_RESPONSE: 444,

    /**
     * A Microsoft extension. The request should be retried after performing the appropriate action.
     * Often search-engines or custom applications will ignore required parameters. Where no default action is
     * appropriate, the Aviongoo website sends a "HTTP/1.1 449 Retry with valid parameters: param1, param2, . . ."
     * response. The applications may choose to learn, or not.
     * @type {Number}
     * @default 449
     * @const
     */
    RETRY_WITH: 449,

    /**
     * A Microsoft extension. This error is given when Windows Parental Controls are turned on and are blocking
     * access to the given webpage.
     * @type {Number}
     * @default 450
     * @const
     */
    BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,

    /**
     * Defined in the internet draft "A New HTTP Status Code for Legally-restricted Resources". Intended to be
     * used when resource access is denied for legal reasons, e.g. censorship or government-mandated blocked access.
     * A reference to the 1953 dystopian novel Fahrenheit 451, where books are outlawed.
     * @see http://en.wikipedia.org/wiki/HTTP_451
     * @type {Number}
     * @default 451
     * @const
     */
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,

    /**
     * Used in Exchange ActiveSync if there either is a more efficient server to use or the server cannot access the
     * users' mailbox. The client is supposed to re-run the HTTP Autodiscovery protocol to find a better suited server.
     * @type {Number}
     * @default 451
     * @const
     */
    REDIRECT: 451,

    /**
     * Nginx internal code similar to {@link HTTPStatus.REQUEST_HEADER_FIELDS_TOO_LARGE} (431) but it was introduced earlier in version 0.9.4 (on January 21, 2011).
     * @type {Number}
     * @default 494
     * @const
     */
    REQUEST_HEADER_TOO_LARGE: 494,

    /**
     * Nginx internal code used when SSL client certificate error occurred to distinguish it from 4XX in a log and
     * an error page redirection.
     * @type {Number}
     * @default 495
     * @const
     */
    CERT_ERROR: 495,

    /**
     * Nginx internal code used when client didn't provide certificate to distinguish it from 4XX in a log and an
     * error page redirection.
     * @type {Number}
     * @default 496
     * @const
     */
    NO_CERT: 496,

    /**
     * Nginx internal code used for the plain HTTP requests that are sent to HTTPS port to distinguish it from 4XX
     * in a log and an error page redirection.
     * @type {Number}
     * @default 497
     * @const
     */
    HTTP_TO_HTTPS: 497,

    /**
     * Returned by ArcGIS for Server. A code of 498 indicates an expired or otherwise invalid token.
     * @type {Number}
     * @default 498
     * @const
     */
    TOKEN_EXPIRED: 498,

    /**
     * {@link HTTPStatus.TOKEN_EXPIRED}
     * @type {Number}
     * @default 498
     * @const
     */
    TOKEN_INVALID: 498,

    /**
     * Used in Nginx logs to indicate when the connection has been closed by client while the server is still
     * processing its request, making server unable to send a status code back.
     * @type {Number}
     * @default 499
     * @const
     */
    CLIENT_CLOSED_REQUEST: 499,

    /**
     * Returned by ArcGIS for Server. A code of 499 indicates that a token is required (if no token was submitted).
     * @type {Number}
     * @default 499
     * @const
     */
    TOKEN_REQUIRED: 499,

    /*
    * 5xx Server Error
    * */

    /**
     * A generic error message, given when an unexpected condition was encountered and no more specific message
     * is suitable.
     * @type {Number}
     * @default 500
     * @const
     */
    INTERNAL_SERVER_ERROR: 500,

    /**
     * The server either does not recognize the request method, or it lacks the ability to fulfil the request.
     * Usually this implies future availability (e.g., a new feature of a web-service API).
     * @type {Number}
     * @default 501
     * @const
     */
    NOT_IMPLEMENTED: 501,

    /**
     * The server was acting as a gateway or proxy and received an invalid response from the upstream server.
     * @type {Number}
     * @default 502
     * @const
     */
    BAD_GATEWAY: 502,

    /**
     * The server is currently unavailable (because it is overloaded or down for maintenance).
     * Generally, this is a temporary state.
     * @type {Number}
     * @default 503
     * @const
     */
    SERVICE_UNAVAILABLE: 503,

    /**
     * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
     * @type {Number}
     * @default 504
     * @const
     */
    GATEWAY_TIMEOUT: 504,

    /**
     * The server does not support the HTTP protocol version used in the request.
     * @type {Number}
     * @default 505
     * @const
     */
    HTTP_VERSION_NOT_SUPPORTED: 505,

    /**
     * Transparent content negotiation for the request results in a circular reference.
     * @see RFC-2295
     * @type {Number}
     * @default 506
     * @const
     */
    VARIANT_ALSO_NEGOTIATES: 506,

    /**
     * The server is unable to store the representation needed to complete the request.
     * @see RFC-4918
     * @type {Number}
     * @default 507
     * @const
     */
    INSUFFICIENT_STORAGE: 507,

    /**
     * The server detected an infinite loop while processing the request
     * (sent in lieu of {@link HTTPStatus.REQUEST_HEADER_FIELDS_TOO_LARGE} (208)).
     * @see RFC-5842
     * @type {Number}
     * @default 508
     * @const
     */
    LOOP_DETECTED: 508,

    /**
     * Apache bw/limited extension. This status code is not specified in any RFCs. Its use is unknown.
     * @type {Number}
     * @default 509
     * @const
     */
    BANDWIDTH_LIMIT_EXCEEDED: 509,

    /**
     * Further extensions to the request are required for the server to fulfil it.
     * @see RFC-2774
     * @type {Number}
     * @default 510
     * @const
     */
    NOT_EXTENDED: 510,

    /**
     * The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to
     * control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before
     * granting full Internet access via a Wi-Fi hotspot).
     * @see RFC-6585
     * @type {Number}
     * @default 511
     * @const
     */
    NETWORK_AUTHENTICATION_REQUIRED: 511,

    /**
     * This status code is not specified in any RFCs, but is used by CloudFlare's reverse proxies to signal an
     * "unknown connection issue between CloudFlare and the origin web server" to a client in front of the proxy.
     * @type {Number}
     * @default 520
     * @const
     */
    ORIGIN_ERROR: 520,

    /**
     * This status code is not specified in any RFCs, but is used by CloudFlare's reverse proxies to indicate that
     * the origin webserver refused the connection.
     * @type {Number}
     * @default 521
     * @const
     */
    WEB_SERVER_IS_DOWN: 521,

    /**
     * This status code is not specified in any RFCs, but is used by CloudFlare's reverse proxies to signal that a
     * server connection timed out.
     * @type {Number}
     * @default 522
     * @const
     */
    CONNECTION_TIMED_OUT: 522,

    /**
     * This status code is not specified in any RFCs, but is used by CloudFlare's reverse proxies to signal a
     * resource that has been blocked by the administrator of the website or proxy itself.
     * @type {Number}
     * @default 523
     * @const
     */
    PROXY_DECLINED_REQUEST: 523,

    /**
     * This status code is not specified in any RFCs, but is used by CloudFlare's reverse proxies to signal a
     * network read timeout behind the proxy to a client in front of the proxy.
     * @type {Number}
     * @default 524
     * @const
     */
    A_TIMEOUT_OCCURRED: 524,

    /**
     * This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network
     * read timeout behind the proxy to a client in front of the proxy.
     * @type {Number}
     * @default 598
     * @const
     */
    NETWORK_READ_TIMEOUT_ERROR: 598,

    /**
     * This status code is not specified in any RFCs, but is used by Microsoft HTTP proxies to signal a network
     * connect timeout behind the proxy to a client in front of the proxy.
     * @type {Number}
     * @default 599
     * @const
     */
    NETWORK_CONNECT_TIMEOUT_ERROR: 599,

    /*
    * Status description
    * */
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',

    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    209: 'IM Used',

    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    306: 'Switch Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',

    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I\'m a teapot',
    419: 'Authentication Timeout',
    420: 'Method Failure (Spring Framework) / Enhance Your Calm (Twitter)',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    440: 'Login Timeout (Microsoft)',
    444: 'No Response (Nginx)',
    449: 'Retry With (Microsoft)',
    450: 'Blocked by Windows Parental Controls (Microsoft)',
    451: 'Unavailable For Legal Reasons / Redirect (Microsoft)',
    494: 'Request Header Too Large (Nginx)',
    495: 'Cert Error (Nginx)',
    496: 'No Cert (Nginx)',
    497: 'HTTP to HTTPS (Nginx)',
    498: 'Token expired/invalid (Esri)',
    499: 'Client Closed Request (Nginx) / Token required (Esri)',

    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    509: 'Bandwidth Limit Exceeded (Apache bw/limited extension)',
    510: 'Not Extended',
    511: 'Network Authentication Required',
    520: 'Origin Error (CloudFlare)',
    521: 'Web server is down (CloudFlare)',
    522: 'Connection timed out (CloudFlare)',
    523: 'Proxy Declined Request (CloudFlare)',
    524: 'A timeout occurred (CloudFlare)',
    598: 'Network read timeout error (Unknown)',
    599: 'Network connect timeout error (Unknown)'
};

