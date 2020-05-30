import React, { Suspense, FC } from "react";
import { ContentPlaceholder } from "~/ui/components/Profile/ContentPlaceholder";

type Props = { Component: FC };
export const Profile: FC<Props> = ({ Component }) => (
  <>
    <h1>Profile</h1>
    <Suspense fallback={<ContentPlaceholder />}>
      <Component />
    </Suspense>
  </>
);
