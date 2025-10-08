/***/ 4568:
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(6924);
    return (0, utils_1.toCommandValue)(s)
    return (0, utils_1.toCommandValue)(s)
/***/ 6966:
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
exports.platform = exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = exports.markdownSummary = exports.summary = exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(4568);
const file_command_1 = __nccwpck_require__(2751);
const utils_1 = __nccwpck_require__(6924);
const os = __importStar(__nccwpck_require__(857));
const path = __importStar(__nccwpck_require__(6928));
const oidc_utils_1 = __nccwpck_require__(8492);
})(ExitCode || (exports.ExitCode = ExitCode = {}));
    const convertedVal = (0, utils_1.toCommandValue)(val);
        return (0, file_command_1.issueFileCommand)('ENV', (0, file_command_1.prepareKeyValueMessage)(name, val));
    (0, command_1.issueCommand)('set-env', { name }, convertedVal);
    (0, command_1.issueCommand)('add-mask', {}, secret);
        (0, file_command_1.issueFileCommand)('PATH', inputPath);
        (0, command_1.issueCommand)('add-path', {}, inputPath);
        return (0, file_command_1.issueFileCommand)('OUTPUT', (0, file_command_1.prepareKeyValueMessage)(name, value));
    (0, command_1.issueCommand)('set-output', { name }, (0, utils_1.toCommandValue)(value));
    (0, command_1.issue)('echo', enabled ? 'on' : 'off');
    (0, command_1.issueCommand)('debug', {}, message);
    (0, command_1.issueCommand)('error', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
    (0, command_1.issueCommand)('warning', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
    (0, command_1.issueCommand)('notice', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
    (0, command_1.issue)('group', name);
    (0, command_1.issue)('endgroup');
        return (0, file_command_1.issueFileCommand)('STATE', (0, file_command_1.prepareKeyValueMessage)(name, value));
    (0, command_1.issueCommand)('save-state', { name }, (0, utils_1.toCommandValue)(value));
var summary_1 = __nccwpck_require__(2905);
var summary_2 = __nccwpck_require__(2905);
var path_utils_1 = __nccwpck_require__(1746);
/**
 * Platform utilities exports
 */
exports.platform = __importStar(__nccwpck_require__(9866));
/***/ 2751:
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
const crypto = __importStar(__nccwpck_require__(6982));
const fs = __importStar(__nccwpck_require__(9896));
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(6924);
    fs.appendFileSync(filePath, `${(0, utils_1.toCommandValue)(message)}${os.EOL}`, {
    const delimiter = `ghadelimiter_${crypto.randomUUID()}`;
    const convertedValue = (0, utils_1.toCommandValue)(value);
/***/ 8492:
const http_client_1 = __nccwpck_require__(1966);
const auth_1 = __nccwpck_require__(9418);
const core_1 = __nccwpck_require__(6966);
                (0, core_1.debug)(`ID token url is ${id_token_url}`);
                (0, core_1.setSecret)(id_token);
/***/ 1746:
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
const path = __importStar(__nccwpck_require__(6928));
/***/ 9866:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDetails = exports.isLinux = exports.isMacOS = exports.isWindows = exports.arch = exports.platform = void 0;
const os_1 = __importDefault(__nccwpck_require__(857));
const exec = __importStar(__nccwpck_require__(2851));
const getWindowsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: version } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
        silent: true
    });
    const { stdout: name } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
        silent: true
    });
    return {
        name: name.trim(),
        version: version.trim()
    };
});
const getMacOsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { stdout } = yield exec.getExecOutput('sw_vers', undefined, {
        silent: true
    });
    const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
    return {
        name,
        version
    };
});
const getLinuxInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec.getExecOutput('lsb_release', ['-i', '-r', '-s'], {
        silent: true
    });
    const [name, version] = stdout.trim().split('\n');
    return {
        name,
        version
    };
});
exports.platform = os_1.default.platform();
exports.arch = os_1.default.arch();
exports.isWindows = exports.platform === 'win32';
exports.isMacOS = exports.platform === 'darwin';
exports.isLinux = exports.platform === 'linux';
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, (yield (exports.isWindows
            ? getWindowsInfo()
            : exports.isMacOS
                ? getMacOsInfo()
                : getLinuxInfo()))), { platform: exports.platform,
            arch: exports.arch,
            isWindows: exports.isWindows,
            isMacOS: exports.isMacOS,
            isLinux: exports.isLinux });
    });
}
exports.getDetails = getDetails;
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 2905:
const os_1 = __nccwpck_require__(857);
const fs_1 = __nccwpck_require__(9896);
/***/ 6924:
/***/ 2851:
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __nccwpck_require__(3193);
const tr = __importStar(__nccwpck_require__(9390));
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map
/***/ 9390:
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__nccwpck_require__(857));
const events = __importStar(__nccwpck_require__(4434));
const child = __importStar(__nccwpck_require__(5317));
const path = __importStar(__nccwpck_require__(6928));
const io = __importStar(__nccwpck_require__(378));
const ioUtil = __importStar(__nccwpck_require__(527));
const timers_1 = __nccwpck_require__(3557);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 3077:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
const fs_1 = __nccwpck_require__(9896);
const os_1 = __nccwpck_require__(857);
class Context {
    /**
     * Hydrate the context from the environment
     */
    constructor() {
        var _a, _b, _c;
        this.payload = {};
        if (process.env.GITHUB_EVENT_PATH) {
            if ((0, fs_1.existsSync)(process.env.GITHUB_EVENT_PATH)) {
                this.payload = JSON.parse((0, fs_1.readFileSync)(process.env.GITHUB_EVENT_PATH, { encoding: 'utf8' }));
            }
            else {
                const path = process.env.GITHUB_EVENT_PATH;
                process.stdout.write(`GITHUB_EVENT_PATH ${path} does not exist${os_1.EOL}`);
            }
        }
        this.eventName = process.env.GITHUB_EVENT_NAME;
        this.sha = process.env.GITHUB_SHA;
        this.ref = process.env.GITHUB_REF;
        this.workflow = process.env.GITHUB_WORKFLOW;
        this.action = process.env.GITHUB_ACTION;
        this.actor = process.env.GITHUB_ACTOR;
        this.job = process.env.GITHUB_JOB;
        this.runAttempt = parseInt(process.env.GITHUB_RUN_ATTEMPT, 10);
        this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
        this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
        this.apiUrl = (_a = process.env.GITHUB_API_URL) !== null && _a !== void 0 ? _a : `https://api.github.com`;
        this.serverUrl = (_b = process.env.GITHUB_SERVER_URL) !== null && _b !== void 0 ? _b : `https://github.com`;
        this.graphqlUrl =
            (_c = process.env.GITHUB_GRAPHQL_URL) !== null && _c !== void 0 ? _c : `https://api.github.com/graphql`;
    }
    get issue() {
        const payload = this.payload;
        return Object.assign(Object.assign({}, this.repo), { number: (payload.issue || payload.pull_request || payload).number });
    }
    get repo() {
        if (process.env.GITHUB_REPOSITORY) {
            const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
            return { owner, repo };
        }
        if (this.payload.repository) {
            return {
                owner: this.payload.repository.owner.login,
                repo: this.payload.repository.name
            };
        }
        throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 4903:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
exports.getOctokit = exports.context = void 0;
const Context = __importStar(__nccwpck_require__(3077));
const utils_1 = __nccwpck_require__(4523);
 * Returns a hydrated octokit ready to use for GitHub Actions
function getOctokit(token, options, ...additionalPlugins) {
    const GitHubWithPlugins = utils_1.GitHub.plugin(...additionalPlugins);
    return new GitHubWithPlugins((0, utils_1.getOctokitOptions)(token, options));
exports.getOctokit = getOctokit;
//# sourceMappingURL=github.js.map
/***/ 8399:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.getApiBaseUrl = exports.getProxyFetch = exports.getProxyAgentDispatcher = exports.getProxyAgent = exports.getAuthString = void 0;
const httpClient = __importStar(__nccwpck_require__(1966));
const undici_1 = __nccwpck_require__(6017);
function getAuthString(token, options) {
    if (!token && !options.auth) {
        throw new Error('Parameter token or opts.auth is required');
    }
    else if (token && options.auth) {
        throw new Error('Parameters token and opts.auth may not both be specified');
    }
    return typeof options.auth === 'string' ? options.auth : `token ${token}`;
}
exports.getAuthString = getAuthString;
function getProxyAgent(destinationUrl) {
    const hc = new httpClient.HttpClient();
    return hc.getAgent(destinationUrl);
}
exports.getProxyAgent = getProxyAgent;
function getProxyAgentDispatcher(destinationUrl) {
    const hc = new httpClient.HttpClient();
    return hc.getAgentDispatcher(destinationUrl);
}
exports.getProxyAgentDispatcher = getProxyAgentDispatcher;
function getProxyFetch(destinationUrl) {
    const httpDispatcher = getProxyAgentDispatcher(destinationUrl);
    const proxyFetch = (url, opts) => __awaiter(this, void 0, void 0, function* () {
        return (0, undici_1.fetch)(url, Object.assign(Object.assign({}, opts), { dispatcher: httpDispatcher }));
    });
    return proxyFetch;
}
exports.getProxyFetch = getProxyFetch;
function getApiBaseUrl() {
    return process.env['GITHUB_API_URL'] || 'https://api.github.com';
}
exports.getApiBaseUrl = getApiBaseUrl;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 4523:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOctokitOptions = exports.GitHub = exports.defaults = exports.context = void 0;
const Context = __importStar(__nccwpck_require__(3077));
const Utils = __importStar(__nccwpck_require__(8399));
// octokit + plugins
const core_1 = __nccwpck_require__(1772);
const plugin_rest_endpoint_methods_1 = __nccwpck_require__(6316);
const plugin_paginate_rest_1 = __nccwpck_require__(8633);
exports.context = new Context.Context();
const baseUrl = Utils.getApiBaseUrl();
exports.defaults = {
    baseUrl,
    request: {
        agent: Utils.getProxyAgent(baseUrl),
        fetch: Utils.getProxyFetch(baseUrl)
    }
};
exports.GitHub = core_1.Octokit.plugin(plugin_rest_endpoint_methods_1.restEndpointMethods, plugin_paginate_rest_1.paginateRest).defaults(exports.defaults);
/**
 * Convience function to correctly format Octokit Options to pass into the constructor.
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */
function getOctokitOptions(token, options) {
    const opts = Object.assign({}, options || {}); // Shallow clone - don't mutate the object provided by the caller
    // Auth
    const auth = Utils.getAuthString(token, opts);
    if (auth) {
        opts.auth = auth;
    }
    return opts;
}
exports.getOctokitOptions = getOctokitOptions;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9418:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
/***/ 1966:
const http = __importStar(__nccwpck_require__(8611));
const https = __importStar(__nccwpck_require__(5692));
const pm = __importStar(__nccwpck_require__(6474));
const tunnel = __importStar(__nccwpck_require__(329));
const undici_1 = __nccwpck_require__(6017);
        if (!useProxy) {
        // if tunneling agent isn't assigned create a new agent
        if (!agent) {
            token: `Basic ${Buffer.from(`${proxyUrl.username}:${proxyUrl.password}`).toString('base64')}`
/***/ 6474:
            return new DecodedURL(proxyVar);
                return new DecodedURL(`http://${proxyVar}`);
class DecodedURL extends URL {
    constructor(url, base) {
        super(url, base);
        this._decodedUsername = decodeURIComponent(super.username);
        this._decodedPassword = decodeURIComponent(super.password);
    }
    get username() {
        return this._decodedUsername;
    }
    get password() {
        return this._decodedPassword;
    }
}
/***/ 527:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__nccwpck_require__(9896));
const path = __importStar(__nccwpck_require__(6928));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map
/***/ }),

/***/ 378:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __nccwpck_require__(2613);
const path = __importStar(__nccwpck_require__(6928));
const ioUtil = __importStar(__nccwpck_require__(527));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 703:
/***/ ((module) => {

"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// pkg/dist-src/index.js
var dist_src_exports = {};
__export(dist_src_exports, {
  createTokenAuth: () => createTokenAuth
});
module.exports = __toCommonJS(dist_src_exports);

// pkg/dist-src/auth.js
var REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
var REGEX_IS_INSTALLATION = /^ghs_/;
var REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function auth(token) {
  const isApp = token.split(/\./).length === 3;
  const isInstallation = REGEX_IS_INSTALLATION_LEGACY.test(token) || REGEX_IS_INSTALLATION.test(token);
  const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token);
  const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
  return {
    type: "token",
    token,
    tokenType
  };
}

// pkg/dist-src/with-authorization-prefix.js
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }
  return `token ${token}`;
}

// pkg/dist-src/hook.js
async function hook(token, request, route, parameters) {
  const endpoint = request.endpoint.merge(
    route,
    parameters
  );
  endpoint.headers.authorization = withAuthorizationPrefix(token);
  return request(endpoint);
}

// pkg/dist-src/index.js
var createTokenAuth = function createTokenAuth2(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }
  if (typeof token !== "string") {
/***/ 1772:
var index_exports = {};
__export(index_exports, {
module.exports = __toCommonJS(index_exports);
var import_universal_user_agent = __nccwpck_require__(6678);
var import_before_after_hook = __nccwpck_require__(3128);
var import_request = __nccwpck_require__(1124);
var import_graphql = __nccwpck_require__(2218);
var import_auth_token = __nccwpck_require__(703);
var VERSION = "5.2.2";
function createLogger(logger = {}) {
  if (typeof logger.debug !== "function") {
    logger.debug = noop;
  }
  if (typeof logger.info !== "function") {
    logger.info = noop;
  }
  if (typeof logger.warn !== "function") {
    logger.warn = consoleWarn;
  }
  if (typeof logger.error !== "function") {
    logger.error = consoleError;
  }
  return logger;
}
    this.log = createLogger(options.log);
/***/ 7006:
var import_universal_user_agent = __nccwpck_require__(6678);
var VERSION = "9.0.6";
var urlVariableRegex = /\{[^{}}]+\}/g;
  return variableName.replace(/(?:^\W+)|(?:(?<!\W)\W+$)/g, "").split(/,/);
        const previewsFromAcceptHeader = headers.accept.match(/(?<![\w-])[\w-]+(?=-preview)/g) || [];
/***/ 2218:
var index_exports = {};
__export(index_exports, {
module.exports = __toCommonJS(index_exports);
var import_request3 = __nccwpck_require__(1124);
var import_universal_user_agent = __nccwpck_require__(6678);
var VERSION = "7.1.1";
var import_request2 = __nccwpck_require__(1124);
var import_request = __nccwpck_require__(1124);
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
/***/ 8633:
var VERSION = "9.2.2";
            /<([^<>]+)>;\s*rel="next"/
  "GET /orgs/{org}/organization-roles/{role_id}/teams",
  "GET /orgs/{org}/organization-roles/{role_id}/users",
/***/ 6316:
var VERSION = "10.4.1";
    getCustomOidcSubClaimForRepo: [
      "GET /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
    setCustomOidcSubClaimForRepo: [
      "PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
    markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"],
    addCopilotSeatsForTeams: [
    addCopilotSeatsForUsers: [
  oidc: {
    getOidcCustomSubTemplateForOrg: [
      "GET /orgs/{org}/actions/oidc/customization/sub"
    ],
    updateOidcCustomSubTemplateForOrg: [
      "PUT /orgs/{org}/actions/oidc/customization/sub"
    ]
  },
    assignTeamToOrgRole: [
      "PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    assignUserToOrgRole: [
      "PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    createCustomOrganizationRole: ["POST /orgs/{org}/organization-roles"],
    deleteCustomOrganizationRole: [
      "DELETE /orgs/{org}/organization-roles/{role_id}"
    ],
    getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"],
    listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"],
    listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"],
    listOrgRoles: ["GET /orgs/{org}/organization-roles"],
    listOrganizationFineGrainedPermissions: [
      "GET /orgs/{org}/organization-fine-grained-permissions"
    ],
    patchCustomOrganizationRole: [
      "PATCH /orgs/{org}/organization-roles/{role_id}"
    ],
    revokeAllOrgRolesTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}"
    ],
    revokeAllOrgRolesUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}"
    ],
    revokeOrgRoleTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    revokeOrgRoleUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    cancelPagesDeployment: [
      "POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"
    ],
    createOrUpdateCustomPropertiesValues: [
      "PATCH /repos/{owner}/{repo}/properties/values"
    ],
    createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"],
    getPagesDeployment: [
      "GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"
    ],
    createFork: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"
    ],
/***/ 6788:
var import_deprecation = __nccwpck_require__(4071);
var import_once = __toESM(__nccwpck_require__(6367));
          /(?<! ) .*$/,
/***/ 1124:
var import_endpoint = __nccwpck_require__(7006);
var import_universal_user_agent = __nccwpck_require__(6678);
var VERSION = "8.4.1";
var import_request_error = __nccwpck_require__(6788);
  var _a, _b, _c, _d;
    redirect: (_c = requestOptions.request) == null ? void 0 : _c.redirect,
    signal: (_d = requestOptions.request) == null ? void 0 : _d.signal,
      const matches = headers.link && headers.link.match(/<([^<>]+)>; rel="deprecation"/);
  let suffix;
  if ("documentation_url" in data) {
    suffix = ` - ${data.documentation_url}`;
  } else {
    suffix = "";
  }
      return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}${suffix}`;
    return `${data.message}${suffix}`;
/***/ 3128:
var register = __nccwpck_require__(8707);
var addHook = __nccwpck_require__(5743);
var removeHook = __nccwpck_require__(8418);
/***/ 5743:
/***/ 8707:
/***/ 8418:
/***/ 4071:
/***/ 6367:
var wrappy = __nccwpck_require__(6039)
/***/ 329:
module.exports = __nccwpck_require__(4179);
/***/ 4179:
var net = __nccwpck_require__(9278);
var tls = __nccwpck_require__(4756);
var http = __nccwpck_require__(8611);
var https = __nccwpck_require__(5692);
var events = __nccwpck_require__(4434);
var assert = __nccwpck_require__(2613);
var util = __nccwpck_require__(9023);
/***/ 6017:
const Client = __nccwpck_require__(6530)
const Dispatcher = __nccwpck_require__(5872)
const errors = __nccwpck_require__(1970)
const Pool = __nccwpck_require__(6607)
const BalancedPool = __nccwpck_require__(180)
const Agent = __nccwpck_require__(4724)
const util = __nccwpck_require__(701)
const api = __nccwpck_require__(6234)
const buildConnector = __nccwpck_require__(2667)
const MockClient = __nccwpck_require__(1134)
const MockAgent = __nccwpck_require__(4280)
const MockPool = __nccwpck_require__(723)
const mockErrors = __nccwpck_require__(8074)
const ProxyAgent = __nccwpck_require__(7698)
const RetryHandler = __nccwpck_require__(5970)
const { getGlobalDispatcher, setGlobalDispatcher } = __nccwpck_require__(4662)
const DecoratorHandler = __nccwpck_require__(6459)
const RedirectHandler = __nccwpck_require__(762)
const createRedirectInterceptor = __nccwpck_require__(2750)
  __nccwpck_require__(6982)
      fetchImpl = (__nccwpck_require__(4546).fetch)
  module.exports.Headers = __nccwpck_require__(824).Headers
  module.exports.Response = __nccwpck_require__(2111).Response
  module.exports.Request = __nccwpck_require__(8939).Request
  module.exports.FormData = __nccwpck_require__(98).FormData
  module.exports.File = __nccwpck_require__(374).File
  module.exports.FileReader = __nccwpck_require__(2151).FileReader
  const { setGlobalOrigin, getGlobalOrigin } = __nccwpck_require__(2071)
  const { CacheStorage } = __nccwpck_require__(4393)
  const { kConstruct } = __nccwpck_require__(8081)
  const { deleteCookie, getCookies, getSetCookies, setCookie } = __nccwpck_require__(3001)
  const { parseMIMEType, serializeAMimeType } = __nccwpck_require__(2059)
  const { WebSocket } = __nccwpck_require__(7634)
/***/ 4724:
const { InvalidArgumentError } = __nccwpck_require__(1970)
const { kClients, kRunning, kClose, kDestroy, kDispatch, kInterceptors } = __nccwpck_require__(4980)
const DispatcherBase = __nccwpck_require__(4660)
const Pool = __nccwpck_require__(6607)
const Client = __nccwpck_require__(6530)
const util = __nccwpck_require__(701)
const createRedirectInterceptor = __nccwpck_require__(2750)
const { WeakRef, FinalizationRegistry } = __nccwpck_require__(4375)()
/***/ 6497:
const { addAbortListener } = __nccwpck_require__(701)
const { RequestAbortedError } = __nccwpck_require__(1970)
/***/ 2621:
const { AsyncResource } = __nccwpck_require__(290)
const { InvalidArgumentError, RequestAbortedError, SocketError } = __nccwpck_require__(1970)
const util = __nccwpck_require__(701)
const { addSignal, removeSignal } = __nccwpck_require__(6497)
/***/ 8229:
} = __nccwpck_require__(2203)
} = __nccwpck_require__(1970)
const util = __nccwpck_require__(701)
const { AsyncResource } = __nccwpck_require__(290)
const { addSignal, removeSignal } = __nccwpck_require__(6497)
const assert = __nccwpck_require__(2613)
/***/ 5670:
const Readable = __nccwpck_require__(2224)
} = __nccwpck_require__(1970)
const util = __nccwpck_require__(701)
const { getResolveErrorBodyCallback } = __nccwpck_require__(3924)
const { AsyncResource } = __nccwpck_require__(290)
const { addSignal, removeSignal } = __nccwpck_require__(6497)
/***/ 3019:
const { finished, PassThrough } = __nccwpck_require__(2203)
} = __nccwpck_require__(1970)
const util = __nccwpck_require__(701)
const { getResolveErrorBodyCallback } = __nccwpck_require__(3924)
const { AsyncResource } = __nccwpck_require__(290)
const { addSignal, removeSignal } = __nccwpck_require__(6497)
/***/ 8063:
const { InvalidArgumentError, RequestAbortedError, SocketError } = __nccwpck_require__(1970)
const { AsyncResource } = __nccwpck_require__(290)
const util = __nccwpck_require__(701)
const { addSignal, removeSignal } = __nccwpck_require__(6497)
const assert = __nccwpck_require__(2613)
/***/ 6234:
module.exports.request = __nccwpck_require__(5670)
module.exports.stream = __nccwpck_require__(3019)
module.exports.pipeline = __nccwpck_require__(8229)
module.exports.upgrade = __nccwpck_require__(8063)
module.exports.connect = __nccwpck_require__(2621)
/***/ 2224:
const assert = __nccwpck_require__(2613)
const { Readable } = __nccwpck_require__(2203)
const { RequestAbortedError, NotSupportedError, InvalidArgumentError } = __nccwpck_require__(1970)
const util = __nccwpck_require__(701)
const { ReadableStreamFrom, toUSVString } = __nccwpck_require__(701)
        Blob = (__nccwpck_require__(181).Blob)
/***/ 3924:
const assert = __nccwpck_require__(2613)
} = __nccwpck_require__(1970)
const { toUSVString } = __nccwpck_require__(701)
/***/ 180:
} = __nccwpck_require__(1970)
} = __nccwpck_require__(4005)
const Pool = __nccwpck_require__(6607)
const { kUrl, kInterceptors } = __nccwpck_require__(4980)
const { parseOrigin } = __nccwpck_require__(701)
/***/ 5974:
const { kConstruct } = __nccwpck_require__(8081)
const { urlEquals, fieldValues: getFieldValues } = __nccwpck_require__(6922)
const { kEnumerableProperty, isDisturbed } = __nccwpck_require__(701)
const { kHeadersList } = __nccwpck_require__(4980)
const { webidl } = __nccwpck_require__(185)
const { Response, cloneResponse } = __nccwpck_require__(2111)
const { Request } = __nccwpck_require__(8939)
const { kState, kHeaders, kGuard, kRealm } = __nccwpck_require__(639)
const { fetching } = __nccwpck_require__(4546)
const { urlIsHttpHttpsScheme, createDeferredPromise, readAllBytes } = __nccwpck_require__(8524)
const assert = __nccwpck_require__(2613)
const { getGlobalDispatcher } = __nccwpck_require__(4662)
/***/ 4393:
const { kConstruct } = __nccwpck_require__(8081)
const { Cache } = __nccwpck_require__(5974)
const { webidl } = __nccwpck_require__(185)
const { kEnumerableProperty } = __nccwpck_require__(701)
/***/ 8081:
  kConstruct: (__nccwpck_require__(4980).kConstruct)
/***/ 6922:
const assert = __nccwpck_require__(2613)
const { URLSerializer } = __nccwpck_require__(2059)
const { isValidHeaderName } = __nccwpck_require__(8524)
/***/ 6530:
const assert = __nccwpck_require__(2613)
const net = __nccwpck_require__(9278)
const http = __nccwpck_require__(8611)
const { pipeline } = __nccwpck_require__(2203)
const util = __nccwpck_require__(701)
const timers = __nccwpck_require__(7167)
const Request = __nccwpck_require__(6840)
const DispatcherBase = __nccwpck_require__(4660)
} = __nccwpck_require__(1970)
const buildConnector = __nccwpck_require__(2667)
} = __nccwpck_require__(4980)
  http2 = __nccwpck_require__(5675)
  const diagnosticsChannel = __nccwpck_require__(1637)
const constants = __nccwpck_require__(9791)
const createRedirectInterceptor = __nccwpck_require__(2750)
  const llhttpWasmData = process.env.JEST_WORKER_ID ? __nccwpck_require__(4729) : undefined
    mod = await WebAssembly.compile(Buffer.from(__nccwpck_require__(2603), 'base64'))
    mod = await WebAssembly.compile(Buffer.from(llhttpWasmData || __nccwpck_require__(4729), 'base64'))
/***/ 4375:
const { kConnected, kSize } = __nccwpck_require__(4980)
/***/ 976:
/***/ 3001:
const { parseSetCookie } = __nccwpck_require__(510)
const { stringify } = __nccwpck_require__(8609)
const { webidl } = __nccwpck_require__(185)
const { Headers } = __nccwpck_require__(824)
  const cookies = headers.getSetCookie()
  return cookies.map((pair) => parseSetCookie(pair))
/***/ 510:
const { maxNameValuePairSize, maxAttributeValueSize } = __nccwpck_require__(976)
const { isCTLExcludingHtab } = __nccwpck_require__(8609)
const { collectASequenceOfCodePointsFast } = __nccwpck_require__(2059)
const assert = __nccwpck_require__(2613)
/***/ 8609:
/***/ ((module) => {
/**
 * @param {string} value
 * @returns {boolean}
 */
  validateCookieName,
  validateCookiePath,
  validateCookieValue,
  toIMFDate,
  stringify
/***/ 2667:
const net = __nccwpck_require__(9278)
const assert = __nccwpck_require__(2613)
const util = __nccwpck_require__(701)
const { InvalidArgumentError, ConnectTimeoutError } = __nccwpck_require__(1970)
        tls = __nccwpck_require__(4756)
/***/ 5076:
/** @type {Record<string, string | undefined>} */
const headerNameLowerCasedRecord = {}

// https://developer.mozilla.org/docs/Web/HTTP/Headers
const wellknownHeaderNames = [
  'Accept',
  'Accept-Encoding',
  'Accept-Language',
  'Accept-Ranges',
  'Access-Control-Allow-Credentials',
  'Access-Control-Allow-Headers',
  'Access-Control-Allow-Methods',
  'Access-Control-Allow-Origin',
  'Access-Control-Expose-Headers',
  'Access-Control-Max-Age',
  'Access-Control-Request-Headers',
  'Access-Control-Request-Method',
  'Age',
  'Allow',
  'Alt-Svc',
  'Alt-Used',
  'Authorization',
  'Cache-Control',
  'Clear-Site-Data',
  'Connection',
  'Content-Disposition',
  'Content-Encoding',
  'Content-Language',
  'Content-Length',
  'Content-Location',
  'Content-Range',
  'Content-Security-Policy',
  'Content-Security-Policy-Report-Only',
  'Content-Type',
  'Cookie',
  'Cross-Origin-Embedder-Policy',
  'Cross-Origin-Opener-Policy',
  'Cross-Origin-Resource-Policy',
  'Date',
  'Device-Memory',
  'Downlink',
  'ECT',
  'ETag',
  'Expect',
  'Expect-CT',
  'Expires',
  'Forwarded',
  'From',
  'Host',
  'If-Match',
  'If-Modified-Since',
  'If-None-Match',
  'If-Range',
  'If-Unmodified-Since',
  'Keep-Alive',
  'Last-Modified',
  'Link',
  'Location',
  'Max-Forwards',
  'Origin',
  'Permissions-Policy',
  'Pragma',
  'Proxy-Authenticate',
  'Proxy-Authorization',
  'RTT',
  'Range',
  'Referer',
  'Referrer-Policy',
  'Refresh',
  'Retry-After',
  'Sec-WebSocket-Accept',
  'Sec-WebSocket-Extensions',
  'Sec-WebSocket-Key',
  'Sec-WebSocket-Protocol',
  'Sec-WebSocket-Version',
  'Server',
  'Server-Timing',
  'Service-Worker-Allowed',
  'Service-Worker-Navigation-Preload',
  'Set-Cookie',
  'SourceMap',
  'Strict-Transport-Security',
  'Supports-Loading-Mode',
  'TE',
  'Timing-Allow-Origin',
  'Trailer',
  'Transfer-Encoding',
  'Upgrade',
  'Upgrade-Insecure-Requests',
  'User-Agent',
  'Vary',
  'Via',
  'WWW-Authenticate',
  'X-Content-Type-Options',
  'X-DNS-Prefetch-Control',
  'X-Frame-Options',
  'X-Permitted-Cross-Domain-Policies',
  'X-Powered-By',
  'X-Requested-With',
  'X-XSS-Protection'
]

for (let i = 0; i < wellknownHeaderNames.length; ++i) {
  const key = wellknownHeaderNames[i]
  const lowerCasedKey = key.toLowerCase()
  headerNameLowerCasedRecord[key] = headerNameLowerCasedRecord[lowerCasedKey] =
    lowerCasedKey
}

// Note: object prototypes should not be able to be referenced. e.g. `Object#hasOwnProperty`.
Object.setPrototypeOf(headerNameLowerCasedRecord, null)

module.exports = {
  wellknownHeaderNames,
  headerNameLowerCasedRecord
}


/***/ }),

/***/ 1970:
/***/ ((module) => {

"use strict";


class UndiciError extends Error {
  constructor (message) {
/***/ 6840:
} = __nccwpck_require__(1970)
const assert = __nccwpck_require__(2613)
const { kHTTP2BuildRequest, kHTTP2CopyHeaders, kHTTP1BuildRequest } = __nccwpck_require__(4980)
const util = __nccwpck_require__(701)
  const diagnosticsChannel = __nccwpck_require__(1637)
        extractBody = (__nccwpck_require__(5472).extractBody)
/***/ 4980:
/***/ 701:
const assert = __nccwpck_require__(2613)
const { kDestroyed, kBodyUsed } = __nccwpck_require__(4980)
const { IncomingMessage } = __nccwpck_require__(8611)
const stream = __nccwpck_require__(2203)
const net = __nccwpck_require__(9278)
const { InvalidArgumentError } = __nccwpck_require__(1970)
const { Blob } = __nccwpck_require__(181)
const nodeUtil = __nccwpck_require__(9023)
const { stringify } = __nccwpck_require__(3480)
const { headerNameLowerCasedRecord } = __nccwpck_require__(5076)
/**
 * Retrieves a header name and returns its lowercase value.
 * @param {string | Buffer} value Header name
 * @returns {string}
 */
function headerNameToString (value) {
  return headerNameLowerCasedRecord[value] || value.toLowerCase()
}

    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
  headerNameToString,
/***/ 4660:
const Dispatcher = __nccwpck_require__(5872)
} = __nccwpck_require__(1970)
const { kDestroy, kClose, kDispatch, kInterceptors } = __nccwpck_require__(4980)
/***/ 5872:
const EventEmitter = __nccwpck_require__(4434)
/***/ 5472:
const Busboy = __nccwpck_require__(2105)
const util = __nccwpck_require__(701)
} = __nccwpck_require__(8524)
const { FormData } = __nccwpck_require__(98)
const { kState } = __nccwpck_require__(639)
const { webidl } = __nccwpck_require__(185)
const { DOMException, structuredClone } = __nccwpck_require__(1411)
const { Blob, File: NativeFile } = __nccwpck_require__(181)
const { kBodyUsed } = __nccwpck_require__(4980)
const assert = __nccwpck_require__(2613)
const { isErrored } = __nccwpck_require__(701)
const { isUint8Array, isArrayBuffer } = __nccwpck_require__(8253)
const { File: UndiciFile } = __nccwpck_require__(374)
const { parseMIMEType, serializeAMimeType } = __nccwpck_require__(2059)

let random
try {
  const crypto = __nccwpck_require__(7598)
  random = (max) => crypto.randomInt(0, max)
} catch {
  random = (max) => Math.floor(Math.random(max))
}
    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
    const boundary = `----formdata-undici-0${`${random(1e11)}`.padStart(11, '0')}`
    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
/***/ 1411:
const { MessageChannel, receiveMessageOnPort } = __nccwpck_require__(8167)
/***/ 2059:
const assert = __nccwpck_require__(2613)
const { atob } = __nccwpck_require__(181)
const { isomorphicDecode } = __nccwpck_require__(8524)
/***/ 374:
const { Blob, File: NativeFile } = __nccwpck_require__(181)
const { types } = __nccwpck_require__(9023)
const { kState } = __nccwpck_require__(639)
const { isBlobLike } = __nccwpck_require__(8524)
const { webidl } = __nccwpck_require__(185)
const { parseMIMEType, serializeAMimeType } = __nccwpck_require__(2059)
const { kEnumerableProperty } = __nccwpck_require__(701)
/***/ 98:
const { isBlobLike, toUSVString, makeIterator } = __nccwpck_require__(8524)
const { kState } = __nccwpck_require__(639)
const { File: UndiciFile, FileLike, isFileLike } = __nccwpck_require__(374)
const { webidl } = __nccwpck_require__(185)
const { Blob, File: NativeFile } = __nccwpck_require__(181)
/***/ 2071:
/***/ 824:
const { kHeadersList, kConstruct } = __nccwpck_require__(4980)
const { kGuard } = __nccwpck_require__(639)
const { kEnumerableProperty } = __nccwpck_require__(701)
} = __nccwpck_require__(8524)
const util = __nccwpck_require__(9023)
const { webidl } = __nccwpck_require__(185)
const assert = __nccwpck_require__(2613)
  },
  [util.inspect.custom]: {
    enumerable: false
/***/ 4546:
} = __nccwpck_require__(2111)
const { Headers } = __nccwpck_require__(824)
const { Request, makeRequest } = __nccwpck_require__(8939)
const zlib = __nccwpck_require__(3106)
} = __nccwpck_require__(8524)
const { kState, kHeaders, kGuard, kRealm } = __nccwpck_require__(639)
const assert = __nccwpck_require__(2613)
const { safelyExtractBody } = __nccwpck_require__(5472)
} = __nccwpck_require__(1411)
const { kHeadersList } = __nccwpck_require__(4980)
const EE = __nccwpck_require__(4434)
const { Readable, pipeline } = __nccwpck_require__(2203)
const { addAbortListener, isErrored, isReadable, nodeMajor, nodeMinor } = __nccwpck_require__(701)
const { dataURLProcessor, serializeAMimeType } = __nccwpck_require__(2059)
const { TransformStream } = __nccwpck_require__(3774)
const { getGlobalDispatcher } = __nccwpck_require__(4662)
const { webidl } = __nccwpck_require__(185)
const { STATUS_CODES } = __nccwpck_require__(8611)
        resolveObjectURL = (__nccwpck_require__(181).resolveObjectURL)
    // https://fetch.spec.whatwg.org/#authentication-entries
    request.headersList.delete('proxy-authorization', true)

    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
