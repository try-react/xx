import type { Exception } from "~/util/type";
import { BaseException } from "./Base";

export type UseCaseExceptionObj = {
  description: string;
};

export class UseCaseException extends BaseException {
  get exception(): Exception {
    return this._e;
  }

  private constructor(private _e: Exception) {
    super(_e);
    this.name = UseCaseException.name;
  }

  static create(msg: string, err: UseCaseExceptionObj): UseCaseException {
    return new UseCaseException({ isErr: true, msg, err });
  }
  static instanceof_(p: unknown): p is UseCaseException {
    return p instanceof UseCaseException;
  }
}
