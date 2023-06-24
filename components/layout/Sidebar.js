/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    {/* <div className="mobile-header-top">
                        <div className="user-account">
                            <img src="/assets/imgs/template/ava_1.png" alt="Agon" />
                            <div className="content">
                                <h6 className="user-name">
                                    Hi <span className="text-brand">Steven !</span>
                                </h6>
                                <p className="font-xs text-muted">
                                    You have 5 new messages
                                </p>
                            </div>
                        </div>
                    </div> */}
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/#" legacyBehavior><a>Home</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/page-about-1" legacyBehavior><a>About us</a></Link>
                                    </li>
                                    <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/page-about-1" legacyBehavior><a>Courses</a></Link>
                                            <ul className={isActive.key == 2 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link href="/bcom" legacyBehavior><a>B.com</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/bca" legacyBehavior><a>BCA</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/bba" legacyBehavior><a>BBA</a></Link>
                                                </li>
                                            </ul>
                                    </li>
                                      
                                    <li>
                                        <Link href="/gallery" legacyBehavior><a>Gallery</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/page-contact" legacyBehavior><a>Contact us</a></Link>
                                    </li>
                                    </ul>
                                </nav>
                            </div>
                           {/*  <div className="mobile-account">
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/#" legacyBehavior><a>Home</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>About us</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>My Boosted Shots</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>Gallery</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#" legacyBehavior><a>Contact us</a></Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/#" legacyBehavior><a>Go Pro</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/page-login" legacyBehavior><a>Sign Out</a></Link>
                                    </li> */}
                            {/*     
                            <div className="site-copyright color-gray-400">
                                Copyright 2022 © Agon - Agency Template.<br />Designed
                                by
                                <Link href="http://alithemes.com" legacyBehavior><a>&nbsp; AliThemes</a></Link>
                            </div> */}
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;