"use strict";
import * as winston from "winston";

const logger = (moduleName: string) => {
  return winston.createLogger({
    format: winston.format.combine(
      winston.format.colorize({
        all: true,
      }),
      winston.format.label({
        label: moduleName,
      }),
      winston.format.timestamp({
        format: "YY-MM-DD HH:MM:SS",
      }),
      winston.format.printf((info) => {
        return `${info.timestamp} - ${info.label} - ${info.level} - ${info.message}`;
      })
      //,winston.format.json()
    ),
    level: "debug",
    transports: [
      new winston.transports.Console({}),
      //new winston.transports.File({ filename: 'error.log', level: 'error' }),
      //new winston.transports.File({ filename: 'all.log' }),
    ],
  });
};

export default logger;
