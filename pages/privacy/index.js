import Head from 'next/head'
import PrivacyPreview from "../../components/Privacy/PrivacyPreview";
import Header from "../../components/Home/Header";

export default function Home() {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width,initial-scale=1'/>
                <title></title>
            </Head>
            <Header/>
            <PrivacyPreview/>
        </>
    );
}