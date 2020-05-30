import { sleep, random } from "~/util/lib";
import { ProfileRepository } from "~/domain/profile/type";
import { InfraException, InfraExceptionObj } from "~/util/exception/Infra";

type Profile = {
  id_: string;
  name_: string;
};

const mockSuccess: Profile = { id_: "1", name_: "アラン・スミシー" };
const mockException: InfraExceptionObj = {
  statusCode: 404,
  etc: "色々",
};

const convertSuccess = (p: Profile) => ({ id: p.id_, name: p.name_ });

const fetchProfile: ProfileRepository["fetch"] = async <InfraException>() => {
  await sleep();
  if (random()) {
    return convertSuccess(mockSuccess);
  }
  return Promise.reject<InfraException>(
    InfraException.create("randomの所でやってもうた。", mockException)
  );
};

export const client = {
  fetchProfile,
};
