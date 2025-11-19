"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/endpoint.ts
var endpoint_exports = {};
__export(endpoint_exports, {
    getApiEndpointCreator: function() {
        return getApiEndpointCreator;
    }
});
module.exports = __toCommonJS(endpoint_exports);
var import_moize = __toESM(require("moize"));
// src/graphqlRequest.ts
var import_axios = __toESM(require("axios"));
// src/types.ts
var GraphQLClientError = /*#__PURE__*/ function(Error1) {
    _inherits(_GraphQLClientError, Error1);
    var _super = _create_super(_GraphQLClientError);
    function _GraphQLClientError(responseData) {
        _class_call_check(this, _GraphQLClientError);
        var _this;
        _this = _super.call(this);
        _this.responseData = responseData;
        Object.setPrototypeOf(_assert_this_initialized(_this), _GraphQLClientError.prototype);
        return _this;
    }
    _create_class(_GraphQLClientError, [
        {
            key: "message",
            get: function get() {
                return this.response.errors.map(function(it) {
                    return it.message;
                }).join(";\n");
            }
        },
        {
            key: "response",
            get: function get() {
                return this.responseData;
            }
        }
    ]);
    return _GraphQLClientError;
}(_wrap_native_super(Error));
// src/graphqlRequest.ts
var sleep = function() {
    var ms = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return new Promise(function(resolve) {
        setTimeout(function() {
            return resolve();
        }, ms);
    });
};
function graphqlRequest(_) {
    return _graphqlRequest.apply(this, arguments);
}
function _graphqlRequest() {
    _graphqlRequest = _async_to_generator(function(param) {
        var _param_shouldRetry, shouldRetry, _param_axios, axios, queryName, client, query, _param_requestHeaders, requestHeaders, variables, failureMode, _lastResponse_errors, lastResponse, maxRetrials, trial, _errors, _errors1, _client_retryConfig, infoParams, _ref, tmp, responseData, headers, status, data, errors, warnings, _client_retryConfig1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _param_shouldRetry = param.shouldRetry, shouldRetry = _param_shouldRetry === void 0 ? true : _param_shouldRetry, _param_axios = param.axios, axios = _param_axios === void 0 ? import_axios.default : _param_axios, queryName = param.queryName, client = param.client, query = param.query, _param_requestHeaders = param.requestHeaders, requestHeaders = _param_requestHeaders === void 0 ? {} : _param_requestHeaders, variables = param.variables, failureMode = param.failureMode;
                    maxRetrials = shouldRetry ? client.retryConfig.max : 0;
                    trial = 0;
                    _state.label = 1;
                case 1:
                    if (!true) return [
                        3,
                        9
                    ];
                    infoParams = _object_spread({
                        _q: queryName
                    }, trial > 0 ? {
                        _retrial: trial + 1
                    } : {});
                    return [
                        4,
                        axios.post(client.url, {
                            query: query,
                            variables: variables,
                            operationName: queryName
                        }, {
                            params: infoParams,
                            headers: _object_spread({
                                "Content-Type": "application/json"
                            }, client.headers, requestHeaders),
                            validateStatus: function() {
                                return true;
                            }
                        })
                    ];
                case 2:
                    _ref = _state.sent(), tmp = _ref.data, responseData = tmp === void 0 ? {} : tmp, headers = _ref.headers, status = _ref.status;
                    data = responseData.data, errors = responseData.errors, warnings = responseData.warnings;
                    if (status >= 400 && !((_errors = errors) === null || _errors === void 0 ? void 0 : _errors.length)) {
                        errors = [
                            {
                                message: 'Request "'.concat(queryName, '" failed with status ').concat(status)
                            }
                        ];
                    }
                    lastResponse = {
                        errors: errors,
                        data: data,
                        warnings: warnings,
                        headers: headers,
                        status: status
                    };
                    if (!!((_errors1 = errors) === null || _errors1 === void 0 ? void 0 : _errors1.length)) return [
                        3,
                        3
                    ];
                    return [
                        3,
                        9
                    ];
                case 3:
                    if (!(trial < maxRetrials && typeof ((_client_retryConfig = client.retryConfig) === null || _client_retryConfig === void 0 ? void 0 : _client_retryConfig.before) === "function")) return [
                        3,
                        7
                    ];
                    return [
                        4,
                        (_client_retryConfig1 = client.retryConfig) === null || _client_retryConfig1 === void 0 ? void 0 : _client_retryConfig1.before({
                            queryName: queryName,
                            query: query,
                            variables: variables,
                            response: lastResponse
                        })
                    ];
                case 4:
                    _state.sent();
                    if (!client.retryConfig.waitBeforeRetry) return [
                        3,
                        6
                    ];
                    return [
                        4,
                        sleep(client.retryConfig.waitBeforeRetry)
                    ];
                case 5:
                    _state.sent();
                    _state.label = 6;
                case 6:
                    return [
                        3,
                        8
                    ];
                case 7:
                    if (trial >= maxRetrials) {
                        return [
                            3,
                            9
                        ];
                    }
                    _state.label = 8;
                case 8:
                    trial++;
                    return [
                        3,
                        1
                    ];
                case 9:
                    if (failureMode === "loud" && lastResponse.errors && ((_lastResponse_errors = lastResponse.errors) === null || _lastResponse_errors === void 0 ? void 0 : _lastResponse_errors.length)) {
                        throw new GraphQLClientError(lastResponse);
                    }
                    return [
                        2,
                        lastResponse
                    ];
            }
        });
    });
    return _graphqlRequest.apply(this, arguments);
}
// src/jsonToGraphQLQuery.ts
var import_omit = __toESM(require("lodash/omit"));
var VAR_PREFIX = "@@VAR@@";
var VAR_PREFIX_LENGTH = VAR_PREFIX.length;
var fromEntries = require("lodash/fromPairs");
var entries = require("lodash/toPairs");
var cloneDeep = require("lodash/cloneDeep");
function jsonToGraphQLQuery(param) {
    var kind = param.kind, queryName = param.queryName, _param_jsonQuery = param.jsonQuery, jsonQuery = _param_jsonQuery === void 0 ? {} : _param_jsonQuery, typesTree = param.typesTree;
    var variablesData = {};
    var alias = jsonQuery.__alias;
    var newJsonQuery = cloneDeep((0, import_omit.default)(jsonQuery, [
        "__alias",
        "__headers"
    ]));
    extractVariables({
        jsonQuery: _define_property({}, queryName, newJsonQuery),
        variables: variablesData,
        parentType: kind === "query" ? typesTree.Query : typesTree.Mutation
    });
    var variablesQuery = Object.keys(variablesData).length ? "(".concat(entries(variablesData).map(function(param) {
        var _param = _sliced_to_array(param, 2), queryName2 = _param[0], type = _param[1].type;
        return "$".concat(queryName2, ": ").concat(type);
    }).join(", "), ")") : "";
    var query = "".concat(kind, " ").concat(alias || queryName).concat(variablesQuery, " { ").concat(alias ? "".concat(alias, ":") : "").concat(queryName).concat(toGraphql(newJsonQuery), " }");
    var variables = fromEntries(entries(variablesData).map(function(param) {
        var _param = _sliced_to_array(param, 2), k = _param[0], v = _param[1];
        return [
            k,
            v.value
        ];
    }));
    return {
        query: query,
        variables: variables
    };
}
function extractVariables(param) {
    var jsonQuery = param.jsonQuery, variables = param.variables, parentType = param.parentType;
    if (!parentType) return;
    if (jsonQuery.__args) {
        Object.keys(jsonQuery.__args).forEach(function(k) {
            if (typeof jsonQuery.__args[k] === "string" && jsonQuery.__args[k].startsWith(VAR_PREFIX)) return;
            var variableName = "".concat(k, "_").concat(Math.random().toString(36).substr(2, 4));
            if (jsonQuery.__args[k] !== void 0) {
                variables[variableName] = {
                    type: parentType.__args[k],
                    value: jsonQuery.__args[k]
                };
                jsonQuery.__args[k] = "".concat(VAR_PREFIX, "$").concat(variableName);
            }
        });
    }
    Object.keys(jsonQuery).filter(function(k) {
        return k !== "__args" && typeof jsonQuery[k] === "object";
    }).forEach(function(k) {
        return extractVariables({
            jsonQuery: jsonQuery[k],
            variables: variables,
            parentType: parentType.hasOwnProperty(k) ? parentType[k] : parentType.__fields ? parentType.__fields[k] : void 0
        });
    });
}
function toGraphql(jsonQuery) {
    var fields = entries(jsonQuery).filter(function(param) {
        var _param = _sliced_to_array(param, 2), k = _param[0], v = _param[1];
        return k !== "__args" && v !== false && v !== void 0;
    }).map(function(param) {
        var _param = _sliced_to_array(param, 2), k = _param[0], v = _param[1];
        return typeof v === "object" ? "".concat(k).concat(toGraphql(v)) : k;
    }).join(" ");
    var validArgs = jsonQuery.__args ? entries(jsonQuery.__args).filter(function(param) {
        var _param = _sliced_to_array(param, 2), _ = _param[0], v = _param[1];
        return v !== void 0;
    }) : [];
    var argsQuery = validArgs.length ? "(".concat(validArgs.map(function(param) {
        var _param = _sliced_to_array(param, 2), k = _param[0], v = _param[1];
        return "".concat(k, ":").concat(v.substr(VAR_PREFIX_LENGTH));
    }).join(","), ")") : "";
    return "".concat(argsQuery, " ").concat(fields ? "{ ".concat(fields, " }") : "");
}
// src/logging.ts
function logRequest(logInfo) {
    var identifier = "%c#graphql-ts-client ".concat(logInfo.kind, " ").concat(logInfo.queryName);
    var identifierStyles = "color: transparent; font-size: 0px";
    console.groupCollapsed("%c#graphql-ts-client %c".concat(logInfo.kind, " %c").concat(logInfo.queryName, " %c(").concat(logInfo.duration.toFixed(2), "ms)"), "color: #f90", "color: #999", "color: ".concat(logInfo.response ? "unset" : "#f00", "; font-weight: bold"), "color: #999");
    console.groupCollapsed("%cQuery ".concat(identifier), "color: #999", identifierStyles);
    console.log(logInfo.formatGraphQL(logInfo.query) + identifier, identifierStyles);
    console.groupEnd();
    console.groupCollapsed("%cVariables ".concat(identifier), "color: #999", identifierStyles);
    console.log(JSON.stringify(logInfo.variables, null, "  ") + identifier, identifierStyles);
    console.groupEnd();
    console.groupCollapsed("%cTrace ".concat(identifier), "color: #999", identifierStyles);
    console.trace(identifier, identifierStyles);
    console.groupEnd();
    if (logInfo.response) {
        console.log("%cResponse".padEnd(15, " ") + identifier, "color: #999", identifierStyles, logInfo.response);
    }
    if (logInfo.error) {
        console.log("%cError".padEnd(15, " ") + identifier, "color: #999", identifierStyles, logInfo.error);
    }
    console.groupEnd();
}
// src/endpoint.ts
var executeListeners = function(listeners, data) {
    return setTimeout(function() {
        return listeners.forEach(function(runResponseListener) {
            return runResponseListener(data);
        });
    });
};
var getApiEndpointCreator = function(apiConfig) {
    return function(kind, queryName) {
        var rawEndpoint = function() {
            var _ref = _async_to_generator(function(failureMode, jsonQuery) {
                var _jsonQuery, _jsonQuery1, _jsonQuery2, _jsonQuery___alias, alias, _jsonQuery___retry, shouldRetry, _jsonQuery___headers, requestHeaders, _jsonToGraphQLQuery, query, variables, start, logOptions, responseListenerData, _data, _ref, data, errors, warnings, headers, status, response, error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            alias = (_jsonQuery___alias = (_jsonQuery = jsonQuery) === null || _jsonQuery === void 0 ? void 0 : _jsonQuery.__alias) !== null && _jsonQuery___alias !== void 0 ? _jsonQuery___alias : queryName;
                            shouldRetry = (_jsonQuery___retry = (_jsonQuery1 = jsonQuery) === null || _jsonQuery1 === void 0 ? void 0 : _jsonQuery1.__retry) !== null && _jsonQuery___retry !== void 0 ? _jsonQuery___retry : true;
                            requestHeaders = (_jsonQuery___headers = (_jsonQuery2 = jsonQuery) === null || _jsonQuery2 === void 0 ? void 0 : _jsonQuery2.__headers) !== null && _jsonQuery___headers !== void 0 ? _jsonQuery___headers : {};
                            _jsonToGraphQLQuery = jsonToGraphQLQuery({
                                kind: kind,
                                queryName: queryName,
                                jsonQuery: jsonQuery,
                                typesTree: apiConfig.typesTree
                            }), query = _jsonToGraphQLQuery.query, variables = _jsonToGraphQLQuery.variables;
                            start = +/* @__PURE__ */ new Date();
                            logOptions = {
                                kind: kind,
                                queryName: alias,
                                formatGraphQL: apiConfig.formatGraphQL,
                                requestHeaders: requestHeaders,
                                query: query,
                                variables: variables
                            };
                            responseListenerData = {
                                queryName: alias,
                                query: apiConfig.formatGraphQL(query),
                                variables: variables
                            };
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4,
                                graphqlRequest({
                                    shouldRetry: shouldRetry,
                                    failureMode: failureMode,
                                    queryName: alias,
                                    client: apiConfig.getClient(),
                                    requestHeaders: requestHeaders,
                                    query: query,
                                    variables: variables
                                })
                            ];
                        case 2:
                            _ref = _state.sent(), data = _ref.data, errors = _ref.errors, warnings = _ref.warnings, headers = _ref.headers, status = _ref.status;
                            response = {
                                data: data,
                                warnings: warnings,
                                headers: headers,
                                status: status,
                                errors: errors
                            };
                            if (apiConfig.verbose && globalThis.document) {
                                logRequest(_object_spread_props(_object_spread({}, logOptions), {
                                    response: response,
                                    duration: +/* @__PURE__ */ new Date() - start
                                }));
                            }
                            executeListeners(apiConfig.responseListeners, _object_spread_props(_object_spread({}, responseListenerData), {
                                response: response
                            }));
                            return [
                                2,
                                {
                                    data: (_data = data) === null || _data === void 0 ? void 0 : _data[alias],
                                    errors: errors,
                                    warnings: warnings,
                                    headers: headers,
                                    status: status
                                }
                            ];
                        case 3:
                            error = _state.sent();
                            if (apiConfig.verbose && globalThis.document) {
                                logRequest(_object_spread_props(_object_spread({}, logOptions), {
                                    error: error,
                                    duration: +/* @__PURE__ */ new Date() - start
                                }));
                            }
                            executeListeners(apiConfig.responseListeners, _object_spread_props(_object_spread({}, responseListenerData), {
                                response: error.response
                            }));
                            throw error;
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            });
            return function rawEndpoint(failureMode, jsonQuery) {
                return _ref.apply(this, arguments);
            };
        }();
        var endpoint = function() {
            var _ref = _async_to_generator(function(jsonQuery) {
                var data;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                rawEndpoint("loud", jsonQuery)
                            ];
                        case 1:
                            data = _state.sent().data;
                            return [
                                2,
                                data
                            ];
                    }
                });
            });
            return function endpoint(jsonQuery) {
                return _ref.apply(this, arguments);
            };
        }();
        var memoizeeOptions = {
            maxAge: apiConfig.maxAge,
            isSerialized: true
        };
        endpoint.raw = rawEndpoint.bind(null, "silent");
        endpoint.memo = (0, import_moize.default)(endpoint, memoizeeOptions);
        endpoint.memoRaw = (0, import_moize.default)(endpoint.raw, memoizeeOptions);
        return endpoint;
    };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    getApiEndpointCreator: getApiEndpointCreator
});
