import { lazy } from "react";
import { useContent, useException } from "~/useCase/useProfile";
import { profile } from "~/domain/profile";
import { repository } from "~/infra/repository/profile/repository";
import { Create } from "~/useCase/util/hooks/useLazyComponent";
import { ComponentWithHooks } from "~/useCase/util/HOC/ComponentWithHooks";

export type Service = typeof service;

const service = {
  render: profile.render({ repository }),
  tryCanReRender: profile.tryCanReRender,
};

export const create: Create = (redo) =>
  lazy(() =>
    service.render
      .run()
      .then((initData) =>
        import("~/ui/components/Profile/Content").then(({ Content }) => ({
          default: (): JSX.Element =>
            ComponentWithHooks(Content, useContent, {
              initData,
              service,
              redo,
            }),
        }))
      )
      .catch((initData) =>
        import("~/ui/components/Profile/Exception").then(({ Exception }) => ({
          default: (): JSX.Element | null =>
            ComponentWithHooks(Exception, useException, {
              initData,
              service,
              redo,
            }),
        }))
      )
  );
