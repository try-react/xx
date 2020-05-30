import type { Exception } from "~/util/type";
import { BaseException } from "./Base";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppExceptionObj = any;

export class AppException extends BaseException {
  get exception(): Exception {
    return this._e;
  }

  private constructor(private _e: Exception) {
    super(_e);
    this.name = AppException.name;
  }

  static create(msg: string, err: AppExceptionObj): AppException {
    return new AppException({ isErr: true, msg, err });
  }
  static instanceof_(p: unknown): p is AppException {
    return p instanceof AppException;
  }
}
