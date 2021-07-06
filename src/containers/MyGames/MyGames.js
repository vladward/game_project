import React from "react"
import s from './MyGames.module.css'
import COD from "./../../images/gameIcons/cod.png"
import Minecraft from "./../../images/gameIcons/minecraft.png"
import CS_GO from "./../../images/gameIcons/csgo.png"
import Dota2 from "../../images/gameIcons/Dota2.png"
import Fortnite from "./../../images/gameIcons/fortnite.png"
import Assasins_Creed from "./../../images/gameIcons/assasins.png"
import TES5_Skyrim from "../../images/gameIcons/Skyrim.png"
import Horizon_Zero_Dawn from "./../../images/gameIcons/horizen.png"
import Mario from "./../../images/gameIcons/Mario.png"
import Button from "../../components/UI/Button/Button"
import {connect} from "react-redux";
import {fetchMyGames} from "../../store/actions/myGamesAction";


class MyGames extends React.Component {

    renderGameItem() {
        return this.props.games.map((gam) => {
            const imName = gam.data.nameGame
            return (
                <div className={s.MyGames_item} key={gam.id}>
                    {
                        (imName === 'Dota2')
                            ? <img src={Dota2}/>
                            : null
                    }
                    {
                        (imName === 'TES5_Skyrim')
                            ? <img src={TES5_Skyrim}/>
                            : null
                    }
                    {
                        (imName === 'Mario')
                            ? <img src={Mario}/>
                            : null
                    }
                    {
                        (imName === 'CS_GO')
                            ? <img src={CS_GO}/>
                            : null
                    }
                    {
                        (imName === 'Minecraft')
                            ? <img src={Minecraft}/>
                            : null
                    }
                    {
                        (imName === 'COD')
                            ? <img src={COD}/>
                            : null
                    }
                    {
                        (imName === 'Fortnite')
                            ? <img src={Fortnite}/>
                            : null
                    }
                    {
                        (imName === 'Assasins Creed')
                            ? <img src={Assasins_Creed}/>
                            : null
                    }
                    {
                        (imName === 'Horizon_Zero_Dawn')
                            ? <img src={Horizon_Zero_Dawn}/>
                            : null
                    }
                    <div>Name: <i><strong>{gam.data.nameGame}</strong></i></div>
                    <div>Create: <i><strong>{gam.data.description.gDate}</strong></i></div>
                    <div>Maker: <i><strong>{gam.data.description.gDeveloper}</strong></i></div>
                    <div>Genre: <i><strong>{gam.data.description.gGenre}</strong></i></div>
                    <div>Platform: <i><strong>{gam.data.description.gPlatform}</strong></i></div>
                    <div>Published: <i><strong>{gam.data.description.gPublisher}</strong></i></div>
                    <div>Raiting: <i><strong>{gam.data.description.gStar}</strong></i></div>
                </div>
            )
        })
    }


    handleClick = () => {
        this.props.history.push("/AddGame")
    }


    componentDidMount() {
        this.props.fetchMyGames()
    }

    render() {

        return (
            <div className={s.Container}>
                <div className={s.Header}>
                    <Button onClick={this.handleClick}>Добавить игру</Button>
                    <Button>Редактировать</Button>
                </div>
                <h1>My games</h1>

                <div className={s.MyGames}>
                    {this.renderGameItem()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        games: state.myGames.games
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMyGames: () => dispatch(fetchMyGames())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyGames)