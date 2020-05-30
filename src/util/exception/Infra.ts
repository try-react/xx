import { Exception } from "~/util/type";

export type InfraExceptionObj = {
  etc: string;
  statusCode: 404 | 400; // ...
};

export class InfraException {
  get exception(): Exception {
    return this._e;
  }

  private constructor(private _e: Exception) {}

  static create(msg: string, err: InfraExceptionObj): InfraException {
    return new InfraException({ isErr: true, msg, err });
  }

  static instanceof_(p: unknown): p is InfraException {
    return p instanceof InfraException;
  }
}
