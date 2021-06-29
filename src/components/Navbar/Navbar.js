import React from "react"
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>My Profile</NavLink>
            </div>
            <div className={styles.item}>
                <a>Music</a>
            </div>
            <div className={styles.item}>
                <a>Music</a>
            </div>
            <div className={styles.item}>
                <a>Music</a>
            </div>
            <div className={styles.item}>
                <a>Music</a>
            </div>
        </nav>
    )
}

export default Navbar