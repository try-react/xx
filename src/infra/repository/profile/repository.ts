import { ProfileRepository } from "~/domain/profile/type";
import { client } from "./client";

export const repository: ProfileRepository = {
  fetch: client.fetchProfile,
};
