import React, { lazy } from "react";
import { useContent, useException } from "~/useCase/useProfile";
import { profile, typeGuard } from "~/domain/profile";
import { repository } from "~/infra/repository/profile/repository";
import type { Create } from "~/useCase/util/hooks/useLazyComponent";
import { throwError } from "~/util/lib";
import { InfraException } from "~/util/exception/Infra";

export type Service = typeof service;
const service = {
  render: profile.render,
  typeGuard: { ...typeGuard, isInfraException: InfraException.instanceof_ },
};

export const create: Create = (redo) =>
  lazy(async () => {
    try {
      const initData = await service.render({ repository });

      if (service.typeGuard.isProfileInitData(initData)) {
        const { Content } = await import("~/ui/components/Profile/Content");
        const Component = () => (
          <Content {...useContent({ initData, service, redo })} />
        );
        return { default: Component };
      }

      if (service.typeGuard.isInfraException(initData)) {
        const { Exception } = await import("~/ui/components/Profile/Exception");
        const Component = () => <Exception {...useException({ redo })} />;
        return { default: Component };
      }

      return throwError(initData);
    } catch (e) {
      return throwError(e);
    }
  });
