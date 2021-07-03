import React from "react"
import s from "./AddGame.module.css"
import Button from "../../../components/UI/Button/Button";
import {createControl, validate, validateForm} from "../../../form/formFramework";
import Input from "../../../components/UI/Input/Input";
import emptyTag from "../../../hoc/emptyTag/emptyTag";

function createOptionControl(number, text) {
    return createControl({
        label: `${text}`,
        errorMessage: 'Это поле не может быть пустым',
        id: number
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите название игры',
            errorMessage: 'Это поле не может быть пустым'
        }, {required: true}),
        option2: createOptionControl(1, 'Оценка'),
        option3: createOptionControl(2, 'Жанр'),
        option4: createOptionControl(3, 'Платформа'),
        option5: createOptionControl(4, 'Издатель'),
        option6: createOptionControl(5, 'Разработчик'),
        option7: createOptionControl(6, 'Дата создания')
    }
}

class AddGame extends React.Component {

    state = {
        games: [],
        isFormValid: false,
        formControls: createFormControls()
    }

    addGameHandler = (e) => {
        e.preventDefault()
    }

    clearGameHandler = () => {

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
                    <form className={s.AddGames_form}>

                        {this.renderControls()}

                        <Button
                            type="success"
                            onClick={this.addGameHandler}
                            disabled={!this.state.isFormValid}>Добавить
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.clearGameHandler}>Отмена
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddGame