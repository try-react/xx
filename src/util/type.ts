import { ReadonlyDeep } from "type-fest";

type ID = { id: number | string };
/**
 * `U`が同じでも、`id`が違えば別物
 *
 * クリーンアーキテクチャの、Entityではないです
 */
export type Entity<T extends ID, U> = ReadonlyDeep<T & U>;

/**
 * `T`同じなら、同一とみなしてOK
 */
export type ValueObject<T> = ReadonlyDeep<T>;

/**
 * `useCase`や`ui`の初期値
 */
export type InitData<T> = ReadonlyDeep<T>;
export type InitState<T> = ReadonlyDeep<T>;

/**
 * 保存先や取得先の隠蔽
 * オンメモリのような感じで扱える
 *
 * 整合性の単位
 * DBで言う所の、トランザクション相当
 *
 * コレクション(値の集合)
 * CRUDメソッドが生えたり
 */
export type Repository<T> = T;

/**
 * `run`してけ結果を受け取る
 */
export type UseCase<T> = ReadonlyDeep<T>;

export type Exception = ReadonlyDeep<{
  isErr: true;
  msg: string;
  err: unknown;
}>;
