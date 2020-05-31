import type { Exception } from "~/util/type";
import { BaseException } from "./Base";

type UseCaseExceptionObj = Exception<{
  description: string;
}>;

export class UseCaseException extends BaseException {
  get exception(): UseCaseExceptionObj {
    return this._e;
  }

  private constructor(private _e: UseCaseExceptionObj) {
    super(_e);
    this.name = UseCaseException.name;
  }

  static create({ msg, err }: UseCaseExceptionObj): UseCaseException {
    return new UseCaseException({ msg, err });
  }
  static instanceof_(p: unknown): p is UseCaseException {
    return p instanceof UseCaseException;
  }
}
