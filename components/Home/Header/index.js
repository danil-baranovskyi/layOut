import React from 'react';
import styles from "./styles.module.scss";
import Image from "next/image.js";
import logo from "../../../public/Logo.png";
import Navigation from "./navigation";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="header__logo-wrapper">
                <a href="/">
                    <Image src={logo} alt="logo"/>
                </a>
            </div>
            <Navigation/>
        </header>
    );
};

export default Header;