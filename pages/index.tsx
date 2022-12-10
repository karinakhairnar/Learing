import About from "@components/About/About";
import { Footer, Header } from "@components/common";
import Customer from "@components/Customer/Customer";
import Design from "@components/Design/Design";
import Features from "@components/Feactures/Features";
import Manage from "@components/Manage/Manage";
import Works from "@components/Works/Works";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <Header />
      <Manage/>
    <Features/>
    <About/>
    <Design/>
    <Works/>
    <Customer/>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Home;
