/**
 * アプリ全体の主要な型
 * どこに所属するデータかわかる。ついでに、`ReadonlyDeep`を付与
 * `instanceof`が使えるからclassがいいところもあるけど、小規模なので`type`
 */

import { ReadonlyDeep } from "type-fest";

/**
 * ## これは？
 * ロジックのメソッドが諸々生える
 *
 * ## 詳細
 * `useCase`の集合体
 */
export type Domain<T> = ReadonlyDeep<T>;

/**
 * ## これは？
 * イベントのメソッド
 *
 * ## 詳細
 * `ui`に対しての振る舞い
 * `Repository`をキックしたり
 */
export type UseCase<T> = ReadonlyDeep<T>;

/**
 * ## これは？
 * 保存先や取得先の隠蔽
 *
 * ## 詳細
 * オンメモリのような感じで扱える
 *
 * 整合性の単位
 * DBで言う所の、トランザクション相当
 *
 * コレクション(値の集合)
 * CRUDメソッドが生えたり
 */
export type Repository<T> = ReadonlyDeep<T>;

type ID = { id: number | string };
/**
 * クリーンアーキテクチャの、Entityではないです
 *
 * `U`が同じでも、`id`が違えば別物
 * `equal`メソッド欲しいね
 */
export type Entity<T extends ID, U> = ReadonlyDeep<T & U>;

/**
 * `T`同じなら、同一とみなしてOK
 * `equal`メソッド欲しいね
 */
export type ValueObject<T> = ReadonlyDeep<T>;

/**
 * `useCase`や`ui`のパラメタ
 */
export type InitData<T> = ReadonlyDeep<T>;

/**
 * `useCase`の`state`
 */
export type InitState<T> = ReadonlyDeep<T>;

/**
 * `Repository`の実行結果
 */
export type ResponseData<T> = ReadonlyDeep<T>;

/**
 * APIなどの実行結果
 * `OriginalResponseData`を`ResponseData`にして使う
 */
export type OriginalResponseData<T> = ReadonlyDeep<T>;

export type Exception<T = unknown> = ReadonlyDeep<{
  msg: string;
  err: T;
}>;
