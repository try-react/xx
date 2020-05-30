import { useState } from "react";
import { Service } from "~/useCase/useProfile/controller";
import { Profile } from "~/domain/profile/type";

type InitData = ReturnType<Service["render"]["run"]> extends Promise<infer U>
  ? U
  : never;

type OProps<T> = {
  initData: T;
  service: Service;
  redo: () => void;
};
type Redo = () => void;
export type ContentProps = {
  fo: string;
  ba: string;
  redo: Redo;
};
type UseContent = (p: OProps<InitData>) => ContentProps;
export const useContent: UseContent = (props) => {
  const [fo] = useState(props.initData.name);

  return { fo, ba: "x", redo: props.redo };
};

// ---------------------------------------------------
export type ExceptionProps = {
  aa: string;
  bb: string;
  redo: Redo;
};

type UseException = (
  p: OProps<Parameters<Profile["tryCanReRender"]>[0]>
) => ExceptionProps;
export const useException: UseException = (props) => {
  props.service.tryCanReRender(props.initData);
  const [bb] = useState("ng");
  return { aa: "a", bb, redo: props.redo, x: props.initData };
};
