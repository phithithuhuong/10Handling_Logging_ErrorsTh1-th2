"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const path_1 = require("path");
exports.logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.splat(), winston_1.default.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }), winston_1.default.format.printf(log => {
        if (log.stack)
            return `[${log.timestamp}]  [${log.level}] ${log.stack}`;
        return `[${log.timestamp}] [${log.level}] ${log.message}`;
    })),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({
            dirname: (0, path_1.join)(__dirname, '../../../var/log/'),
            filename: 'error.log',
            level: 'error',
        })
    ],
});
//# sourceMappingURL=winston.js.map