import React, { FC } from "react";
import { Facebook } from "react-content-loader";

export const ContentPlaceholder: FC = () => (
  <Facebook
    uniqueKey="contentPlaceholder"
    height="100"
    backgroundColor="black"
  />
);