/***/ 8939:
const { extractBody, mixinBody, cloneBody } = __nccwpck_require__(5472)
const { Headers, fill: fillHeaders, HeadersList } = __nccwpck_require__(824)
const { FinalizationRegistry } = __nccwpck_require__(4375)()
const util = __nccwpck_require__(701)
} = __nccwpck_require__(8524)
} = __nccwpck_require__(1411)
const { kHeaders, kSignal, kState, kGuard, kRealm } = __nccwpck_require__(639)
const { webidl } = __nccwpck_require__(185)
const { getGlobalOrigin } = __nccwpck_require__(2071)
const { URLSerializer } = __nccwpck_require__(2059)
const { kHeadersList, kConstruct } = __nccwpck_require__(4980)
const assert = __nccwpck_require__(2613)
const { getMaxListeners, setMaxListeners, getEventListeners, defaultMaxListeners } = __nccwpck_require__(4434)
        TransformStream = (__nccwpck_require__(3774).TransformStream)
/***/ 2111:
const { Headers, HeadersList, fill } = __nccwpck_require__(824)
const { extractBody, cloneBody, mixinBody } = __nccwpck_require__(5472)
const util = __nccwpck_require__(701)
} = __nccwpck_require__(8524)
} = __nccwpck_require__(1411)
const { kState, kHeaders, kGuard, kRealm } = __nccwpck_require__(639)
const { webidl } = __nccwpck_require__(185)
const { FormData } = __nccwpck_require__(98)
const { getGlobalOrigin } = __nccwpck_require__(2071)
const { URLSerializer } = __nccwpck_require__(2059)
const { kHeadersList, kConstruct } = __nccwpck_require__(4980)
const assert = __nccwpck_require__(2613)
const { types } = __nccwpck_require__(9023)

