import React from "react"
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/MyGames" activeClassName={styles.active}>MyGames</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/Statistics" activeClassName={styles.active}>Statistics</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/Friends" activeClassName={styles.active}>Friends</NavLink>
            </div>

        </nav>
    )
}

export default Navbar