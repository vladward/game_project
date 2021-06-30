import React from "react"
import styles from "./Header.module.css"
import userPhoto from "./../../images/user_profile.png"

const Header = () => {
    return (

        <header className={styles.Header}>
            <div className={styles.container}>
                <div className={styles.Logo}>
                    <a href={"/"}>
                        Logotype
                    </a>
                </div>
                <div className={styles.dropdown}>
                    <div className={styles.dropbtn}><label>userName</label>
                        <img src={userPhoto} className={styles.photoList}/>
                    </div>
                    <div className={styles.dropdown_content}>
                        <a href="/profile">Profile</a>
                        <a href="/settings">Settings</a>
                        <a href="#">Logout</a>
                    </div>
                </div>
            </div>

        </header>

    )
}

export default Header

