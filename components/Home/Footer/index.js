import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image.js";
import cn from "classnames";
import instagram from "../../../public/instagram.svg";
import twitter from "../../../public/twitter.svg";
import facebook from "../../../public/facebook.svg";
import youtube from "../../../public/youtube.svg";
import insvg from "../../../public/in.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerNavContainer}>
                    <div className={styles.NavWrapper}>
                        <h4 className={styles.NavHeader}>Home</h4>
                        <nav>
                            <ul>
                                <li className={cn(styles.NavItem, styles.NavIcon)}>
                                    <a className={styles.NavLink}>Status Page</a>
                                </li>
                                <li className={cn(styles.NavItem, styles.NavIcon)}>
                                    <a className={styles.NavLink}>About us</a>
                                </li>
                                <li className={styles.NavItem}>
                                    <a className={styles.NavLink}>Contact us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={styles.NavWrapper}>
                        <h4 className={styles.NavHeader}>Support</h4>
                        <nav>
                            <ul>
                                <li className={styles.NavItem}>
                                    <a className={styles.NavLink}>Help Center</a>
                                </li>
                                <li className={styles.NavItem}>
                                    <a className={styles.NavLink}>Privacy Policy</a>
                                </li>
                                <li className={styles.NavItem}>
                                    <a className={styles.NavLink}>Terms of Service</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.social}>
                        <h3 className={styles.socialHeader}>Social media</h3>
                        <div>
                            <ul className={styles.socialList}>
                                <li>
                                    <a className={styles.socialLink}>
                                        <Image src={instagram}/>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.socialLink}>
                                        <Image src={facebook}/>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.socialLink}>
                                        <Image src={twitter}/>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.socialLink}>
                                        <Image src={youtube}/>
                                    </a>
                                </li>
                                <li>
                                    <a className={styles.socialLink}>
                                        <Image src={insvg}/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <span className={styles.copyrightText}>Devit software © 2021. All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;