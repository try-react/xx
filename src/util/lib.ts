type Sleep = () => Promise<void>;
export const sleep: Sleep = () =>
  new Promise((resolve) => setTimeout(resolve, 2500));

type Random = () => boolean;
export const random: Random = () => !!(new Date().getMilliseconds() % 2);

type IsServer = () => boolean;
export const isServer: IsServer = () => typeof window === "undefined";

type IsProd = boolean;
export const isProd: IsProd = process.env.NODE_ENV === "production";

type Onerror = () => void;
export const onerror: Onerror = () => {
  if (isServer()) {
    return;
  }
  window.onerror = (message, file, lineNo, colNo, error) => {
    submitData({ message, file, lineNo, colNo, error });
  };
};

const submitData = (
  ..._p: Array<{
    message: string | Event;
    file: string | undefined;
    lineNo: number | undefined;
    colNo: number | undefined;
    error: Error | undefined;
  }>
) => {
  // サーバへ送信
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throwError = (...p: any): never => {
  if (isProd) {
    submitData(p);
    throw new Error("Error");
  }
  console.dir(...p);
  throw new Error(JSON.stringify(p));
};
