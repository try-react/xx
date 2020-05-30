import React, { FC } from "react";
import { ContentProps } from "~/useCase/useProfile/useProfile";

export const Content: FC<ContentProps> = (props) => (
  <>
    <p>名前: {props.fo}</p>
    <p>説明文: ダミーテキスト, ダミーテキスト </p>

    <span>別の人のプロフィールを見る</span>
    <button type="button" onClick={props.redo}>
      再取得
    </button>
  </>
);
