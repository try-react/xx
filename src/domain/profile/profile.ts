import type { Profile, ProfileType } from "./type";
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
  isProfileType: (p: any): p is ProfileType => {
    // 手抜き... 本当は、classで判断すべき
    return !!p?.description;
  },
};
