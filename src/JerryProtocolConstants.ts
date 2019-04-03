/*
 * Copyright 2018-present Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// Expected JerryScript debugger protocol version.
export const JERRY_DEBUGGER_VERSION = 9;

// Packages sent from the server to the client.
export enum SERVER {
  JERRY_DEBUGGER_CONFIGURATION = 1,
  JERRY_DEBUGGER_PARSE_ERROR = 2,
  JERRY_DEBUGGER_BYTE_CODE_CP = 3,
  JERRY_DEBUGGER_PARSE_FUNCTION = 4,
  JERRY_DEBUGGER_BREAKPOINT_LIST = 5,
  JERRY_DEBUGGER_BREAKPOINT_OFFSET_LIST = 6,
  JERRY_DEBUGGER_SOURCE_CODE = 7,
  JERRY_DEBUGGER_SOURCE_CODE_END = 8,
  JERRY_DEBUGGER_SOURCE_CODE_NAME = 9,
  JERRY_DEBUGGER_SOURCE_CODE_NAME_END = 10,
  JERRY_DEBUGGER_FUNCTION_NAME = 11,
  JERRY_DEBUGGER_FUNCTION_NAME_END = 12,
  JERRY_DEBUGGER_WAITING_AFTER_PARSE = 13,
  JERRY_DEBUGGER_RELEASE_BYTE_CODE_CP = 14,
  JERRY_DEBUGGER_MEMSTATS_RECEIVE = 15,
  JERRY_DEBUGGER_BREAKPOINT_HIT = 16,
  JERRY_DEBUGGER_EXCEPTION_HIT = 17,
  JERRY_DEBUGGER_EXCEPTION_STR = 18,
  JERRY_DEBUGGER_EXCEPTION_STR_END = 19,
  JERRY_DEBUGGER_BACKTRACE_TOTAL = 20,
  JERRY_DEBUGGER_BACKTRACE = 21,
  JERRY_DEBUGGER_BACKTRACE_END = 22,
  JERRY_DEBUGGER_EVAL_RESULT = 23,
  JERRY_DEBUGGER_EVAL_RESULT_END = 24,
  JERRY_DEBUGGER_WAIT_FOR_SOURCE = 25,
  JERRY_DEBUGGER_OUTPUT_RESULT = 26,
  JERRY_DEBUGGER_OUTPUT_RESULT_END = 27,
  JERRY_DEBUGGER_SCOPE_CHAIN = 28,
  JERRY_DEBUGGER_SCOPE_CHAIN_END = 29,
  JERRY_DEBUGGER_SCOPE_VARIABLES = 30,
  JERRY_DEBUGGER_SCOPE_VARIABLES_END = 31,
  JERRY_DEBUGGER_CLOSE_CONNECTION = 32
}

// Subtypes of eval.
export enum EVAL_SUBTYPE {
  JERRY_DEBUGGER_EVAL_EVAL = '\0',
  JERRY_DEBUGGER_EVAL_THROW = '\1',
  JERRY_DEBUGGER_EVAL_ABORT = '\2'
}

// Subtypes of the eval message result.
export enum EVAL_RESULT_SUBTYPE {
  JERRY_DEBUGGER_EVAL_OK = 1,
  JERRY_DEBUGGER_EVAL_ERROR = 2
}

// Subtypes of the output message result.
export enum OUTPUT_SUBTYPE {
  JERRY_DEBUGGER_OUTPUT_OK = 1,
  JERRY_DEBUGGER_OUTPUT_ERROR = 2,
  JERRY_DEBUGGER_OUTPUT_WARNING = 3,
  JERRY_DEBUGGER_OUTPUT_DEBUG = 4,
  JERRY_DEBUGGER_OUTPUT_TRACE = 5
}

// Packages sent from the client to the server.
export enum CLIENT {
  JERRY_DEBUGGER_FREE_BYTE_CODE_CP = 1,
  JERRY_DEBUGGER_UPDATE_BREAKPOINT = 2,
  JERRY_DEBUGGER_EXCEPTION_CONFIG = 3,
  JERRY_DEBUGGER_PARSER_CONFIG = 4,
  JERRY_DEBUGGER_MEMSTATS = 5,
  JERRY_DEBUGGER_STOP = 6,
  JERRY_DEBUGGER_PARSER_RESUME = 7,
  JERRY_DEBUGGER_CLIENT_SOURCE = 8,
  JERRY_DEBUGGER_CLIENT_SOURCE_PART = 9,
  JERRY_DEBUGGER_NO_MORE_SOURCES = 10,
  JERRY_DEBUGGER_CONTEXT_RESET = 11,
  JERRY_DEBUGGER_CONTINUE = 12,
  JERRY_DEBUGGER_STEP = 13,
  JERRY_DEBUGGER_NEXT = 14,
  JERRY_DEBUGGER_FINISH = 15,
  JERRY_DEBUGGER_GET_BACKTRACE = 16,
  JERRY_DEBUGGER_EVAL = 17,
  JERRY_DEBUGGER_EVAL_PART = 18,
  JERRY_DEBUGGER_GET_SCOPE_CHAIN = 19,
  JERRY_DEBUGGER_GET_SCOPE_VARIABLES = 20
}

// Types of scope chain.
export enum JERRY_DEBUGGER_SCOPE_TYPE {
  JERRY_DEBUGGER_SCOPE_WITH = 1,
  JERRY_DEBUGGER_SCOPE_LOCAL = 2,
  JERRY_DEBUGGER_SCOPE_CLOSURE = 3,
  JERRY_DEBUGGER_SCOPE_GLOBAL = 4,
  JERRY_DEBUGGER_SCOPE_NON_CLOSURE = 5
}

// Type of scope variables.
export enum JERRY_DEBUGGER_SCOPE_VARIABLES {
  JERRY_DEBUGGER_VALUE_NONE = 1,
  JERRY_DEBUGGER_VALUE_UNDEFINED = 2,
  JERRY_DEBUGGER_VALUE_NULL = 3,
  JERRY_DEBUGGER_VALUE_BOOLEAN = 4,
  JERRY_DEBUGGER_VALUE_NUMBER = 5,
  JERRY_DEBUGGER_VALUE_STRING = 6,
  JERRY_DEBUGGER_VALUE_FUNCTION = 7,
  JERRY_DEBUGGER_VALUE_ARRAY = 8,
  JERRY_DEBUGGER_VALUE_OBJECT = 9
}
