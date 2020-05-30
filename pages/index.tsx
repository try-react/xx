import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <ul>
    <li>
      <Link href="/me">
        <a>Lazy & Suspenseへ 1</a>
      </Link>
    </li>
    <li>
      <Link href="/profile">
        <a>Lazy & Suspenseへ 2</a>
      </Link>
    </li>
  </ul>
);
export default Component;
