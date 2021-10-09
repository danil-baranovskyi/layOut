import HomePreview from "../components/Home/HomePreview";
import Featured from "../components/Home/Featured";
import Services from "../components/Home/Services";
import FindOut from "../components/Home/FindOut";
import Header from "../components/Home/Header";
import Slider from "../components/Home/Slider";
import Footer from "../components/Home/Footer";
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width,initial-scale=1'/>
            </Head>
            <Header/>
            <HomePreview/>
            <Featured/>
            <Services/>
            <Slider/>
            <FindOut/>
            <Footer/>
        </>
    );
}