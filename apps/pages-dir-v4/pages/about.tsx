import Head from "next/head";

import AboutPage from "../components/containers/about-page";

interface aboutProps {}

const About: React.FC<aboutProps> = (props) => {
  return (
    <>
      <Head>
        <title>intuiguide - About</title>
      </Head>
      <AboutPage />
    </>
  );
};
export default About;
