import Head from "next/head";
import { Layout } from "../component";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta
                    name='description'
                    content='manish sahu portfolio website'
                />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
};

export default MyApp;
