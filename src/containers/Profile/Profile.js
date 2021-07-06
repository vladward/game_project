import React from "react"
import s from './Profile.module.css'
import userPhoto from "./../../images/user_profile.png"
import COD from "./../../images/gameIcons/cod.png"
import Minecraft from "./../../images/gameIcons/minecraft.png"
import CS_GO from "./../../images/gameIcons/csgo.png"
import Dota2 from "../../images/gameIcons/Dota2.png"
import Fortnite from "./../../images/gameIcons/fortnite.png"
import Assasins_Creed from "./../../images/gameIcons/assasins.png"
import TES5_Skyrim from "../../images/gameIcons/Skyrim.png"
import Horizon_Zero_Dawn from "./../../images/gameIcons/horizen.png"
import Mario from "./../../images/gameIcons/Mario.png"
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
                            <img src={TES5_Skyrim}/>
                            <div className={s.game_name}>TES5 Skyrim</div>
                        </div>
                        <div className={s.game_item}>
                            <img src={Assasins_Creed}/>
                            <div className={s.game_name}>Assasins Creed</div>
                        </div>
                        <div className={s.game_item}>
                            <img src={Horizon_Zero_Dawn}/>
                            <div className={s.game_name}>Horizon Zero Dawn</div>
                        </div>
                        <div className={s.game_item}>
                            <img src={Dota2}/>
                            <div className={s.game_name}>Dota 2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile