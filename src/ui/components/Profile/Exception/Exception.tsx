import React from "react";
import type { FC } from "react";
import type { ExceptionProps } from "~/useCase/useProfile/useProfile";
import styles from "./exception.module.css";

export const Exception: FC<ExceptionProps> = (props) => (
  <>
    <p className={styles.msg}>回線が込み合ってます...</p>
    <button type="button" onClick={props.operations.redo}>
      もう一度取得を試す
    </button>
  </>
);
