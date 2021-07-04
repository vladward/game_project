import React from "react"
import s from './Profile.module.css'
import userPhoto from "./../../images/user_profile.png"
import cod from "./../../images/gameIcons/cod.png"
import csgo from "./../../images/gameIcons/csgo.png"
import dota from "../../images/gameIcons/Dota2.png"
import fortnite from "./../../images/gameIcons/fortnite.png"
import minecraft from "./../../images/gameIcons/minecraft.png"

const Profile = () => {
    return (
        <div className={s.item}>
            <div className={s.container}>
                <div className={s.ava_item}>
                    <div className={s.img_container}>
                        <img src={userPhoto}/>
                    </div>
                    <div className={s.subscribe_container}>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className={s.name}>
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

                <div className={s.games}>
                    <div className={s.header}>
                        Любимые игры
                    </div>
                    <div className={s.games_Container}>
                        <div className={s.game_item}>
                            <img src={cod}/>
                            <div className={s.game_name}>Call of Duty</div>
                        </div>
                        <div className={s.game_item}>
                            <img src={csgo}/>
                            <div className={s.game_name}>CS:GO</div>
                        </div>
                        <div className={s.game_item}>
                            <img src={dota}/>
                            <div className={s.game_name}>DOTA2</div>
                        </div>
                        <div className={s.game_item}>
                            <img src={fortnite}/>
                            <div className={s.game_name}>Fortnite</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile