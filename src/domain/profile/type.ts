import type { UseCase, Repository, InitData } from "~/util/type";
import { InfraException } from "~/util/exception/Infra";
import { UseCaseException } from "~/util/exception/UseCase";
import { AppException } from "~/util/exception/App";

export type Profile = {
  /**
   * 再度レンダリング可能化の判定
   */
  tryCanReRender: (
    p: InfraException | UseCaseException | AppException
  ) => boolean;
  /**
   * レンダリングの流れ
   */
  render: UseCase<
    { repository: ProfileRepository },
    Promise<InitData<{ name: string }>>
  >;
};

export type ProfileRepository = {
  fetch: <E = never>() => Repository<Promise<{ id: string; name: string } | E>>;
};
