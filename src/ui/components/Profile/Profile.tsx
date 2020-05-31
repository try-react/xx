import React, { Suspense } from "react";
import type { FC } from "react";
import { Placeholder } from "~/ui/components/Profile/Placeholder";
import styles from "./profile.module.css";

type Props = { Component: FC };
export const Profile: FC<Props> = ({ Component }) => (
  <div className={styles.main}>
    <h1 className={styles.title}>Profile</h1>
    <Suspense fallback={<Placeholder />}>
      <Component />
    </Suspense>
  </div>
);
