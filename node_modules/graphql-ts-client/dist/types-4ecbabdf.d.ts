type Maybe<T> = null | undefined | T;
type Defined<T> = Exclude<T, undefined>;
type ResponseData = {
    data: any;
    warnings: any;
    headers: any;
    status?: number;
    errors: {
        message: string;
    }[];
};
type ResponseListenerInfo = {
    queryName: string;
    query: string;
    variables: any;
    response: ResponseData;
};
type IResponseListener = (info: ResponseListenerInfo) => void | Promise<void>;
type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
type Projection<Selection, Base, E = never> = Base extends Array<any> ? ArrayElement<Base> extends Date | string | number | boolean | null | undefined | E ? ArrayElement<Base>[] : Projection<Defined<Selection>, ArrayElement<Base>, E>[] : Base extends Date | string | number | boolean | null | E ? Selection extends undefined ? Base | undefined : Base : {
    [k in keyof Selection & keyof Base]: Selection[k] extends boolean ? Base[k] : Base[k] extends Array<infer A> ? Projection<Defined<Selection[k]>, A, E>[] : Projection<Defined<Selection[k]>, Base[k], E>;
};
type Unpacked<T> = T extends (infer U)[] ? U : T extends (...args: any[]) => infer U ? U : T extends Promise<infer U> ? U : T;
type Replacement<M extends [any, any], T> = M extends any ? ([T] extends [M[0]] ? M[1] : never) : never;
type DeepReplace<T, Ignore, M extends [any, any]> = {
    [P in keyof T]: T[P] extends M[0] ? T[P] extends Ignore ? T[P] extends object ? DeepReplace<T[P], Ignore, M> : T[P] : Replacement<M, T[P]> : T[P] extends object ? DeepReplace<T[P], Ignore, M> : T[P];
};
type RawEndpoint<I, O, E> = <S extends I>(jsonQuery?: S) => Promise<{
    data: Projection<S, O, E>;
    errors: any[];
    warnings: any[];
    headers: any;
    status: any;
}>;
type JsonOutput<O, ToBeIgnored> = DeepReplace<O, ToBeIgnored, [string | Date, string]>;
type Endpoint<I, O, E> = (<S extends I>(jsonQuery?: S) => Promise<Projection<S, JsonOutput<O, E>, E>>) & {
    memo: <S extends I>(jsonQuery?: S) => Promise<Projection<S, JsonOutput<O, E>, E>>;
    memoRaw: RawEndpoint<I, JsonOutput<O, E>, E>;
    raw: RawEndpoint<I, JsonOutput<O, E>, E>;
};
type ClientConfig = {
    url: string;
    headers: {
        [key: string]: string;
    };
    retryConfig: {
        max: number;
        waitBeforeRetry?: number;
        before: IResponseListener;
    };
};
type LogInfo = {
    query: string;
    variables: any;
    formatGraphQL: any;
    kind: string;
    queryName: string;
    response?: any;
    error?: Error;
    duration: number;
};
declare class GraphQLClientError extends Error {
    responseData: ResponseData;
    constructor(responseData: ResponseData);
    get message(): string;
    get response(): ResponseData;
}

export { ClientConfig as C, Defined as D, Endpoint as E, GraphQLClientError as G, IResponseListener as I, JsonOutput as J, LogInfo as L, Maybe as M, Projection as P, ResponseData as R, Unpacked as U, ResponseListenerInfo as a, Replacement as b, DeepReplace as c, RawEndpoint as d };
