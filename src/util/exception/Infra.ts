import type { Exception } from "~/util/type";
import { BaseException } from "./Base";

export type InfraExceptionObj = {
  etc: string;
  statusCode: 404 | 400; // ...
};

export class InfraException extends BaseException {
  get exception(): Exception {
    return this._e;
  }

  private constructor(private _e: Exception) {
    super(_e);
    this.name = InfraException.name;
  }

  static create(msg: string, err: InfraExceptionObj): InfraException {
    return new InfraException({ isErr: true, msg, err });
  }

  static instanceof_(p: unknown): p is InfraException {
    return p instanceof InfraException;
  }
}
