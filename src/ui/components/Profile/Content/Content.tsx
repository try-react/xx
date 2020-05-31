import React from "react";
import type { FC } from "react";
import type { ContentProps } from "~/useCase/useProfile/useProfile";

export const Content: FC<ContentProps> = (props) => (
  <>
    <p>名前: {props.domain.name}</p>
    <p>説明文: {props.domain.description} </p>

    <button type="button" onClick={props.operations.redo}>
      再取得
    </button>
  </>
);
