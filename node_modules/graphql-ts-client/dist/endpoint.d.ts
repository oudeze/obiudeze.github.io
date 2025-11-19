import { C as ClientConfig, I as IResponseListener, E as Endpoint } from './types-4ecbabdf.js';

declare const getApiEndpointCreator: (apiConfig: {
    getClient: () => ClientConfig;
    responseListeners: IResponseListener[];
    typesTree: any;
    maxAge: number;
    verbose: boolean;
    formatGraphQL: any;
}) => <I = any, O = any, E = any>(kind: 'mutation' | 'query', queryName: string) => Endpoint<I, O, E>;

export { getApiEndpointCreator };
