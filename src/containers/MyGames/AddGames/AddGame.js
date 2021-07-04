import React from "react"
import s from "./AddGame.module.css"
import Button from "../../../components/UI/Button/Button";
import {createControl, validate, validateForm} from "../../../form/formFramework";
import Input from "../../../components/UI/Input/Input";
import emptyTag from "../../../hoc/emptyTag/emptyTag";
import axios from "axios";

function createOptionControl(item, text) {
    return createControl({
        label: `${text}`,
        errorMessage: 'Это поле не может быть пустым',
        id: item
    }, {required: true})
}

function createFormControls() {
    return {
        Game: createControl({
            label: 'Введите название игры',
            errorMessage: 'Это поле не может быть пустым'
        }, {required: true}),
        game1: createOptionControl(1, 'Оценка'),
        game2: createOptionControl(2, 'Жанр'),
        game3: createOptionControl(3, 'Платформа'),
        game4: createOptionControl(4, 'Издатель'),
        game5: createOptionControl(5, 'Разработчик'),
        game6: createOptionControl(6, 'Дата создания')
    }
}


class AddGame extends React.Component {

    state = {
        games: [],
        newGameItem: {},
        isFormValid: false,
        formControls: createFormControls()
    }

    submitHandler = (e) => {
        e.preventDefault()
    }

    // addGameHandler = (e) => {
    //     e.preventDefault()
    //
    //     const games = this.state.games.concat()
    //     const index = games.length + 1
    //
    //     const newGameItem = {
    //         nameGame: this.state.formControls.Game.value,
    //         id: index,
    //         description: [
    //             {gStar: this.state.formControls.game1.value, id: this.state.formControls.game1.id},
    //             {gGenre: this.state.formControls.game2.value, id: this.state.formControls.game2.id},
    //             {gPlatform: this.state.formControls.game3.value, id: this.state.formControls.game3.id},
    //             {gPublisher: this.state.formControls.game4.value, id: this.state.formControls.game4.id},
    //             {gDeveloper: this.state.formControls.game5.value, id: this.state.formControls.game5.id},
    //             {gDate: this.state.formControls.game6.value, id: this.state.formControls.game6.id},
    //         ]
    //     }
    //
    //     games.push(newGameItem)
    //
    //     this.setState({
    //         games,
    //         newGameItem,
    //         isFormValid: false,
    //         formControls: createFormControls()
    //     })
    // }

    createGameHandler = async (e) => {
        e.preventDefault()

        const newGameItem = {
            nameGame: this.state.formControls.Game.value,
            description: {
                gStar: this.state.formControls.game1.value,
                gGenre: this.state.formControls.game2.value,
                gPlatform: this.state.formControls.game3.value,
                gPublisher: this.state.formControls.game4.value,
                gDeveloper: this.state.formControls.game5.value,
                gDate: this.state.formControls.game6.value
            }
        }

        try{
            await axios.post('https://gamer-arena-a2edb-default-rtdb.europe-west1.firebasedatabase.app/Games.json', newGameItem)

            this.setState({
                games: [],
                isFormValid: false,
                formControls: createFormControls()
            })
        } catch (error) {
            console.log(error)
        }
    }

    cancelGameHandler = (e) => {
        this.props.history.push("/MyGames")
    }

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <emptyTag key={controlName + index}>
                    <Input
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={e => this.changeHandler(e.target.value, controlName)}
                    />

                    {index === 0 ? <hr/> : null}
                </emptyTag>
            )
        })
    }

    render() {

        return (
            <div className={s.AddGames}>
                <div>
                    <h1>Добавить игру</h1>
                    <form onSubmit={this.submitHandler} className={s.AddGames_form}>

                        {this.renderControls()}

                        {/*<Button*/}
                        {/*    type="success"*/}
                        {/*    onClick={this.addGameHandler}*/}
                        {/*    disabled={!this.state.isFormValid}>1) Сохранить значения*/}
                        {/*</Button>*/}
                        <Button
                            type="success"
                            onClick={this.createGameHandler}
                            >
                            2) Добавить игру
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.cancelGameHandler}>Отмена
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddGame