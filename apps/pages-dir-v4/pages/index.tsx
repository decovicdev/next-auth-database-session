import Head from "next/head";
import type { GetServerSidePropsContext } from "next";

import HomePage from "../components/containers/home-page";
import getServerSession from "@/lib/getServerSession";

export default function Home() {
  return (
    <>
      <Head>
        <title>intuiguide - Home</title>
      </Head>
      <HomePage />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res);

  return {
    props: {
      session,
    },
  };
}
