import React, { ComponentProps } from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useLazyComponent } from "~/useCase/util/hooks/useLazyComponent";
import { create } from "~/useCase/useProfile/controller";

type Props = ComponentProps<
  typeof import("~/ui/components/Profile")["Profile"]
>;

const Profile = dynamic<Props>(
  () => import("~/ui/components/Profile").then((_) => _.Profile),
  { ssr: false }
);

const Page: NextPage = () => <Profile {...useLazyComponent(create)} />;

export default Page;
