import {
  useState,
  useEffect,
  LazyExoticComponent,
  ReactElement,
  FC,
} from "react";

type Redo = () => void;
export type UseLazyComponent = (
  p: (redo: Redo) => LazyExoticComponent<() => ReactElement | null>
) => { Component: FC };

export const useLazyComponent: UseLazyComponent = (create) => {
  const Init: FC = () => null;
  const [done, setDone] = useState(true);
  const [{ Component }, setComponent] = useState({ Component: Init });

  useEffect(() => setComponent({ Component: create(() => setDone(!done)) }), [
    create,
    done,
  ]);

  return { Component };
};

export type Create = Parameters<UseLazyComponent>[0];
