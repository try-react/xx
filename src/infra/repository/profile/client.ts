import { sleep, random } from "~/util/lib";
import type { ProfileRepository } from "~/domain/profile/type";
import { InfraException } from "~/util/exception/Infra";
import type { InfraExceptionObj } from "~/util/exception/Infra";

type Profile = {
  id_: string;
  name_: string;
  description: string;
};

const mockSuccess: [Profile, ...Profile[]] = [
  {
    id_: "1",
    name_: "バルブロ = ストークマン",
    description: "実は、江戸っ子です。",
  },
  {
    id_: "2",
    name_: "ローデリヒ = ノイラート",
    description: "趣味は、水泳です。",
  },
  {
    id_: "3",
    name_: "シーヴ = ラベリ",
    description: "インスタ利用しています。",
  },
];

const mockException: InfraExceptionObj = {
  statusCode: 404,
  etc: "色々",
};

const convertSuccess = (p: Profile) => ({
  id: p.id_,
  name: p.name_,
  description: p.description,
});

const fetchProfile: ProfileRepository["fetch"] = async () => {
  await sleep();
  if (random()) {
    return convertSuccess(
      mockSuccess[Math.floor(Math.random() * mockSuccess.length)]
    );
  }
  return InfraException.create("randomの所でやってもうた。", mockException);
};

export const client = {
  fetchProfile,
};
