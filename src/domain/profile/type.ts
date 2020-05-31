import type { UseCase, Repository, InitData, InitState } from "~/util/type";
import { InfraException } from "~/util/exception/Infra";

// 手抜き... 本当は、`class` にすべき
export type ProfileType = InitData<{
  id: string;
  name: string;
  description: string;
}>;

export type ProfileInitState = InitState<{
  id: string;
  name: string;
  description: string;
}>;

export type Profile = {
  render: UseCase<
    (p: {
      repository: ProfileRepository;
    }) => Promise<ProfileType | InfraException>
  >;
};

type ProfileResType = {
  id: string;
  name: string;
  description: string;
};

export type ProfileRepository = {
  fetch: () => Repository<Promise<ProfileResType | InfraException>>;
};
