import React, { Suspense } from "react";
import type { FC } from "react";
import { ContentPlaceholder } from "~/ui/components/Profile/ContentPlaceholder";
import styles from "./Profile.module.css";

type Props = { Component: FC };
export const Profile: FC<Props> = ({ Component }) => (
  <div className={styles.main}>
    <h1 className={styles.title}>Profile</h1>
    <Suspense fallback={<ContentPlaceholder />}>
      <Component />
    </Suspense>
  </div>
);
