import React, { lazy } from "react";
import { useContent, useException } from "~/useCase/useProfile";
import { profile } from "~/domain/profile";
import { repository } from "~/infra/repository/profile/repository";
import type { Create } from "~/useCase/util/hooks/useLazyComponent";

export type Service = typeof service;
const service = {
  render: profile.render({ repository }),
  tryCanReRender: profile.tryCanReRender,
};

export const create: Create = (redo) =>
  lazy(async () => {
    try {
      const initData = await service.render.run();
      const { Content } = await import("~/ui/components/Profile/Content");
      const Component = () => (
        <Content {...useContent({ initData, service, redo })} />
      );
      return { default: Component };
    } catch (e) {
      const { Exception } = await import("~/ui/components/Profile/Exception");
      const Component = () => (
        <Exception {...useException({ initData: e, service, redo })} />
      );
      return { default: Component };
    }
  });
