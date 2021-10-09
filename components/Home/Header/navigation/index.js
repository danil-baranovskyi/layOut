import styles from "./styles.module.scss";
import cn from "classnames";
import {useCallback, useState} from "react";
import Image from "next/image.js";
import navBarLogo from "/public/navBarLogo.svg";

const Navigation = () => {
    const [burgerIsClicked, setBurgerClicked] = useState(false);
    const handleClick = useCallback(() => {
        setBurgerClicked(state => !state);
    }, [burgerIsClicked])

    return (
        <>
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li className={cn(styles.navigationItem, styles.mbDispNone)}>
                        <a href="#" className={styles.navigationLink}>Home</a>
                    </li>
                    <li className={cn(styles.navigationItem, styles.dropDownActivator, styles.mbDispNone)}>
                        <a href="#" className={styles.navigationLink}>Shopify Apps</a>

                        <div className={cn(styles.dropDown, styles.mbDispNone)}>
                            <ul className={styles.dropDownList}>
                                <li className={styles.dropDownItem}>
                                    <a href="#" className={styles.dropDownLink}>React Flow</a>
                                </li>
                                <li className={styles.dropDownItem}>
                                    <a href="#" className={styles.dropDownLink}>ReCharge</a>
                                </li>
                                <li className={styles.dropDownItem}>
                                    <a href="#" className={styles.dropDownLink}>Extra Sell</a>
                                </li>
                                <li className={styles.dropDownItem}>
                                    <a href="#" className={styles.dropDownLink}>All apps</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={cn(styles.navigationItem, styles.moveToLink, styles.mbDispNone)}>
                        <a href="#" className={styles.navigationLink}>Get app now</a>
                    </li>
                    <li className={cn(styles.navigationItem, styles.burger)}>
                        <div className={styles.burgerWrapper} onClick={handleClick}>
                            <span className={cn(styles.burgerRow, styles.burgerRow1)}/>
                            <span className={cn(styles.burgerRow, styles.burgerRow2)}/>
                            <span className={cn(styles.burgerRow, styles.burgerRow3)}/>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className={cn("navBar", {navBarActive: burgerIsClicked})}>
                <div className="navBarHeader">
                    <a href="#" className="navBarLogo">
                        <Image src={navBarLogo}/>
                    </a>
                    <div className="navBarClose" onClick={handleClick}>
                        <span className="navBarCloseRow1"/>
                        <span className="navBarCloseRow2"/>
                    </div>
                </div>
                <div className="navBarContent">
                    <ul className="navBarContentList">
                        <li className="navBarContentItem">
                            <a href="#" className="navBarContentLink">
                                ReactFlow
                            </a>
                        </li>
                        <li className="navBarContentItem">
                            <a href="#" className="navBarContentLink">
                                ExtraSell
                            </a>
                        </li>
                        <li className="navBarContentItem">
                            <a href="#" className="navBarContentLink">
                                ReCharge
                            </a>
                        </li>
                    </ul>
                    <div className="viewAllWrapper">
                        <a href="#" className="viewAllLink">
                            View all apps
                        </a>
                    </div>
                </div>
            </div>
            <div className={cn("overlay", {overlayActive: burgerIsClicked})} onClick={handleClick}/>
        </>
    );
};

export default Navigation;