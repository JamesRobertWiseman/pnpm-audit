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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
const createComment = (repoContext, prNumber, message, token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const octokit = (0, github_1.getOctokit)(token);
        yield octokit.rest.issues.createComment(Object.assign(Object.assign({}, repoContext), { issue_number: prNumber, body: message }));
    }
    catch (error) {
        if (error instanceof Error) {
            (0, core_1.setFailed)(error.message);
        }
    }
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const stdin = process.openStdin();
    let auditJson = "";
    stdin.on("data", (chunk) => {
        auditJson += chunk;
    });
    stdin.on("end", () => {
        void (() => __awaiter(void 0, void 0, void 0, function* () {
            const message = auditJson;
            const token = (0, core_1.getInput)("github_token");
            if (github_1.context.payload.pull_request == null) {
                (0, core_1.setFailed)("No pull request found.");
                return;
            }
            const prNumber = github_1.context.payload.pull_request.number;
            yield createComment(github_1.context.repo, prNumber, message, token);
        }))();
    });
});
void main();
