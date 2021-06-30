import React from "react"
import styles from './Profile.module.css'
import userPhoto from "./../../images/user_profile.png"

const Profile = () => {
    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <div className={styles.ava}>
                    <img src={userPhoto} alt=""/>
                    <button>Subscribe</button>
                </div>
                <div className={styles.name}>
                    <label><i className="fas fa-user-alt"></i>&nbsp;
                        <em>name:</em> <a>Vladislav Malohvey</a></label><br/>
                    <label><i className="fas fa-headset"></i>&nbsp;
                        <em>nickname:</em> <a>VladWard</a></label><br/>
                    <label><i className="fas fa-user-tie"></i>&nbsp;
                        <em>profession:</em> <a>Junior React Developer</a></label><br/>
                    <label><i className="fas fa-map-marker-alt"></i>&nbsp;
                        <em>location:</em> <a>Minsk, Belarus</a></label><br/>
                    <label><i className="fas fa-envelope"></i>&nbsp;
                        <em>email:</em> <a>vladward@gmail.com</a></label><br/>
                    <label><i className="fas fa-gamepad"></i>&nbsp;
                        <em>like a:</em> <a>Adventure, Action, Party, Survival</a></label><br/>
                </div>
            </div>
        </div>
    )
}

export default Profile