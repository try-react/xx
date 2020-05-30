import type { Profile } from "./type";
import { InfraException } from "~/util/exception/Infra";
import { UseCaseException } from "~/util/exception/UseCase";
import { AppException } from "~/util/exception/App";
import { throwError } from "~/util/lib";

type RenderRun = ReturnType<ReturnType<Profile["render"]>["run"]>;
export const profile: Profile = {
  tryCanReRender: (p): p is InfraException => {
    if (InfraException.instanceof_(p)) {
      return true;
    }
    if (UseCaseException.instanceof_(p)) {
      return throwError(p);
    }
    if (AppException.instanceof_(p)) {
      return throwError(p);
    }
    return throwError(p);
  },
  render: ({ repository }) => ({
    run: (): RenderRun =>
      repository
        .fetch()
        .then((v) => {
          const { id, ...res } = v;
          return res;
          // ロジックエラー
          // return Promise.reject(
          //   UseCaseException.create("randomで落ちる鬼仕様", {
          //     description: "アクセス権が無い状態でのページ要求など",
          //   })
          // );
        })
        .catch((e) => {
          if (InfraException.instanceof_(e)) {
            return Promise.reject(e);
          }
          if (UseCaseException.instanceof_(e)) {
            return Promise.reject(e);
          }
          return Promise.reject(AppException.create("継続不可能", e));
        }),
  }),
};
