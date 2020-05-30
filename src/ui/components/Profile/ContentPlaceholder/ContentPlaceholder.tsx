import React from "react";
import type { FC } from "react";
import { List } from "react-content-loader";

export const ContentPlaceholder: FC = () => (
  <List uniqueKey="contentPlaceholder" backgroundColor="black" />
);
