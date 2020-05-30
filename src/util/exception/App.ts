import { Exception } from "~/util/type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppExceptionObj = any;

export class AppException {
  get exception(): Exception {
    return this._e;
  }

  private constructor(private _e: Exception) {}

  static create(msg: string, err: AppExceptionObj): AppException {
    return new AppException({ isErr: true, msg, err });
  }
  static instanceof_(p: unknown): p is AppException {
    return p instanceof AppException;
  }
}
