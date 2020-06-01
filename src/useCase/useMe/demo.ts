/* eslint-disable */
import { sleep, random } from "~/util/lib";

/**
 * fetch処理のmock
 * ランダムで成功or失敗する
 */
export const fetchMe = async () => {
  await sleep();
  if (random()) {
    return Promise.resolve({ name: "tommy" });
  }
  return Promise.reject("APIが...");
};
