'use strict';
import * as winston from 'winston';
import * as path from 'path';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
  silly: 5,
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
  silly: 'magenta',
};

winston.addColors(colors);

const levelByType: Record<string, string> = {
  development: 'debug',
  production: 'warn',
  integration: 'info',
};

const level = (): string => {
  const logLevel = process.env.LOG_LEVEL || levelByType[process.env.NODE_ENV as string] || 'warn';
  return logLevel;
};

const defaultFormat = () => {
  return winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp(),
    winston.format.printf((info) => {
      return `${info.timestamp} - ${info.label} - ${info.level} - ${info.message}`;
    }),
  );
};

const integrationFormat = () => {
  return winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp(),
    winston.format.ms(),
    winston.format.printf((info) => {
      const moduleName = path.basename(info.label, path.extname(info.label));
      return `${info.timestamp}${moduleName ? ` [ ${moduleName} ] ` : ' '} ${info.message} ${info.ms}`;
    }),
  );
};

const logFormat = (): winston.Logform.Format => {
  const env = process.env.NODE_ENV || 'development';
  const isIntegration = env === 'integration';

  return isIntegration ? integrationFormat() : defaultFormat();
};

const logger = winston.createLogger({
  levels,
  format: logFormat(),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize({ all: true })),
      level: level(),
    }),
    //new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    //new winston.transports.File({ filename: 'logs/all.log' }),
  ],
});

const Logger = (moduleName: string): winston.Logger => {
  return logger.child({
    label: moduleName,
  });
};

export default Logger;
