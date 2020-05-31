import type { Profile, ProfileInitData } from "./type";
import { throwError } from "~/util/lib";

export const profile: Profile = {
  render: ({ repository }) =>
    repository
      .fetch()
      .then((v) => v)
      .catch(throwError),
};

export const typeGuard = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  isProfileInitData: (p: any): p is ProfileInitData => {
    // 手抜き... 本当は、classにして、instanceofで判断すべき
    return !!p?.description;
  },
};
