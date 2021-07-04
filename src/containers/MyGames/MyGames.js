import React from "react"
import s from './MyGames.module.css'
import cod from "./../../images/gameIcons/cod.png"
import minecraft from "./../../images/gameIcons/minecraft.png"
import csgo from "./../../images/gameIcons/csgo.png"
import dota from "./../../images/gameIcons/dota.png"
import fortnite from "./../../images/gameIcons/fortnite.png"
import assasins from "./../../images/gameIcons/assasins.png"
import skyrim from "./../../images/gameIcons/skyrim.png"
import horizon from "./../../images/gameIcons/horizen.png"
import Button from "../../components/UI/Button/Button";
import axios from "axios"


class MyGames extends React.Component {

    handleClick = (e) => {
        this.props.history.push("/AddGame")
    }

    render() {

        return (
            <div className={s.Container}>
                <div className={s.Header}>
                    <Button onClick={this.handleClick}>Добавить игру</Button>
                    <Button>Редактировать</Button>
                </div>
                <div className={s.MyGames}>
                    <div className={s.MyGames_item}>
                        <img src={cod}/>
                        <div>Call of Duty: Black Ops 4</div>
                        <div>Оценка: 8 из 10</div>
                        <div>Жанр: Shooter</div>
                        <div>Платформы: PC, PlayStation 4, Xbox One</div>
                        <div>Издатель: Activision Blizzard</div>
                        <div>Разработчик: Treyarch</div>
                        <div>Релиз: 12 октября 2018</div>
                    </div>
                    <div className={s.MyGames_item}>
                        <img src={minecraft}/>
                        <div>Minecraft</div>
                        <div>Оценка: 6 из 10</div>
                        <div>Жанр: Sandbox</div>
                        <div>Платформы: PC, PlayStation 4, Xbox One</div>
                        <div>Издатель: Microsoft</div>
                        <div>Разработчик: Mojang AB</div>
                        <div>Релиз: 18 ноября 2011</div>
                    </div>
                    <div className={s.MyGames_item}>
                        <img src={csgo}/>
                        <div>CS: GO</div>
                        <div>Оценка: 7 из 10</div>
                        <div>Жанр: Shooter</div>
                        <div>Платформы: PC, Linux, Mac</div>
                        <div>Издатель: Valve</div>
                        <div>Разработчик: Valve</div>
                        <div>Релиз: 21 августа 2012</div>
                    </div>
                    <div className={s.MyGames_item}>
                        <img src={dota}/>
                        <div>Dota 2</div>
                        <div>Оценка: 8 из 10</div>
                        <div>Жанр: Strategy, Arena</div>
                        <div>Платформы: PC, Linux, Mac</div>
                        <div>Издатель: Valve</div>
                        <div>Разработчик: Valve</div>
                        <div>Релиз: 13 октября 2010</div>
                    </div>
                    <div className={s.MyGames_item}>
                        <img src={fortnite}/>
                        <div>Fortnite</div>
                        <div>Оценка: 7 из 10</div>
                        <div>Жанр: Survival, Shooter</div>
                        <div>Платформы: PC, PS 4, Xbox One, Nintendo</div>
                        <div>Издатель: Epic Games</div>
                        <div>Разработчик: Epic Games</div>
                        <div>Релиз: 25 июля 2017</div>
                    </div>
                    <div className={s.MyGames_item}>
                        <img src={assasins}/>
                        <div>Assasins Creed</div>
                        <div>Оценка: 10 из 10</div>
                        <div>Жанр: Action, Adventure</div>
                        <div>Платформы: PC, PS 4, Xbox One, Nintendo</div>
                        <div>Издатель: Ubisoft</div>
                        <div>Разработчик: Ubisoft</div>
                        <div>Релиз: 14 ноября 2007</div>
                    </div>
                    <div className={s.MyGames_item}>
                        <img src={skyrim}/>
                        <div>TES 5: Scyrim</div>
                        <div>Оценка: 10 из 10</div>
                        <div>Жанр: Action, Adventure</div>
                        <div>Платформы: PC, Mac, PS 4, Xbox One</div>
                        <div>Издатель: Bethesda</div>
                        <div>Разработчик: Bethesda</div>
                        <div>Релиз: 11 декабря 2010</div>
                    </div>
                    <div className={s.MyGames_item}>
                        <img src={horizon}/>
                        <div>Horizen Zero Dawn</div>
                        <div>Оценка: 10 из 10</div>
                        <div>Жанр: Action, Adventure, RPG</div>
                        <div>Платформы: PC, Mac, PS 4, Xbox One</div>
                        <div>Издатель: Sony Interactive Entertainment</div>
                        <div>Разработчик: Guerrilla Games</div>
                        <div>Релиз: 28 февраля 2017</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyGames