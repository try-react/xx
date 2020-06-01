import { create } from ".";
import React, { Suspense } from "react";
import { render, cleanup, waitFor, getByTestId } from "@testing-library/react";
import { fetchMe } from "./demo";

jest.mock("./demo");
beforeEach(cleanup);

const creator = (testid: string) => {
  const Component = create();
  const { container } = render(
    <Suspense fallback="">
      <Component />
    </Suspense>
  );
  return waitFor(() => getByTestId(container, testid), { timeout: 1000 });
};

it(`
  fetchMeに成功した場合
  正常のComponentが、使用されるか
`, async () => {
  const expected = "testだよ";
  const testid = "authorName";

  (fetchMe as jest.Mock).mockImplementation(() =>
    Promise.resolve({ name: expected })
  );

  const el = await creator(testid);

  /**
   * このテストでは、`Component`の存在確認だけで良い
   * しかし、今回は確認のために`props`が正常にrenderされているか確認する。
   */
  expect(el.textContent).toMatch(expected);
});

it(`
  fetchMeに失敗した場合
  例外のComponentが、使用されるか
`, async () => {
  const testid = "msg";

  (fetchMe as jest.Mock).mockImplementation(() => Promise.reject());

  const el = await creator(testid);
  expect(el.textContent).toBeDefined();
});
