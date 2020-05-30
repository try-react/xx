import React, { FC } from "react";
import { ExceptionProps } from "~/useCase/useProfile/useProfile";

export const Exception: FC<ExceptionProps> = (props) => (
  <p>
    <button type="button" onClick={props.redo}>
      再描画
    </button>
    aabb
  </p>
);
