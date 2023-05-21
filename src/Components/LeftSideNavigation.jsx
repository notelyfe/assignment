import React from 'react'
import homeIcon from '../Assets/menu.png'
import histogram from '../Assets/chart.png'
import barIcon from '../Assets/bar-graph.png'
import shareIcon from '../Assets/share.png'
import { BiArrowBack } from "react-icons/bi";
import style from '../Style/leftsideNavigation.module.css';
import { useLocation, Link } from 'react-router-dom'

const LeftSideNavigation = () => {

    var location = useLocation()

    return (
        <div className={style.sideNavWrapper}>
            <header className={style.sideHeader}>
                <div
                    style={{
                        gap: "10px",
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <h4 className={style.initials}>N</h4>
                    <h4
                        style={{ fontSize: '28px' }}
                    >Name</h4>
                </div>
                <BiArrowBack className={style.backArrow} />
            </header>
            <section className={style.NavigationSection}>
                <ul className={style.navSection}>
                    <li>
                        <Link className={`${style.navLinks} ${location.pathname === "/" && style.activeLink}`} to="/">
                            <img src={homeIcon} alt="" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style.navLinks} ${location.pathname === "about" && style.activeLink}`} to="/about">
                            <img src={histogram} alt="" />
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style.navLinks} ${location.pathname === "contact" && style.activeLink}`} to="/contact">
                            <img src={barIcon} alt="" />
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className={`${style.navLinks} ${location.pathname === "add-data" && style.activeLink}`} to="/add-data">
                            <img src={shareIcon} alt="" />
                            Add Data
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default LeftSideNavigation
