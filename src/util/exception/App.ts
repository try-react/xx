import { BaseException } from "./Base";
import type { Exception } from "~/util/type";

type AppExceptionObj = Exception<{
  description: string;
}>;

export class AppException extends BaseException {
  get exception(): AppExceptionObj {
    return this._e;
  }

  private constructor(private _e: AppExceptionObj) {
    super(_e);
    this.name = AppException.name;
  }

  static create({ err, msg }: AppExceptionObj): AppException {
    return new AppException({ msg, err });
  }
  static instanceof_(p: unknown): p is AppException {
    return p instanceof AppException;
  }
}