const ReadableStream = globalThis.ReadableStream || (__nccwpck_require__(3774).ReadableStream)
/***/ 639:
/***/ 8524:
const { redirectStatusSet, referrerPolicySet: referrerPolicyTokens, badPortsSet } = __nccwpck_require__(1411)
const { getGlobalOrigin } = __nccwpck_require__(2071)
const { performance } = __nccwpck_require__(2987)
const { isBlobLike, toUSVString, ReadableStreamFrom } = __nccwpck_require__(701)
const assert = __nccwpck_require__(2613)
const { isUint8Array } = __nccwpck_require__(8253)

let supportedHashes = []
  crypto = __nccwpck_require__(6982)
  const possibleRelevantHashes = ['sha256', 'sha384', 'sha512']
  supportedHashes = crypto.getHashes().filter((hash) => possibleRelevantHashes.includes(hash))
/* c8 ignore next 3 */
  // 3. If response is not eligible for integrity validation, return false.
  // TODO

  // 4. If parsedMetadata is the empty set, return true.
  // 5. Let metadata be the result of getting the strongest
  const strongest = getStrongestMetadata(parsedMetadata)
  const metadata = filterMetadataListByAlgorithm(parsedMetadata, strongest)
  // 6. For each item in metadata:
    const expectedValue = item.hash
    if (actualValue[actualValue.length - 1] === '=') {
      if (actualValue[actualValue.length - 2] === '=') {
        actualValue = actualValue.slice(0, -2)
      } else {
        actualValue = actualValue.slice(0, -1)
      }
    if (compareBase64Mixed(actualValue, expectedValue)) {
  // 7. Return false.
const parseHashWithOptions = /(?<algo>sha256|sha384|sha512)-((?<hash>[A-Za-z0-9+/]+|[A-Za-z0-9_-]+)={0,2}(?:\s|$)( +[!-~]*)?)?/i
    if (
      parsedToken === null ||
      parsedToken.groups === undefined ||
      parsedToken.groups.algo === undefined
    ) {
    const algorithm = parsedToken.groups.algo.toLowerCase()
    if (supportedHashes.includes(algorithm)) {
/**
 * @param {{ algo: 'sha256' | 'sha384' | 'sha512' }[]} metadataList
 */
function getStrongestMetadata (metadataList) {
  // Let algorithm be the algo component of the first item in metadataList.
  // Can be sha256
  let algorithm = metadataList[0].algo
  // If the algorithm is sha512, then it is the strongest
  // and we can return immediately
  if (algorithm[3] === '5') {
    return algorithm
  }

  for (let i = 1; i < metadataList.length; ++i) {
    const metadata = metadataList[i]
    // If the algorithm is sha512, then it is the strongest
    // and we can break the loop immediately
    if (metadata.algo[3] === '5') {
      algorithm = 'sha512'
      break
    // If the algorithm is sha384, then a potential sha256 or sha384 is ignored
    } else if (algorithm[3] === '3') {
      continue
    // algorithm is sha256, check if algorithm is sha384 and if so, set it as
    // the strongest
    } else if (metadata.algo[3] === '3') {
      algorithm = 'sha384'
    }
  }
  return algorithm
}

function filterMetadataListByAlgorithm (metadataList, algorithm) {
  if (metadataList.length === 1) {
    return metadataList
  }

  let pos = 0
  for (let i = 0; i < metadataList.length; ++i) {
    if (metadataList[i].algo === algorithm) {
      metadataList[pos++] = metadataList[i]
    }
  }

  metadataList.length = pos

  return metadataList
}

/**
 * Compares two base64 strings, allowing for base64url
 * in the second string.
 *
* @param {string} actualValue always base64
 * @param {string} expectedValue base64 or base64url
 * @returns {boolean}
 */
function compareBase64Mixed (actualValue, expectedValue) {
  if (actualValue.length !== expectedValue.length) {
    return false
  }
  for (let i = 0; i < actualValue.length; ++i) {
    if (actualValue[i] !== expectedValue[i]) {
      if (
        (actualValue[i] === '+' && expectedValue[i] === '-') ||
        (actualValue[i] === '/' && expectedValue[i] === '_')
      ) {
        continue
      }
      return false
    }
  }

  return true
}

    ReadableStream = (__nccwpck_require__(3774).ReadableStream)
  normalizeMethodRecord,
  parseMetadata
/***/ 185:
const { types } = __nccwpck_require__(9023)
const { hasOwn, toUSVString } = __nccwpck_require__(8524)
/***/ 9187:
/***/ 2151:
} = __nccwpck_require__(3350)
} = __nccwpck_require__(821)
const { webidl } = __nccwpck_require__(185)
const { kEnumerableProperty } = __nccwpck_require__(701)
/***/ 2889:
const { webidl } = __nccwpck_require__(185)
/***/ 821:
/***/ 3350:
} = __nccwpck_require__(821)
const { ProgressEvent } = __nccwpck_require__(2889)
const { getEncoding } = __nccwpck_require__(9187)
const { DOMException } = __nccwpck_require__(1411)
const { serializeAMimeType, parseMIMEType } = __nccwpck_require__(2059)
const { types } = __nccwpck_require__(9023)
const { StringDecoder } = __nccwpck_require__(3193)
const { btoa } = __nccwpck_require__(181)
/***/ 4662:
const { InvalidArgumentError } = __nccwpck_require__(1970)
const Agent = __nccwpck_require__(4724)
/***/ 6459:
/***/ 762:
const util = __nccwpck_require__(701)
const { kBodyUsed } = __nccwpck_require__(4980)
const assert = __nccwpck_require__(2613)
const { InvalidArgumentError } = __nccwpck_require__(1970)
const EE = __nccwpck_require__(4434)
  if (header.length === 4) {
    return util.headerNameToString(header) === 'host'
  }
  if (removeContent && util.headerNameToString(header).startsWith('content-')) {
    return true
  }
  if (unknownOrigin && (header.length === 13 || header.length === 6 || header.length === 19)) {
    const name = util.headerNameToString(header)
    return name === 'authorization' || name === 'cookie' || name === 'proxy-authorization'
  }
  return false
/***/ 5970:
const assert = __nccwpck_require__(2613)
const { kRetryHandlerDefaultRetry } = __nccwpck_require__(4980)
const { RequestRetryError } = __nccwpck_require__(1970)
const { isDisturbed, parseHeaders, parseRangeHeader } = __nccwpck_require__(701)
/***/ 2750:
const RedirectHandler = __nccwpck_require__(762)
/***/ 9791:
const utils_1 = __nccwpck_require__(7999);
/***/ 4729:
/***/ 2603:
/***/ 7999:
/***/ 4280:
const { kClients } = __nccwpck_require__(4980)
const Agent = __nccwpck_require__(4724)
} = __nccwpck_require__(7980)
const MockClient = __nccwpck_require__(1134)
const MockPool = __nccwpck_require__(723)
const { matchValue, buildMockOptions } = __nccwpck_require__(640)
const { InvalidArgumentError, UndiciError } = __nccwpck_require__(1970)
const Dispatcher = __nccwpck_require__(5872)
const Pluralizer = __nccwpck_require__(9376)
const PendingInterceptorsFormatter = __nccwpck_require__(135)
/***/ 1134:
const { promisify } = __nccwpck_require__(9023)
const Client = __nccwpck_require__(6530)
const { buildMockDispatch } = __nccwpck_require__(640)
} = __nccwpck_require__(7980)
const { MockInterceptor } = __nccwpck_require__(4402)
const Symbols = __nccwpck_require__(4980)
const { InvalidArgumentError } = __nccwpck_require__(1970)
/***/ 8074:
const { UndiciError } = __nccwpck_require__(1970)
/***/ 4402:
const { getResponseData, buildKey, addMockDispatch } = __nccwpck_require__(640)
} = __nccwpck_require__(7980)
const { InvalidArgumentError } = __nccwpck_require__(1970)
const { buildURL } = __nccwpck_require__(701)
/***/ 723:
const { promisify } = __nccwpck_require__(9023)
const Pool = __nccwpck_require__(6607)
const { buildMockDispatch } = __nccwpck_require__(640)
} = __nccwpck_require__(7980)
const { MockInterceptor } = __nccwpck_require__(4402)
const Symbols = __nccwpck_require__(4980)
const { InvalidArgumentError } = __nccwpck_require__(1970)
/***/ 7980:
/***/ 640:
const { MockNotMatchedError } = __nccwpck_require__(8074)
} = __nccwpck_require__(7980)
const { buildURL, nop } = __nccwpck_require__(701)
const { STATUS_CODES } = __nccwpck_require__(8611)
} = __nccwpck_require__(9023)
/***/ 135:
const { Transform } = __nccwpck_require__(2203)
const { Console } = __nccwpck_require__(4236)
/***/ 9376:
/***/ 5594:
/***/ 4005:
const DispatcherBase = __nccwpck_require__(4660)
const FixedQueue = __nccwpck_require__(5594)
const { kConnected, kSize, kRunning, kPending, kQueued, kBusy, kFree, kUrl, kClose, kDestroy, kDispatch } = __nccwpck_require__(4980)
const PoolStats = __nccwpck_require__(613)
/***/ 613:
const { kFree, kConnected, kPending, kQueued, kRunning, kSize } = __nccwpck_require__(4980)
/***/ 6607:
} = __nccwpck_require__(4005)
const Client = __nccwpck_require__(6530)
} = __nccwpck_require__(1970)
const util = __nccwpck_require__(701)
const { kUrl, kInterceptors } = __nccwpck_require__(4980)
const buildConnector = __nccwpck_require__(2667)

    this.on('connectionError', (origin, targets, error) => {
      // If a connection error occurs, we remove the client from the pool,
      // and emit a connectionError event. They will not be re-used.
      // Fixes https://github.com/nodejs/undici/issues/3895
      for (const target of targets) {
        // Do not use kRemoveClient here, as it will close the client,
        // but the client cannot be closed in this state.
        const idx = this[kClients].indexOf(target)
        if (idx !== -1) {
          this[kClients].splice(idx, 1)
        }
      }
    })
