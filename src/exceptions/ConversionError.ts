import { CustomError } from './CustomError';

class ConversionError extends CustomError {
  statusCode = 500;
  private static _reason = 'Failed to perform conversion of value.';

  constructor(message?: string) {
    super(message || ConversionError._reason);

    // Only because I'm extending a built in class.
    Object.setPrototypeOf(this, ConversionError.prototype);
  }

  serializeErrors(): { message: string; field?: string }[] {
    return [{ message: ConversionError._reason }];
  }
}

export { ConversionError };
