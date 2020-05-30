import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <ul>
    <li>
      <Link href="/profile">
        <a>Lazy & Suspenseへ</a>
      </Link>
    </li>
  </ul>
);
export default Component;
