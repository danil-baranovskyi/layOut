import React from 'react';
import styles from "./styles.module.scss";
import Image from "next/image.js";
import GeneralLink from "../GeneralLink";
import iconCall from "../../../public/icon-call.svg";
import iconClick from "../../../public/icon-click.svg";
import eComm from "../../../public/e-comm.png";
import previewFonTablet from "/public/homePreviewMb.svg";
import cn from "classnames";

const HomePreview = () => {
    return (
        <section className={styles.preview}>
            <h2 className={styles.previewHeader}>We help e-commerce owners run Shopify their business easier</h2>
            <p className={styles.previewSubHeader}>
                There is a reason many Shopify sellers have given us a 5-star rating
                on the Shopify App Store. Because we help online store owners sell more on Shopify.
            </p>
            <div className={styles.previewLinksWrapper}>
                <GeneralLink
                    iconSrc={iconClick}
                    iconWidth={28}
                    iconHeight={54}
                    textContent={"Go to app"}
                    wrapperStyles={{
                        marginRight: 20
                    }}
                    wrapperClass={styles.linkNone}
                />
                <GeneralLink
                    iconSrc={iconCall}
                    iconWidth={42}
                    iconHeight={42}
                    textContent={"Book a call"}
                    wrapperClass={styles.linkNone}
                />
                <div className={styles.tabletLinksWrapper}>
                    <a className={cn(styles.tabletLink, styles.tabletLinkPrimary)}>Get app now</a>
                    <a className={cn(styles.tabletLink, styles.tabletLinkSecondary)}>Book a call</a>
                </div>
            </div>
            <div className={styles.previewFonDesk}>
                <Image src={eComm}/>
            </div>

            <div className={styles.previewFonTablet}>
                <Image src={previewFonTablet} layout="responsive"/>
            </div>
        </section>
    );
};

export default HomePreview;