export interface IAdapterHTTPOptions {
    host: string;
    port: number;
}
export interface IAdapterOptions {
    token: string;
    tokenSecret: string;
    username: string;
    logLevel?: string;
    http?: IAdapterHTTPOptions;
    serviceID?: string;
}
export interface IWebHookEvent {
    response: any;
    request: any;
}