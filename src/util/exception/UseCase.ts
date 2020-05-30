import { Exception } from "~/util/type";

export type UseCaseExceptionObj = {
  description: string;
};

export class UseCaseException {
  get exception(): Exception {
    return this._e;
  }

  private constructor(private _e: Exception) {}

  static create(msg: string, err: UseCaseExceptionObj): UseCaseException {
    return new UseCaseException({ isErr: true, msg, err });
  }
  static instanceof_(p: unknown): p is UseCaseException {
    return p instanceof UseCaseException;
  }
}
