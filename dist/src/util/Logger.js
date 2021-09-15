'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const logger = (moduleName) => {
    return winston.createLogger({
        format: winston.format.combine(winston.format.colorize({
            all: true
        }), winston.format.label({
            label: moduleName
        }), winston.format.timestamp({
            format: "YY-MM-DD HH:MM:SS"
        }), winston.format.printf((info) => {
            return `${info.timestamp} - ${info.label} - ${info.level} - ${info.message}`;
        })
        //,winston.format.json()
        ),
        level: 'debug',
        transports: [
            new winston.transports.Console({}),
        ],
    });
};
exports.default = logger;
//# sourceMappingURL=Logger.js.map