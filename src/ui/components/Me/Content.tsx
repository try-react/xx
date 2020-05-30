import React from "react";
import type { FC } from "react";

type Props = {
  name: string;
};
export const Content: FC<Props> = (props) => <span>名前: {props.name}</span>;
