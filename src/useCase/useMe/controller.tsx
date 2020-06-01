import React, { lazy } from "react";
import type { ReactElement, LazyExoticComponent } from "react";
import { fetchMe } from "./demo";

type Create = () => LazyExoticComponent<() => ReactElement>;

export const create: Create = () =>
  lazy(async () => {
    const initData = await fetchMe()
      .then((v) => ({ isErr: false, name: v.name }))
      .catch<never>((e) => e);

    if (initData?.isErr === false) {
      const { Content } = await import("~/ui/components/Me/Content");
      const Component = () => <Content name={initData.name} />;
      return { default: Component };
    }

    const { Exception } = await import("~/ui/components/Me/Exception");
    const Component = () => <Exception />;
    return { default: Component };
  });
