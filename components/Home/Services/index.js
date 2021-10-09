import React from "react";
import Image from "next/image.js";
import styles from "./styles.module.scss";
import data from "../../../locales/en/home/services.json"
import imageCrop from "../../../public/imageCrop.png";
import touchMan from "/public/touchMan.svg";
import superTeam from "/public/superTeam.png"
import rocket from "/public/rocket.svg";
import cn from "classnames";

const Services = () => {
    return (
        <React.Fragment>
        <section className={styles.service}>
            <div className={styles.serviceInfo}>
                <div className={cn(styles.serviceInfoWrapper)}>
                    <h3 className={styles.serviceInfoHeader}>{data.help.header}</h3>
                </div>
                <div className={styles.serviceFooter}>
                    <div className={styles.serviceFooterIconWrapper}>
                        <h4 className={styles.serviceFooterIconHeader}>7</h4>
                        <p className={styles.serviceFooterIconSubHeader}>Years Expertise</p>
                    </div>
                    <div className={styles.serviceFooterInfo}>
                        <h4 className={styles.serviceFooterInfoHeader}>{data.help.footer.right.header}</h4>
                        <p className={styles.serviceFooterInfoSubHeader}>{data.help.footer.right.subheader}</p>
                    </div>
                </div>
            </div>
            <div className={styles.serviceItemWrapper}>
                <Image src={imageCrop} height={496} width={500}/>
            </div>
        </section>

        {/*=====*/}

        <section className={cn(styles.service, styles.serviceReversed)}>
            <div className={styles.serviceInfo}>
                <div className={styles.serviceInfoWrapper}>
                    <h3 className={styles.serviceInfoHeader_v2}>{data.solutions.header}</h3>
                    <p className={styles.serviceInfoSubHeader_v2}>{data.solutions.subheader}</p>
                </div>
                <div className={styles.serviceFooter}>
                    <div className={styles.serviceFooterIconWrapper}>
                        <h4 className={styles.serviceFooterInfoHeader}>{data.solutions.footer.left.header}</h4>
                        <p className={styles.serviceFooterInfoSubHeader}>{data.solutions.footer.left.subheader}</p>
                    </div>
                    <div className={styles.serviceFooterInfo}>
                        <Image src={rocket}/>
                    </div>
                </div>
            </div>
            <div className={styles.serviceItemWrapper}>
                <Image src={touchMan}/>
            </div>
        </section>

        {/*=====*/}
            <section className={styles.service}>
                <div className={styles.serviceInfo}>
                    <div className={styles.serviceInfoWrapper}>
                        <h3 className={styles.serviceInfoHeader_v2}>{data.features.header}</h3>
                        <p className={styles.serviceInfoSubHeader_v2}>{data.features.subheader}</p>
                    </div>
                    <div className={styles.serviceFooter}>
                        <div className={styles.serviceFooterIconWrapper}>
                            <h4 className={styles.serviceFooterIconHeader}>{data.features.footer.left.header}</h4>
                            <p className={styles.serviceFooterIconSubHeader}>{data.features.footer.left.subheader}</p>
                        </div>
                        <div className={styles.serviceFooterInfo}>
                            <h4 className={styles.serviceFooterInfoHeader}>{data.features.footer.right.header}</h4>
                            <p className={styles.serviceFooterInfoSubHeader}>{data.features.footer.right.subheader}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.serviceItemWrapper}>
                    <Image src={superTeam}/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Services;