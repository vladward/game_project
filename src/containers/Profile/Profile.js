import React from "react"
import styles from './Profile.module.css'
import userPhoto from "./../../images/user_profile.png"
import cod from "./../../images/gameIcons/cod.png"
import csgo from "./../../images/gameIcons/csgo.png"
import dota from "./../../images/gameIcons/dota.png"
import fortnite from "./../../images/gameIcons/fortnite.png"
import minecraft from "./../../images/gameIcons/minecraft.png"

const Profile = () => {
    return (
        <div className={styles.item}>
            <div className={styles.container}>
                <div className={styles.ava}>
                    <img src={userPhoto} alt=""/><br/>
                    <button>Subscribe</button>
                </div>
                <div className={styles.name}>
                    <label><i className="fas fa-user-alt"></i>&nbsp;
                        <em>name:</em> <a>Vladislav Malohvey</a></label>--user.name<br/>
                    <label><i className="fas fa-headset"></i>&nbsp;
                        <em>nickname:</em> <a>VladWard</a></label>--user.nickName<br/>
                    <label><i className="fas fa-user-tie"></i>&nbsp;
                        <em>profession:</em> <a>Junior React Developer</a></label>--user.profession<br/>
                    <label><i className="fas fa-map-marker-alt"></i>&nbsp;
                        <em>location:</em> <a>Minsk, Belarus</a></label>--user.location<br/>
                    <label><i className="fas fa-envelope"></i>&nbsp;
                        <em>email:</em> <a>vladward@gmail.com</a></label>--user.email<br/>
                    <label><i className="fas fa-gamepad"></i>&nbsp;
                        <em>like a:</em> <a>Adventure, Action, Party, Survival</a></label>--user.likes<br/>
                </div>
                <div className={styles.games}>
                    <div className={styles.games_Container}>
                        <div className={styles.game_item}>
                            <img src={cod}/><br/>
                            <i>Call of Duty</i>
                        </div>
                        <div className={styles.game_item}>
                            <img src={csgo}/><br/>
                            <i>CS:GO</i>
                        </div>
                        <div className={styles.game_item}>
                            <img src={dota}/><br/>
                            <i>Dota 2</i>
                        </div>
                        <div className={styles.game_item}>
                            <img src={fortnite}/><br/>
                            <i>Fortnite</i>
                        </div>
                        {/*<div className={styles.game_item}>*/}
                        {/*    <img src={minecraft}/>*/}
                        {/*    <i>Minecraft</i>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile