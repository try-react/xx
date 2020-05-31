import type { Service } from "~/useCase/useProfile/controller";
import type { ProfileInitData } from "~/domain/profile/type";
import type { Redo } from "~/useCase/util/hooks/useLazyComponent";
import type { InitState } from "~/util/type";

type ContentInitData = {
  initData: ProfileInitData;
  service: Service;
  redo: Redo;
};

export type ContentProps = InitState<{
  domain: ProfileInitData;
  operations: { redo: Redo };
}>;

type UseContent = (p: ContentInitData) => ContentProps;
export const useContent: UseContent = (props) => {
  // `hooks`未使用のため `use`のprefixは不要です。
  // しかし、プロダクションのコードでは、`domain`情報の編集は必須なのでそれを想定。
  return {
    domain: {
      ...props.initData,
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
