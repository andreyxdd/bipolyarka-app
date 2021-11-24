import type { NextPage } from "next";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import React from "react";
import { getContentfuData } from "../lib/api";
import App from "../components/App";
import { IContentfull } from "../types";

/**
 * Get server side properties from the contentful API
 */
export async function getStaticProps() {
  const data = await getContentfuData();

  if (!data.aboutContent || !data.collectionContent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      aboutContent: data.aboutContent,
      collectionContent: data.collectionContent,
    },
    revalidate: 1,
  };
}

/**
 * This is the home page.
 * @return {JSX.Element}
 */
const Home: NextPage<IContentfull> = ({
  aboutContent,
  collectionContent,
}): JSX.Element => {
  return (
    <App aboutContent={aboutContent} collectionContent={collectionContent} />
  );
};

export default Home;
