import React, { Suspense, FC } from "react";
import { ContentPlaceholder } from "~/ui/components/Profile/ContentPlaceholder";

type Props = { Component: FC };
export const Profile: FC<Props> = ({ Component }) => (
  <>
    タイトル
    <Suspense fallback={<ContentPlaceholder />}>
      <Component />
    </Suspense>
  </>
);
