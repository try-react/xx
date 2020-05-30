import React, { FC, ReactElement } from "react";

type ComponentWithHooksType = <Props, InitData>(
  Component: FC<Props>,
  hooks: (p: InitData) => Props,
  initData: InitData
) => ReactElement;

export const ComponentWithHooks: ComponentWithHooksType = (
  Component,
  hook,
  initData
) => <Component {...hook({ ...initData })} />;
