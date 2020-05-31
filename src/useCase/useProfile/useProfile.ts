import type { Service } from "~/useCase/useProfile/controller";
import type { ProfileType, ProfileInitState } from "~/domain/profile/type";
import type { Redo } from "~/useCase/util/hooks/useLazyComponent";

export type ContentProps = {
  domain: ProfileInitState;
  operations: { redo: Redo };
};
type ContentInitData = {
  initData: ProfileType;
  service: Service;
  redo: Redo;
};
type UseContent = (p: ContentInitData) => ContentProps;
export const useContent: UseContent = (props) => {
  // `hooks`未使用のため `use`のprefixは不要です。
  // しかし、プロダクションのコードでは、`domain`情報の編集は必須なのでそれを想定。
  return {
    domain: {
      id: props.initData.id,
      name: props.initData.name,
      description: props.initData.description,
    },
    operations: { redo: props.redo },
  };
};

export type ExceptionProps = {
  operations: { redo: Redo };
};
type ExceptionInitData = {
  redo: Redo;
};
type UseException = (p: ExceptionInitData) => ExceptionProps;
export const useException: UseException = (props) => {
  return { operations: { redo: props.redo } };
};
