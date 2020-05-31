import type {
  UseCase,
  Repository,
  InitData,
  ResponseData,
  Domain,
} from "~/util/type";
import { InfraException } from "~/util/exception/Infra";

export type ProfileInitData = InitData<{
  id: string;
  name: string;
  description: string;
}>;

export type Profile = Domain<{
  render: UseCase<
    (p: {
      repository: ProfileRepository;
    }) => Promise<ProfileInitData | InfraException>
  >;
}>;

type ProfileResponseData = ResponseData<{
  id: string;
  name: string;
  description: string;
}>;

export type ProfileRepository = {
  fetch: () => Repository<Promise<ProfileResponseData | InfraException>>;
};