/***/ 7698:
const { kProxy, kClose, kDestroy, kInterceptors } = __nccwpck_require__(4980)
const { URL } = __nccwpck_require__(7016)
const Agent = __nccwpck_require__(4724)
const Pool = __nccwpck_require__(6607)
const DispatcherBase = __nccwpck_require__(4660)
const { InvalidArgumentError, RequestAbortedError } = __nccwpck_require__(1970)
const buildConnector = __nccwpck_require__(2667)
/***/ 7167:
/***/ 9277:
const diagnosticsChannel = __nccwpck_require__(1637)
const { uid, states } = __nccwpck_require__(8420)
} = __nccwpck_require__(6708)
const { fireEvent, failWebsocketConnection } = __nccwpck_require__(8829)
const { CloseEvent } = __nccwpck_require__(6544)
const { makeRequest } = __nccwpck_require__(8939)
const { fetching } = __nccwpck_require__(4546)
const { Headers } = __nccwpck_require__(824)
const { getGlobalDispatcher } = __nccwpck_require__(4662)
const { kHeadersList } = __nccwpck_require__(4980)
  crypto = __nccwpck_require__(6982)
/***/ 8420:
/***/ 6544:
const { webidl } = __nccwpck_require__(185)
const { kEnumerableProperty } = __nccwpck_require__(701)
const { MessagePort } = __nccwpck_require__(8167)
  initMessageEvent: kEnumerableProperty
})
Object.defineProperties(CloseEvent.prototype, {
  [Symbol.toStringTag]: {
    value: 'CloseEvent',
    configurable: true
  },
  reason: kEnumerableProperty,
  code: kEnumerableProperty,
  wasClean: kEnumerableProperty
})
Object.defineProperties(ErrorEvent.prototype, {
  [Symbol.toStringTag]: {
    value: 'ErrorEvent',
    configurable: true
  },
  message: kEnumerableProperty,
  filename: kEnumerableProperty,
  lineno: kEnumerableProperty,
  colno: kEnumerableProperty,
  error: kEnumerableProperty
})
webidl.converters.MessagePort = webidl.interfaceConverter(MessagePort)
webidl.converters['sequence<MessagePort>'] = webidl.sequenceConverter(
  webidl.converters.MessagePort
)
const eventInit = [
  {
    key: 'bubbles',
    converter: webidl.converters.boolean,
    defaultValue: false
  },
  {
    key: 'cancelable',
    converter: webidl.converters.boolean,
    defaultValue: false
  },
  {
    key: 'composed',
    converter: webidl.converters.boolean,
    defaultValue: false
  }
]
webidl.converters.MessageEventInit = webidl.dictionaryConverter([
  ...eventInit,
  {
    key: 'data',
    converter: webidl.converters.any,
    defaultValue: null
  },
  {
    key: 'origin',
    converter: webidl.converters.USVString,
    defaultValue: ''
  },
  {
    key: 'lastEventId',
    converter: webidl.converters.DOMString,
    defaultValue: ''
  },
  {
    key: 'source',
    // Node doesn't implement WindowProxy or ServiceWorker, so the only
    // valid value for source is a MessagePort.
    converter: webidl.nullableConverter(webidl.converters.MessagePort),
    defaultValue: null
  },
  {
    key: 'ports',
    converter: webidl.converters['sequence<MessagePort>'],
    get defaultValue () {
      return []
])
webidl.converters.CloseEventInit = webidl.dictionaryConverter([
  ...eventInit,
  {
    key: 'wasClean',
    converter: webidl.converters.boolean,
    defaultValue: false
  },
  {
    key: 'code',
    converter: webidl.converters['unsigned short'],
    defaultValue: 0
  },
  {
    key: 'reason',
    converter: webidl.converters.USVString,
    defaultValue: ''
  }
])
webidl.converters.ErrorEventInit = webidl.dictionaryConverter([
  ...eventInit,
  {
    key: 'message',
    converter: webidl.converters.DOMString,
    defaultValue: ''
  },
  {
    key: 'filename',
    converter: webidl.converters.USVString,
    defaultValue: ''
  },
  {
    key: 'lineno',
    converter: webidl.converters['unsigned long'],
    defaultValue: 0
  },
  {
    key: 'colno',
    converter: webidl.converters['unsigned long'],
    defaultValue: 0
  },
  {
    key: 'error',
    converter: webidl.converters.any
])
module.exports = {
  MessageEvent,
  CloseEvent,
  ErrorEvent
}
/***/ }),
/***/ 2308:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {
"use strict";
const { maxUnsigned16Bit } = __nccwpck_require__(8420)
/** @type {import('crypto')} */
let crypto
try {
  crypto = __nccwpck_require__(6982)
} catch {
}
class WebsocketFrameSend {
  /**
   * @param {Buffer|undefined} data
   */
  constructor (data) {
    this.frameData = data
    this.maskKey = crypto.randomBytes(4)
  createFrame (opcode) {
    const bodyLength = this.frameData?.byteLength ?? 0
    /** @type {number} */
    let payloadLength = bodyLength // 0-125
    let offset = 6
    if (bodyLength > maxUnsigned16Bit) {
      offset += 8 // payload length is next 8 bytes
      payloadLength = 127
    } else if (bodyLength > 125) {
      offset += 2 // payload length is next 2 bytes
      payloadLength = 126
    const buffer = Buffer.allocUnsafe(bodyLength + offset)
    // Clear first 2 bytes, everything else is overwritten
    buffer[0] = buffer[1] = 0
    buffer[0] |= 0x80 // FIN
    buffer[0] = (buffer[0] & 0xF0) + opcode // opcode
    /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */
    buffer[offset - 4] = this.maskKey[0]
    buffer[offset - 3] = this.maskKey[1]
    buffer[offset - 2] = this.maskKey[2]
    buffer[offset - 1] = this.maskKey[3]
    buffer[1] = payloadLength

    if (payloadLength === 126) {
      buffer.writeUInt16BE(bodyLength, 2)
    } else if (payloadLength === 127) {
      // Clear extended payload length
      buffer[2] = buffer[3] = 0
      buffer.writeUIntBE(bodyLength, 4, 6)
    buffer[1] |= 0x80 // MASK

    // mask body
    for (let i = 0; i < bodyLength; i++) {
      buffer[offset + i] = this.frameData[i] ^ this.maskKey[i % 4]

    return buffer
}

module.exports = {
  WebsocketFrameSend
}
/***/ }),
/***/ 4648:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {
"use strict";
const { Writable } = __nccwpck_require__(2203)
const diagnosticsChannel = __nccwpck_require__(1637)
const { parserStates, opcodes, states, emptyBuffer } = __nccwpck_require__(8420)
const { kReadyState, kSentClose, kResponse, kReceivedClose } = __nccwpck_require__(6708)
const { isValidStatusCode, failWebsocketConnection, websocketMessageReceived } = __nccwpck_require__(8829)
const { WebsocketFrameSend } = __nccwpck_require__(2308)
// This code was influenced by ws released under the MIT license.
// Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
// Copyright (c) 2013 Arnout Kazemier and contributors
// Copyright (c) 2016 Luigi Pinca and contributors
const channels = {}
channels.ping = diagnosticsChannel.channel('undici:websocket:ping')
channels.pong = diagnosticsChannel.channel('undici:websocket:pong')
class ByteParser extends Writable {
  #buffers = []
  #byteOffset = 0
  #state = parserStates.INFO
  #info = {}
  #fragments = []
  constructor (ws) {
    super()

    this.ws = ws
  /**
   * @param {Buffer} chunk
   * @param {() => void} callback
   */
  _write (chunk, _, callback) {
    this.#buffers.push(chunk)
    this.#byteOffset += chunk.length
    this.run(callback)
   * Runs whenever a new chunk is received.
   * Callback is called whenever there are no more chunks buffering,
   * or not enough bytes are buffered to parse.
  run (callback) {
    while (true) {
      if (this.#state === parserStates.INFO) {
        // If there aren't enough bytes to parse the payload length, etc.
        if (this.#byteOffset < 2) {
          return callback()
        }
        const buffer = this.consume(2)
        this.#info.fin = (buffer[0] & 0x80) !== 0
        this.#info.opcode = buffer[0] & 0x0F
        // If we receive a fragmented message, we use the type of the first
        // frame to parse the full message as binary/text, when it's terminated
        this.#info.originalOpcode ??= this.#info.opcode
        this.#info.fragmented = !this.#info.fin && this.#info.opcode !== opcodes.CONTINUATION
        if (this.#info.fragmented && this.#info.opcode !== opcodes.BINARY && this.#info.opcode !== opcodes.TEXT) {
          // Only text and binary frames can be fragmented
          failWebsocketConnection(this.ws, 'Invalid frame type was fragmented.')
          return
        }
        const payloadLength = buffer[1] & 0x7F
        if (payloadLength <= 125) {
          this.#info.payloadLength = payloadLength
          this.#state = parserStates.READ_DATA
        } else if (payloadLength === 126) {
          this.#state = parserStates.PAYLOADLENGTH_16
        } else if (payloadLength === 127) {
          this.#state = parserStates.PAYLOADLENGTH_64
        }
        if (this.#info.fragmented && payloadLength > 125) {
          // A fragmented frame can't be fragmented itself
          failWebsocketConnection(this.ws, 'Fragmented frame exceeded 125 bytes.')
          return
        } else if (
          (this.#info.opcode === opcodes.PING ||
            this.#info.opcode === opcodes.PONG ||
            this.#info.opcode === opcodes.CLOSE) &&
          payloadLength > 125
        ) {
          // Control frames can have a payload length of 125 bytes MAX
          failWebsocketConnection(this.ws, 'Payload length for control frame exceeded 125 bytes.')
          return
        } else if (this.#info.opcode === opcodes.CLOSE) {
          if (payloadLength === 1) {
            failWebsocketConnection(this.ws, 'Received close frame with a 1-byte body.')
            return
          }
          const body = this.consume(payloadLength)
          this.#info.closeInfo = this.parseCloseBody(false, body)
          if (!this.ws[kSentClose]) {
            // If an endpoint receives a Close frame and did not previously send a
            // Close frame, the endpoint MUST send a Close frame in response.  (When
            // sending a Close frame in response, the endpoint typically echos the
            // status code it received.)
            const body = Buffer.allocUnsafe(2)
            body.writeUInt16BE(this.#info.closeInfo.code, 0)
            const closeFrame = new WebsocketFrameSend(body)
            this.ws[kResponse].socket.write(
              closeFrame.createFrame(opcodes.CLOSE),
              (err) => {
                if (!err) {
                  this.ws[kSentClose] = true
                }
              }
            )
          }
          // Upon either sending or receiving a Close control frame, it is said
          // that _The WebSocket Closing Handshake is Started_ and that the
          // WebSocket connection is in the CLOSING state.
          this.ws[kReadyState] = states.CLOSING
          this.ws[kReceivedClose] = true
          this.end()
          return
        } else if (this.#info.opcode === opcodes.PING) {
          // Upon receipt of a Ping frame, an endpoint MUST send a Pong frame in
          // response, unless it already received a Close frame.
          // A Pong frame sent in response to a Ping frame must have identical
          // "Application data"
          const body = this.consume(payloadLength)
          if (!this.ws[kReceivedClose]) {
            const frame = new WebsocketFrameSend(body)
            this.ws[kResponse].socket.write(frame.createFrame(opcodes.PONG))
            if (channels.ping.hasSubscribers) {
              channels.ping.publish({
                payload: body
              })
            }
          }
          this.#state = parserStates.INFO
          if (this.#byteOffset > 0) {
            continue
          } else {
            callback()
            return
          }
        } else if (this.#info.opcode === opcodes.PONG) {
          // A Pong frame MAY be sent unsolicited.  This serves as a
          // unidirectional heartbeat.  A response to an unsolicited Pong frame is
          // not expected.
          const body = this.consume(payloadLength)
          if (channels.pong.hasSubscribers) {
            channels.pong.publish({
              payload: body
            })
          }
          if (this.#byteOffset > 0) {
            continue
          } else {
            callback()
            return
          }
        }
      } else if (this.#state === parserStates.PAYLOADLENGTH_16) {
        if (this.#byteOffset < 2) {
          return callback()
        }
        const buffer = this.consume(2)
        this.#info.payloadLength = buffer.readUInt16BE(0)
        this.#state = parserStates.READ_DATA
      } else if (this.#state === parserStates.PAYLOADLENGTH_64) {
        if (this.#byteOffset < 8) {
          return callback()
        }
        const buffer = this.consume(8)
        const upper = buffer.readUInt32BE(0)
        // 2^31 is the maxinimum bytes an arraybuffer can contain
        // on 32-bit systems. Although, on 64-bit systems, this is
        // 2^53-1 bytes.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length
        // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/common/globals.h;drc=1946212ac0100668f14eb9e2843bdd846e510a1e;bpv=1;bpt=1;l=1275
        // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/js-array-buffer.h;l=34;drc=1946212ac0100668f14eb9e2843bdd846e510a1e
        if (upper > 2 ** 31 - 1) {
          failWebsocketConnection(this.ws, 'Received payload length > 2^31 bytes.')
          return
        }
        const lower = buffer.readUInt32BE(4)
        this.#info.payloadLength = (upper << 8) + lower
        this.#state = parserStates.READ_DATA
      } else if (this.#state === parserStates.READ_DATA) {
        if (this.#byteOffset < this.#info.payloadLength) {
          // If there is still more data in this chunk that needs to be read
          return callback()
        } else if (this.#byteOffset >= this.#info.payloadLength) {
          // If the server sent multiple frames in a single chunk
          const body = this.consume(this.#info.payloadLength)
          this.#fragments.push(body)
          // If the frame is unfragmented, or a fragmented frame was terminated,
          // a message was received
          if (!this.#info.fragmented || (this.#info.fin && this.#info.opcode === opcodes.CONTINUATION)) {
            const fullMessage = Buffer.concat(this.#fragments)
            websocketMessageReceived(this.ws, this.#info.originalOpcode, fullMessage)
            this.#info = {}
            this.#fragments.length = 0
          }
          this.#state = parserStates.INFO
        }
      }
      if (this.#byteOffset > 0) {
        continue
      } else {
        callback()
        break
      }
    }
  /**
   * Take n bytes from the buffered Buffers
   * @param {number} n
   * @returns {Buffer|null}
   */
  consume (n) {
    if (n > this.#byteOffset) {
      return null
    } else if (n === 0) {
      return emptyBuffer
    }
    if (this.#buffers[0].length === n) {
      this.#byteOffset -= this.#buffers[0].length
      return this.#buffers.shift()
    }
    const buffer = Buffer.allocUnsafe(n)
    let offset = 0
    while (offset !== n) {
      const next = this.#buffers[0]
      const { length } = next
      if (length + offset === n) {
        buffer.set(this.#buffers.shift(), offset)
        break
      } else if (length + offset > n) {
        buffer.set(next.subarray(0, n - offset), offset)
        this.#buffers[0] = next.subarray(n - offset)
        break
      } else {
        buffer.set(this.#buffers.shift(), offset)
        offset += next.length
      }
    }
    this.#byteOffset -= n
    return buffer
  }
  parseCloseBody (onlyCode, data) {
    // https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.5
    /** @type {number|undefined} */
    let code
    if (data.length >= 2) {
      // _The WebSocket Connection Close Code_ is
      // defined as the status code (Section 7.4) contained in the first Close
      // control frame received by the application
      code = data.readUInt16BE(0)
    }
    if (onlyCode) {
      if (!isValidStatusCode(code)) {
        return null
      }
      return { code }
    }
    // https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.6
    /** @type {Buffer} */
    let reason = data.subarray(2)
    // Remove BOM
    if (reason[0] === 0xEF && reason[1] === 0xBB && reason[2] === 0xBF) {
      reason = reason.subarray(3)
    }
    if (code !== undefined && !isValidStatusCode(code)) {
      return null
    }
    try {
      // TODO: optimize this
      reason = new TextDecoder('utf-8', { fatal: true }).decode(reason)
    } catch {
      return null
    }
    return { code, reason }
  }
  get closingInfo () {
    return this.#info.closeInfo
}
module.exports = {
  ByteParser
/***/ 6708:
/***/ ((module) => {
module.exports = {
  kWebSocketURL: Symbol('url'),
  kReadyState: Symbol('ready state'),
  kController: Symbol('controller'),
  kResponse: Symbol('response'),
  kBinaryType: Symbol('binary type'),
  kSentClose: Symbol('sent close'),
  kReceivedClose: Symbol('received close'),
  kByteParser: Symbol('byte parser')
}

/***/ 8829:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {
const { kReadyState, kController, kResponse, kBinaryType, kWebSocketURL } = __nccwpck_require__(6708)
const { states, opcodes } = __nccwpck_require__(8420)
const { MessageEvent, ErrorEvent } = __nccwpck_require__(6544)
/* globals Blob */
/**
 * @param {import('./websocket').WebSocket} ws
 */
function isEstablished (ws) {
  // If the server's response is validated as provided for above, it is
  // said that _The WebSocket Connection is Established_ and that the
  // WebSocket Connection is in the OPEN state.
  return ws[kReadyState] === states.OPEN
}
/**
 * @param {import('./websocket').WebSocket} ws
 */
function isClosing (ws) {
  // Upon either sending or receiving a Close control frame, it is said
  // that _The WebSocket Closing Handshake is Started_ and that the
  // WebSocket connection is in the CLOSING state.
  return ws[kReadyState] === states.CLOSING
}
/**
 * @param {import('./websocket').WebSocket} ws
 */
function isClosed (ws) {
  return ws[kReadyState] === states.CLOSED
}
/**
 * @see https://dom.spec.whatwg.org/#concept-event-fire
 * @param {string} e
 * @param {EventTarget} target
 * @param {EventInit | undefined} eventInitDict
 */
function fireEvent (e, target, eventConstructor = Event, eventInitDict) {
  // 1. If eventConstructor is not given, then let eventConstructor be Event.
  // 2. Let event be the result of creating an event given eventConstructor,
  //    in the relevant realm of target.
  // 3. Initialize event’s type attribute to e.
  const event = new eventConstructor(e, eventInitDict) // eslint-disable-line new-cap
  // 4. Initialize any other IDL attributes of event as described in the
  //    invocation of this algorithm.
  // 5. Return the result of dispatching event at target, with legacy target
  //    override flag set if set.
  target.dispatchEvent(event)
/**
 * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
 * @param {import('./websocket').WebSocket} ws
 * @param {number} type Opcode
 * @param {Buffer} data application data
 */
function websocketMessageReceived (ws, type, data) {
  // 1. If ready state is not OPEN (1), then return.
  if (ws[kReadyState] !== states.OPEN) {
    return
  }
  // 2. Let dataForEvent be determined by switching on type and binary type:
  let dataForEvent
  if (type === opcodes.TEXT) {
    // -> type indicates that the data is Text
    //      a new DOMString containing data
    try {
      dataForEvent = new TextDecoder('utf-8', { fatal: true }).decode(data)
    } catch {
      failWebsocketConnection(ws, 'Received invalid UTF-8 in text frame.')
      return
    }
  } else if (type === opcodes.BINARY) {
    if (ws[kBinaryType] === 'blob') {
      // -> type indicates that the data is Binary and binary type is "blob"
      //      a new Blob object, created in the relevant Realm of the WebSocket
      //      object, that represents data as its raw data
      dataForEvent = new Blob([data])
    } else {
      // -> type indicates that the data is Binary and binary type is "arraybuffer"
      //      a new ArrayBuffer object, created in the relevant Realm of the
      //      WebSocket object, whose contents are data
      dataForEvent = new Uint8Array(data).buffer
    }
  }
  // 3. Fire an event named message at the WebSocket object, using MessageEvent,
  //    with the origin attribute initialized to the serialization of the WebSocket
  //    object’s url's origin, and the data attribute initialized to dataForEvent.
  fireEvent('message', ws, MessageEvent, {
    origin: ws[kWebSocketURL].origin,
    data: dataForEvent
  })
}
/**
 * @see https://datatracker.ietf.org/doc/html/rfc6455
 * @see https://datatracker.ietf.org/doc/html/rfc2616
 * @see https://bugs.chromium.org/p/chromium/issues/detail?id=398407
 * @param {string} protocol
 */
function isValidSubprotocol (protocol) {
  // If present, this value indicates one
  // or more comma-separated subprotocol the client wishes to speak,
  // ordered by preference.  The elements that comprise this value
  // MUST be non-empty strings with characters in the range U+0021 to
  // U+007E not including separator characters as defined in
  // [RFC2616] and MUST all be unique strings.
  if (protocol.length === 0) {
    return false
  }
  for (const char of protocol) {
    const code = char.charCodeAt(0)
    if (
      code < 0x21 ||
      code > 0x7E ||
      char === '(' ||
      char === ')' ||
      char === '<' ||
      char === '>' ||
      char === '@' ||
      char === ',' ||
      char === ';' ||
      char === ':' ||
      char === '\\' ||
      char === '"' ||
      char === '/' ||
      char === '[' ||
      char === ']' ||
      char === '?' ||
      char === '=' ||
      char === '{' ||
      char === '}' ||
      code === 32 || // SP
      code === 9 // HT
    ) {
      return false
    }
  }
  return true
}
/**
 * @see https://datatracker.ietf.org/doc/html/rfc6455#section-7-4
 * @param {number} code
 */
function isValidStatusCode (code) {
  if (code >= 1000 && code < 1015) {
    return (
      code !== 1004 && // reserved
      code !== 1005 && // "MUST NOT be set as a status code"
      code !== 1006 // "MUST NOT be set as a status code"
    )
  }
  return code >= 3000 && code <= 4999
}
/**
 * @param {import('./websocket').WebSocket} ws
 * @param {string|undefined} reason
 */
function failWebsocketConnection (ws, reason) {
  const { [kController]: controller, [kResponse]: response } = ws
  controller.abort()
  if (response?.socket && !response.socket.destroyed) {
    response.socket.destroy()
  }
  if (reason) {
    fireEvent('error', ws, ErrorEvent, {
      error: new Error(reason)
    })
}
module.exports = {
  isEstablished,
  isClosing,
  isClosed,
  fireEvent,
  isValidSubprotocol,
  isValidStatusCode,
  failWebsocketConnection,
  websocketMessageReceived

/***/ 7634:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {
const { webidl } = __nccwpck_require__(185)
const { DOMException } = __nccwpck_require__(1411)
const { URLSerializer } = __nccwpck_require__(2059)
const { getGlobalOrigin } = __nccwpck_require__(2071)
const { staticPropertyDescriptors, states, opcodes, emptyBuffer } = __nccwpck_require__(8420)
const {
  kWebSocketURL,
  kReadyState,
  kController,
  kBinaryType,
  kResponse,
  kSentClose,
  kByteParser
} = __nccwpck_require__(6708)
const { isEstablished, isClosing, isValidSubprotocol, failWebsocketConnection, fireEvent } = __nccwpck_require__(8829)
const { establishWebSocketConnection } = __nccwpck_require__(9277)
const { WebsocketFrameSend } = __nccwpck_require__(2308)
const { ByteParser } = __nccwpck_require__(4648)
const { kEnumerableProperty, isBlobLike } = __nccwpck_require__(701)
const { getGlobalDispatcher } = __nccwpck_require__(4662)
const { types } = __nccwpck_require__(9023)
let experimentalWarned = false
// https://websockets.spec.whatwg.org/#interface-definition
class WebSocket extends EventTarget {
  #events = {
    open: null,
    error: null,
    close: null,
    message: null
  #bufferedAmount = 0
  #protocol = ''
  #extensions = ''
  /**
   * @param {string} url
   * @param {string|string[]} protocols
   */
  constructor (url, protocols = []) {
    super()
    webidl.argumentLengthCheck(arguments, 1, { header: 'WebSocket constructor' })
    if (!experimentalWarned) {
      experimentalWarned = true
      process.emitWarning('WebSockets are experimental, expect them to change at any time.', {
        code: 'UNDICI-WS'
      })
    }
    const options = webidl.converters['DOMString or sequence<DOMString> or WebSocketInit'](protocols)
    url = webidl.converters.USVString(url)
    protocols = options.protocols
    // 1. Let baseURL be this's relevant settings object's API base URL.
    const baseURL = getGlobalOrigin()
    // 1. Let urlRecord be the result of applying the URL parser to url with baseURL.
    let urlRecord
    try {
      urlRecord = new URL(url, baseURL)
    } catch (e) {
      // 3. If urlRecord is failure, then throw a "SyntaxError" DOMException.
      throw new DOMException(e, 'SyntaxError')
    }
    // 4. If urlRecord’s scheme is "http", then set urlRecord’s scheme to "ws".
    if (urlRecord.protocol === 'http:') {
      urlRecord.protocol = 'ws:'
    } else if (urlRecord.protocol === 'https:') {
      // 5. Otherwise, if urlRecord’s scheme is "https", set urlRecord’s scheme to "wss".
      urlRecord.protocol = 'wss:'
    }
    // 6. If urlRecord’s scheme is not "ws" or "wss", then throw a "SyntaxError" DOMException.
    if (urlRecord.protocol !== 'ws:' && urlRecord.protocol !== 'wss:') {
      throw new DOMException(
        `Expected a ws: or wss: protocol, got ${urlRecord.protocol}`,
        'SyntaxError'
      )
    }
    // 7. If urlRecord’s fragment is non-null, then throw a "SyntaxError"
    //    DOMException.
    if (urlRecord.hash || urlRecord.href.endsWith('#')) {
      throw new DOMException('Got fragment', 'SyntaxError')
    }
    // 8. If protocols is a string, set protocols to a sequence consisting
    //    of just that string.
    if (typeof protocols === 'string') {
      protocols = [protocols]
    }
    // 9. If any of the values in protocols occur more than once or otherwise
    //    fail to match the requirements for elements that comprise the value
    //    of `Sec-WebSocket-Protocol` fields as defined by The WebSocket
    //    protocol, then throw a "SyntaxError" DOMException.
    if (protocols.length !== new Set(protocols.map(p => p.toLowerCase())).size) {
      throw new DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError')
    }
    if (protocols.length > 0 && !protocols.every(p => isValidSubprotocol(p))) {
      throw new DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError')
    }
    // 10. Set this's url to urlRecord.
    this[kWebSocketURL] = new URL(urlRecord.href)
    // 11. Let client be this's relevant settings object.
    // 12. Run this step in parallel:
    //    1. Establish a WebSocket connection given urlRecord, protocols,
    //       and client.
    this[kController] = establishWebSocketConnection(
      urlRecord,
      protocols,
      this,
      (response) => this.#onConnectionEstablished(response),
      options
    )
    // Each WebSocket object has an associated ready state, which is a
    // number representing the state of the connection. Initially it must
    // be CONNECTING (0).
    this[kReadyState] = WebSocket.CONNECTING
    // The extensions attribute must initially return the empty string.
    // The protocol attribute must initially return the empty string.
    // Each WebSocket object has an associated binary type, which is a
    // BinaryType. Initially it must be "blob".
    this[kBinaryType] = 'blob'
  }
  /**
   * @see https://websockets.spec.whatwg.org/#dom-websocket-close
   * @param {number|undefined} code
   * @param {string|undefined} reason
   */
  close (code = undefined, reason = undefined) {
    webidl.brandCheck(this, WebSocket)
    if (code !== undefined) {
      code = webidl.converters['unsigned short'](code, { clamp: true })
    }
    if (reason !== undefined) {
      reason = webidl.converters.USVString(reason)
    }
    // 1. If code is present, but is neither an integer equal to 1000 nor an
    //    integer in the range 3000 to 4999, inclusive, throw an
    //    "InvalidAccessError" DOMException.
    if (code !== undefined) {
      if (code !== 1000 && (code < 3000 || code > 4999)) {
        throw new DOMException('invalid code', 'InvalidAccessError')
      }
    }
    let reasonByteLength = 0
    // 2. If reason is present, then run these substeps:
    if (reason !== undefined) {
      // 1. Let reasonBytes be the result of encoding reason.
      // 2. If reasonBytes is longer than 123 bytes, then throw a
      //    "SyntaxError" DOMException.
      reasonByteLength = Buffer.byteLength(reason)
      if (reasonByteLength > 123) {
        throw new DOMException(
          `Reason must be less than 123 bytes; received ${reasonByteLength}`,
          'SyntaxError'
        )
      }
    // 3. Run the first matching steps from the following list:
    if (this[kReadyState] === WebSocket.CLOSING || this[kReadyState] === WebSocket.CLOSED) {
      // If this's ready state is CLOSING (2) or CLOSED (3)
      // Do nothing.
    } else if (!isEstablished(this)) {
      // If the WebSocket connection is not yet established
      // Fail the WebSocket connection and set this's ready state
      // to CLOSING (2).
      failWebsocketConnection(this, 'Connection was closed before it was established.')
      this[kReadyState] = WebSocket.CLOSING
    } else if (!isClosing(this)) {
      // If the WebSocket closing handshake has not yet been started
      // Start the WebSocket closing handshake and set this's ready
      // state to CLOSING (2).
      // - If neither code nor reason is present, the WebSocket Close
      //   message must not have a body.
      // - If code is present, then the status code to use in the
      //   WebSocket Close message must be the integer given by code.
      // - If reason is also present, then reasonBytes must be
      //   provided in the Close message after the status code.
      const frame = new WebsocketFrameSend()
      // If neither code nor reason is present, the WebSocket Close
      // message must not have a body.
      // If code is present, then the status code to use in the
      // WebSocket Close message must be the integer given by code.
      if (code !== undefined && reason === undefined) {
        frame.frameData = Buffer.allocUnsafe(2)
        frame.frameData.writeUInt16BE(code, 0)
      } else if (code !== undefined && reason !== undefined) {
        // If reason is also present, then reasonBytes must be
        // provided in the Close message after the status code.
        frame.frameData = Buffer.allocUnsafe(2 + reasonByteLength)
        frame.frameData.writeUInt16BE(code, 0)
        // the body MAY contain UTF-8-encoded data with value /reason/
        frame.frameData.write(reason, 2, 'utf-8')
      } else {
        frame.frameData = emptyBuffer
      }
      /** @type {import('stream').Duplex} */
      const socket = this[kResponse].socket
      socket.write(frame.createFrame(opcodes.CLOSE), (err) => {
        if (!err) {
          this[kSentClose] = true
        }
      })
      // Upon either sending or receiving a Close control frame, it is said
      // that _The WebSocket Closing Handshake is Started_ and that the
      // WebSocket connection is in the CLOSING state.
      this[kReadyState] = states.CLOSING
    } else {
      // Otherwise
      // Set this's ready state to CLOSING (2).
      this[kReadyState] = WebSocket.CLOSING
    }
  }
  /**
   * @see https://websockets.spec.whatwg.org/#dom-websocket-send
   * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
   */
  send (data) {
    webidl.brandCheck(this, WebSocket)
    webidl.argumentLengthCheck(arguments, 1, { header: 'WebSocket.send' })
    data = webidl.converters.WebSocketSendData(data)
    // 1. If this's ready state is CONNECTING, then throw an
    //    "InvalidStateError" DOMException.
    if (this[kReadyState] === WebSocket.CONNECTING) {
      throw new DOMException('Sent before connected.', 'InvalidStateError')
    }
    // 2. Run the appropriate set of steps from the following list:
    // https://datatracker.ietf.org/doc/html/rfc6455#section-6.1
    // https://datatracker.ietf.org/doc/html/rfc6455#section-5.2
    if (!isEstablished(this) || isClosing(this)) {
      return
    }
    /** @type {import('stream').Duplex} */
    const socket = this[kResponse].socket
    // If data is a string
    if (typeof data === 'string') {
      // If the WebSocket connection is established and the WebSocket
      // closing handshake has not yet started, then the user agent
      // must send a WebSocket Message comprised of the data argument
      // using a text frame opcode; if the data cannot be sent, e.g.
      // because it would need to be buffered but the buffer is full,
      // the user agent must flag the WebSocket as full and then close
      // the WebSocket connection. Any invocation of this method with a
      // string argument that does not throw an exception must increase
      // the bufferedAmount attribute by the number of bytes needed to
      // express the argument as UTF-8.
      const value = Buffer.from(data)
      const frame = new WebsocketFrameSend(value)
      const buffer = frame.createFrame(opcodes.TEXT)
      this.#bufferedAmount += value.byteLength
      socket.write(buffer, () => {
        this.#bufferedAmount -= value.byteLength
      })
    } else if (types.isArrayBuffer(data)) {
      // If the WebSocket connection is established, and the WebSocket
      // closing handshake has not yet started, then the user agent must
      // send a WebSocket Message comprised of data using a binary frame
      // opcode; if the data cannot be sent, e.g. because it would need
      // to be buffered but the buffer is full, the user agent must flag
      // the WebSocket as full and then close the WebSocket connection.
      // The data to be sent is the data stored in the buffer described
      // by the ArrayBuffer object. Any invocation of this method with an
      // ArrayBuffer argument that does not throw an exception must
      // increase the bufferedAmount attribute by the length of the
      // ArrayBuffer in bytes.
      const value = Buffer.from(data)
      const frame = new WebsocketFrameSend(value)
      const buffer = frame.createFrame(opcodes.BINARY)
      this.#bufferedAmount += value.byteLength
      socket.write(buffer, () => {
        this.#bufferedAmount -= value.byteLength
      })
    } else if (ArrayBuffer.isView(data)) {
      // If the WebSocket connection is established, and the WebSocket
      // closing handshake has not yet started, then the user agent must
      // send a WebSocket Message comprised of data using a binary frame
      // opcode; if the data cannot be sent, e.g. because it would need to
      // be buffered but the buffer is full, the user agent must flag the
      // WebSocket as full and then close the WebSocket connection. The
      // data to be sent is the data stored in the section of the buffer
      // described by the ArrayBuffer object that data references. Any
      // invocation of this method with this kind of argument that does
      // not throw an exception must increase the bufferedAmount attribute
      // by the length of data’s buffer in bytes.
      const ab = Buffer.from(data, data.byteOffset, data.byteLength)
      const frame = new WebsocketFrameSend(ab)
      const buffer = frame.createFrame(opcodes.BINARY)
      this.#bufferedAmount += ab.byteLength
      socket.write(buffer, () => {
        this.#bufferedAmount -= ab.byteLength
      })
    } else if (isBlobLike(data)) {
      // If the WebSocket connection is established, and the WebSocket
      // closing handshake has not yet started, then the user agent must
      // send a WebSocket Message comprised of data using a binary frame
      // opcode; if the data cannot be sent, e.g. because it would need to
      // be buffered but the buffer is full, the user agent must flag the
      // WebSocket as full and then close the WebSocket connection. The data
      // to be sent is the raw data represented by the Blob object. Any
      // invocation of this method with a Blob argument that does not throw
      // an exception must increase the bufferedAmount attribute by the size
      // of the Blob object’s raw data, in bytes.
      const frame = new WebsocketFrameSend()
      data.arrayBuffer().then((ab) => {
        const value = Buffer.from(ab)
        frame.frameData = value
        const buffer = frame.createFrame(opcodes.BINARY)
        this.#bufferedAmount += value.byteLength
        socket.write(buffer, () => {
          this.#bufferedAmount -= value.byteLength
        })
      })
    }
  }
  get readyState () {
    webidl.brandCheck(this, WebSocket)
    // The readyState getter steps are to return this's ready state.
    return this[kReadyState]
  }
  get bufferedAmount () {
    webidl.brandCheck(this, WebSocket)
    return this.#bufferedAmount
  }
  get url () {
    webidl.brandCheck(this, WebSocket)
    // The url getter steps are to return this's url, serialized.
    return URLSerializer(this[kWebSocketURL])
  }
  get extensions () {
    webidl.brandCheck(this, WebSocket)
    return this.#extensions
  }
  get protocol () {
    webidl.brandCheck(this, WebSocket)
    return this.#protocol
  }
  get onopen () {
    webidl.brandCheck(this, WebSocket)
    return this.#events.open
  }
  set onopen (fn) {
    webidl.brandCheck(this, WebSocket)
    if (this.#events.open) {
      this.removeEventListener('open', this.#events.open)
    }
    if (typeof fn === 'function') {
      this.#events.open = fn
      this.addEventListener('open', fn)
    } else {
      this.#events.open = null
    }
  get onerror () {
    webidl.brandCheck(this, WebSocket)
    return this.#events.error
  }
  set onerror (fn) {
    webidl.brandCheck(this, WebSocket)
    if (this.#events.error) {
      this.removeEventListener('error', this.#events.error)
    if (typeof fn === 'function') {
      this.#events.error = fn
      this.addEventListener('error', fn)
    } else {
      this.#events.error = null
    }
  }
  get onclose () {
    webidl.brandCheck(this, WebSocket)
    return this.#events.close
  }
  set onclose (fn) {
    webidl.brandCheck(this, WebSocket)
    if (this.#events.close) {
      this.removeEventListener('close', this.#events.close)
    if (typeof fn === 'function') {
      this.#events.close = fn
      this.addEventListener('close', fn)
    } else {
      this.#events.close = null
    }
  }
  get onmessage () {
    webidl.brandCheck(this, WebSocket)
    return this.#events.message
  }
  set onmessage (fn) {
    webidl.brandCheck(this, WebSocket)
    if (this.#events.message) {
      this.removeEventListener('message', this.#events.message)
    }
    if (typeof fn === 'function') {
      this.#events.message = fn
      this.addEventListener('message', fn)
    } else {
      this.#events.message = null
    }
  }
  get binaryType () {
    webidl.brandCheck(this, WebSocket)
    return this[kBinaryType]
  }
  set binaryType (type) {
    webidl.brandCheck(this, WebSocket)
    if (type !== 'blob' && type !== 'arraybuffer') {
      this[kBinaryType] = 'blob'
    } else {
      this[kBinaryType] = type
    }
  }
  /**
   * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
   */
  #onConnectionEstablished (response) {
    // processResponse is called when the "response’s header list has been received and initialized."
    // once this happens, the connection is open
    this[kResponse] = response
    const parser = new ByteParser(this)
    parser.on('drain', function onParserDrain () {
      this.ws[kResponse].socket.resume()
    })
    response.socket.ws = this
    this[kByteParser] = parser
    // 1. Change the ready state to OPEN (1).
    this[kReadyState] = states.OPEN
    // 2. Change the extensions attribute’s value to the extensions in use, if
    //    it is not the null value.
    // https://datatracker.ietf.org/doc/html/rfc6455#section-9.1
    const extensions = response.headersList.get('sec-websocket-extensions')
    if (extensions !== null) {
      this.#extensions = extensions
    }
    // 3. Change the protocol attribute’s value to the subprotocol in use, if
    //    it is not the null value.
    // https://datatracker.ietf.org/doc/html/rfc6455#section-1.9
    const protocol = response.headersList.get('sec-websocket-protocol')
    if (protocol !== null) {
      this.#protocol = protocol
    // 4. Fire an event named open at the WebSocket object.
    fireEvent('open', this)
// https://websockets.spec.whatwg.org/#dom-websocket-connecting
WebSocket.CONNECTING = WebSocket.prototype.CONNECTING = states.CONNECTING
// https://websockets.spec.whatwg.org/#dom-websocket-open
WebSocket.OPEN = WebSocket.prototype.OPEN = states.OPEN
// https://websockets.spec.whatwg.org/#dom-websocket-closing
WebSocket.CLOSING = WebSocket.prototype.CLOSING = states.CLOSING
// https://websockets.spec.whatwg.org/#dom-websocket-closed
WebSocket.CLOSED = WebSocket.prototype.CLOSED = states.CLOSED
Object.defineProperties(WebSocket.prototype, {
  CONNECTING: staticPropertyDescriptors,
  OPEN: staticPropertyDescriptors,
  CLOSING: staticPropertyDescriptors,
  CLOSED: staticPropertyDescriptors,
  url: kEnumerableProperty,
  readyState: kEnumerableProperty,
  bufferedAmount: kEnumerableProperty,
  onopen: kEnumerableProperty,
  onerror: kEnumerableProperty,
  onclose: kEnumerableProperty,
  close: kEnumerableProperty,
  onmessage: kEnumerableProperty,
  binaryType: kEnumerableProperty,
  send: kEnumerableProperty,
  extensions: kEnumerableProperty,
  protocol: kEnumerableProperty,
  [Symbol.toStringTag]: {
    value: 'WebSocket',
    writable: false,
    enumerable: false,
    configurable: true
  }
})
Object.defineProperties(WebSocket, {
  CONNECTING: staticPropertyDescriptors,
  OPEN: staticPropertyDescriptors,
  CLOSING: staticPropertyDescriptors,
  CLOSED: staticPropertyDescriptors
})
webidl.converters['sequence<DOMString>'] = webidl.sequenceConverter(
  webidl.converters.DOMString
)
webidl.converters['DOMString or sequence<DOMString>'] = function (V) {
  if (webidl.util.Type(V) === 'Object' && Symbol.iterator in V) {
    return webidl.converters['sequence<DOMString>'](V)
  }
  return webidl.converters.DOMString(V)
}
// This implements the propsal made in https://github.com/whatwg/websockets/issues/42
webidl.converters.WebSocketInit = webidl.dictionaryConverter([
  {
    key: 'protocols',
    converter: webidl.converters['DOMString or sequence<DOMString>'],
    get defaultValue () {
      return []
    }
  },
  {
    key: 'dispatcher',
    converter: (V) => V,
    get defaultValue () {
      return getGlobalDispatcher()
    }
  },
  {
    key: 'headers',
    converter: webidl.nullableConverter(webidl.converters.HeadersInit)
  }
])
webidl.converters['DOMString or sequence<DOMString> or WebSocketInit'] = function (V) {
  if (webidl.util.Type(V) === 'Object' && !(Symbol.iterator in V)) {
    return webidl.converters.WebSocketInit(V)
  }
  return { protocols: webidl.converters['DOMString or sequence<DOMString>'](V) }
}
webidl.converters.WebSocketSendData = function (V) {
  if (webidl.util.Type(V) === 'Object') {
    if (isBlobLike(V)) {
      return webidl.converters.Blob(V, { strict: false })
    }
    if (ArrayBuffer.isView(V) || types.isAnyArrayBuffer(V)) {
      return webidl.converters.BufferSource(V)
    }
  }
  return webidl.converters.USVString(V)
}
module.exports = {
  WebSocket
/***/ 6678:
/***/ ((__unused_webpack_module, exports) => {
Object.defineProperty(exports, "__esModule", ({ value: true }));
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }
  if (typeof process === "object" && process.version !== undefined) {
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
  return "<environment undetectable>";
exports.getUserAgent = getUserAgent;
//# sourceMappingURL=index.js.map

/***/ 6039:
/***/ 7353:
const child_process_1 = __nccwpck_require__(5317);
const core_1 = __nccwpck_require__(6966);
const github_1 = __nccwpck_require__(4903);
const utils_1 = __nccwpck_require__(6087);
const PNPM_AUDIT_COMMENT_IDENTIFIER = "<!-- pnpm-audit-comment -->";
const findExistingComment = (octokit, repoContext, prNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = (yield octokit.paginate(octokit.rest.issues.listComments, Object.assign(Object.assign({}, repoContext), { issue_number: prNumber, per_page: 100 })));
    return comments.find((comment) => { var _a; return (_a = comment.body) === null || _a === void 0 ? void 0 : _a.includes(PNPM_AUDIT_COMMENT_IDENTIFIER); });
});
const upsertComment = (octokit, repoContext, prNumber, message, fails, singleComment) => __awaiter(void 0, void 0, void 0, function* () {
        const body = singleComment
            ? `${PNPM_AUDIT_COMMENT_IDENTIFIER}\n${message}`
            : message;
        if (singleComment) {
            const existingComment = yield findExistingComment(octokit, repoContext, prNumber);
            if (existingComment !== undefined) {
                yield octokit.rest.issues.updateComment(Object.assign(Object.assign({}, repoContext), { comment_id: existingComment.id, body }));
            }
            else {
                yield octokit.rest.issues.createComment(Object.assign(Object.assign({}, repoContext), { issue_number: prNumber, body }));
            }
        }
        else {
            yield octokit.rest.issues.createComment(Object.assign(Object.assign({}, repoContext), { issue_number: prNumber, body }));
        }
const removeExistingComment = (octokit, repoContext, prNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const existingComment = yield findExistingComment(octokit, repoContext, prNumber);
    if (existingComment !== undefined) {
        yield octokit.rest.issues.deleteComment(Object.assign(Object.assign({}, repoContext), { comment_id: existingComment.id }));
    }
});
    var _a;
    const singleComment = (0, core_1.getBooleanInput)("single_comment");
    const prNumber = github_1.context.payload.pull_request.number;
    const repoContext = github_1.context.repo;
    const octokit = (0, github_1.getOctokit)(token);
        if (singleComment) {
            yield removeExistingComment(octokit, repoContext, prNumber);
        }
        const output = (_a = out === null || out === void 0 ? void 0 : out.stdout) === null || _a === void 0 ? void 0 : _a.toString("utf-8");
        if (output === undefined) {
            throw out;
        }
        const json = JSON.parse(output);
            yield upsertComment(octokit, repoContext, prNumber, markdown, fails, singleComment);
        }
        else if (singleComment) {
            yield removeExistingComment(octokit, repoContext, prNumber);
/***/ 6087:
/***/ 2613:
/***/ 290:
/***/ 181:
/***/ 5317:
/***/ 4236:
/***/ 6982:
/***/ 1637:
/***/ 4434:
/***/ 9896:
/***/ 8611:
/***/ 5675:
/***/ 5692:
/***/ 9278:
/***/ 7598:
/***/ ((module) => {

"use strict";
module.exports = require("node:crypto");

/***/ }),

/***/ 8474:
/***/ 7075:
/***/ 7975:
/***/ 857:
/***/ 6928:
/***/ 2987:
/***/ 3480:
/***/ 2203:
/***/ 3774:
/***/ 3193:
/***/ 3557:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 4756:
/***/ 7016:
/***/ 9023:
/***/ 8253:
/***/ 8167:
/***/ 3106:
/***/ 2682:
const WritableStream = (__nccwpck_require__(7075).Writable)
const inherits = (__nccwpck_require__(7975).inherits)
const StreamSearch = __nccwpck_require__(5868)
const PartStream = __nccwpck_require__(2424)
const HeaderParser = __nccwpck_require__(2035)
      if (this.listenerCount('preamble') !== 0) { this.emit('preamble', this._part) } else { this._ignore() }
      if ((start + i) < end && this.listenerCount('trailer') !== 0) { this.emit('trailer', data.slice(start + i, end)) }
    if (this._isPreamble && this.listenerCount('preamble') !== 0) {
      this.emit('preamble', this._part)
    } else if (this._isPreamble !== true && this.listenerCount('part') !== 0) {
      this.emit('part', this._part)
    } else {
      this._ignore()
    }
/***/ 2035:
const EventEmitter = (__nccwpck_require__(8474).EventEmitter)
const inherits = (__nccwpck_require__(7975).inherits)
const getLimit = __nccwpck_require__(4165)
const StreamSearch = __nccwpck_require__(5868)
/***/ 2424:
const inherits = (__nccwpck_require__(7975).inherits)
const ReadableStream = (__nccwpck_require__(7075).Readable)
/***/ 5868:
const EventEmitter = (__nccwpck_require__(8474).EventEmitter)
const inherits = (__nccwpck_require__(7975).inherits)
/***/ 2105:
const WritableStream = (__nccwpck_require__(7075).Writable)
const { inherits } = __nccwpck_require__(7975)
const Dicer = __nccwpck_require__(2682)
const MultipartParser = __nccwpck_require__(3548)
const UrlencodedParser = __nccwpck_require__(5915)
const parseParams = __nccwpck_require__(1493)
/***/ 3548:
const { Readable } = __nccwpck_require__(7075)
const { inherits } = __nccwpck_require__(7975)
const Dicer = __nccwpck_require__(2682)
const parseParams = __nccwpck_require__(1493)
const decodeText = __nccwpck_require__(7015)
const basename = __nccwpck_require__(1744)
const getLimit = __nccwpck_require__(4165)
        if (boy.listenerCount('file') === 0) {
/***/ 5915:
const Decoder = __nccwpck_require__(5332)
const decodeText = __nccwpck_require__(7015)
const getLimit = __nccwpck_require__(4165)
/***/ 5332:
/***/ 1744:
/***/ 7015:
      } catch {}
/***/ 4165:
/***/ 1493:
const decodeText = __nccwpck_require__(7015)
/******/ 	var __webpack_exports__ = __nccwpck_require__(7353);