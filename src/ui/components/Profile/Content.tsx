import React, { FC } from "react";
import { ContentProps } from "~/useCase/useProfile/useProfile";

export const Content: FC<ContentProps> = (props) => (
  <>
    {props.fo}
    {props.ba}
    {/* <p>ニックネーム: {props.domain.nickname}</p> */}
    <p>説明文: ダミーテキスト, ダミーテキスト, </p>
    <button type="button" onClick={props.redo}>
      再描画
    </button>
  </>
);
