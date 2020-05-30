type Sleep = () => Promise<void>;
export const sleep: Sleep = () =>
  new Promise((resolve) => setTimeout(resolve, 2500));

type Random = () => boolean;
export const random: Random = () => !!(new Date().getMilliseconds() % 2);

type IsServer = () => boolean;
export const isServer: IsServer = () => typeof window === "undefined";

type IsProd = boolean;
export const isProd: IsProd = process.env.NODE_ENV === "production";

export const submitData = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...p: any
): // eslint-disable-next-line @typescript-eslint/no-explicit-any
any => {
  if (isProd) {
    // サーバへ送信
    return;
  }
  console.group();
  console.dir(p);
  console.groupEnd();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throwError = (...p: any): never => {
  submitData(p);
  throw new Error("throwError");
};
