import React, { FunctionComponent } from 'react'
import Link from "next/link";

interface Page404Props {}
const Page404: FunctionComponent<Page404Props> = () => {
  return (
    <section className="not-found">
      <h1>Oupsi</h1>
      <Link href="/">Back to list</Link>
    </section>
  );
};

export default Page404;
