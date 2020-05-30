export abstract class BaseException extends Error {
  constructor(e: unknown) {
    super(BaseException.toString(e));
    Object.setPrototypeOf(this, new.target.prototype);
  }
  private static toString(e: unknown) {
    return JSON.stringify(e);
  }
}
