export default class HttpError extends Error {
  code: number;

  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}

export const isNotFoundError = (error: unknown) =>
  error instanceof HttpError && error.code === 404;

export const isForbiddenError = (error: unknown) =>
  error instanceof HttpError && error.code === 403;
