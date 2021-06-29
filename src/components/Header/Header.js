import React from "react"
import styles from "./Header.module.css"
import userPhoto from "./../../images/user_profile.png"

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.Logo}>
                <a href={"#"}>
                    Logotype
                </a>
            </div>
            <div className={styles.headerCheckBox}>
                <div className={styles.headerLogin}>login</div>
                <img src={userPhoto} />
                <div className={styles.list}> > </div>
            </div>
        </header>

    )
}

export default Header