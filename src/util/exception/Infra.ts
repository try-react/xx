import { BaseException } from "./Base";
import type { Exception } from "~/util/type";

type InfraExceptionObj = Exception<{
  etc: string;
  statusCode: 404 | 400; // ...
}>;

export class InfraException extends BaseException {
  get exception(): InfraExceptionObj {
    return this._e;
  }

  private constructor(private _e: InfraExceptionObj) {
    super(_e);
    this.name = InfraException.name;
  }

  static create({ msg, err }: InfraExceptionObj): InfraException {
    return new InfraException({ msg, err });
  }

  static instanceof_(p: unknown): p is InfraException {
    return p instanceof InfraException;
  }
}
