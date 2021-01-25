/**
 * Generic type for Api parameters
 */
export declare type ApiParamType = {
    [key: string]: any;
};
/**
 * common interface used to call API engine
 */
export interface ApiRequestable {
    /**
     * Execute a request on the API with promise
     *
     * @param httpMethod: The HTTP method GET POST PUT DELETE
     * @param path: The request final path
     * @param pathTemplate: The request path with {pathParams}
     * @param params: The request parameters (passed as query string or body params)
     */
    doRequest(httpMethod: string, path: string, pathTemplate: string, params?: {
        [key: string]: any;
    }): Promise<any>;
}
/**
 * Build API API Proxy
 *
 * @param engine Api logic code
 * @param path base prefix for url
 */
export declare function buildApiProxy(engine: ApiRequestable, path: string): any;
