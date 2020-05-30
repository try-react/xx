import React, { lazy, ReactElement, LazyExoticComponent } from "react";
import { sleep, random } from "~/util/lib";

// APIなど
const fetchMe = async () => {
  await sleep();
  if (random()) {
    return Promise.resolve({ name: "tommy" });
  }
  return Promise.reject("APIが...");
};

type Create = () => LazyExoticComponent<() => ReactElement>;

export const create: Create = () =>
  lazy(async () => {
    try {
      const initData = await fetchMe();
      const { Content } = await import("~/ui/components/Me/Content");
      const Component = () => <Content name={initData.name} />;
      return { default: Component };
    } catch (e) {
      const { Exception } = await import("~/ui/components/Me/Exception");
      const Component = () => <Exception />;
      return { default: Component };
    }
  });
