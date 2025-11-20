import { PathLike } from 'fs';
export { C as ClientConfig, c as DeepReplace, D as Defined, E as Endpoint, G as GraphQLClientError, I as IResponseListener, J as JsonOutput, L as LogInfo, M as Maybe, P as Projection, d as RawEndpoint, b as Replacement, R as ResponseData, a as ResponseListenerInfo, U as Unpacked } from './types-4ecbabdf.js';

type IClientOptions = {
    output?: PathLike;
    clientName?: string;
    headers?: {
        [key: string]: string;
    };
    introspectionEndpoint?: string;
    endpoint: string;
    verbose?: boolean;
    formatGraphQL?: boolean;
    skipCache?: boolean;
};
declare function generateTypescriptClient({ introspectionEndpoint, output, ...options }: IClientOptions): Promise<{
    typings: string;
    js: string;
}>;

export { generateTypescriptClient };
