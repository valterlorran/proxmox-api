import { ApiRequestable } from "./proxy";
export interface ProxmoxEngineOptions {
    host: string;
    port?: number;
    schema?: 'https' | 'http';
    username?: string;
    password: string;
    authTimeout?: number;
    queryTimeout?: number;
    agent?: any;
}
/**
 * keep the API engine there is non direct acess needed
 */
export declare class ProxmoxEngine implements ApiRequestable {
    CSRFPreventionToken?: string;
    ticket?: string;
    private username;
    private password;
    private host;
    private port;
    private schema;
    private authTimeout;
    private queryTimeout;
    private agent?;
    constructor(options: ProxmoxEngineOptions);
    doRequest(httpMethod: string, path: string, pathTemplate: string, params?: {
        [key: string]: any;
    }, retries?: number): Promise<any>;
    getTicket(): Promise<string>;
}
export default ProxmoxEngine;
