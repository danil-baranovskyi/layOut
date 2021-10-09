import React from "react";
import GeneralLink from "../GeneralLink";
import clickIcon from "../../../public/icon-click.svg";
import styles from "./styles.module.scss";
import Image from "next/image.js";
import findOutFon from "/public/find-out.png";

const FindOut = () => {
    return (
        <section className={styles.findOut}>
            <div className={styles.findOutContainer}>
                <div className={styles.findOutInfo}>
                    <h3 className={styles.findOutHeader}>Find out more reasons to use our apps</h3>
                    <p className={styles.findOutSubHeader}>Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa
                        quis enim.</p>
                </div>
                <div className={styles.findOutLinkWrapper}>
                    <GeneralLink
                        iconSrc={clickIcon}
                        textContent={"About as"}
                        iconHeight={68}
                        iconWidth={35}
                        linkStyles={{
                            fontSize: 28,
                        }}
                    />
                </div>
            </div>
            <div className={styles.findOutFon}>
                <Image src={findOutFon}/>
            </div>
        </section>
    );
}

export default FindOut;