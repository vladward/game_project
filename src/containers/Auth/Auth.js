import React from "react"
import s from "./Auth.module.css"
import Input from "../../components/UI/Input/Input";


const state = {
    formControls: {
        email: {
            value: '',
            type: 'email',
            label: 'Email',
            errorMessage: 'Введите корректный email',
            valid: false,
            touched: false,
            validation: {
                required: true,
                email: true
            }
        },
        password: {
            value: '',
            type: 'password',
            label: 'Пароль',
            errorMessage: 'Введите корректный пароль',
            valid: false,
            touched: false,
            validation: {
                required: true,
                minLength: 6
            }
        }
    }
}

const Auth = () => {

    const loginHandler = () => {
        return (
            <div>

            </div>
        )
    }

    const registerHandler = (e) => {
        return (
            e.preventDefault()
        )
    }

    const submitHandler = (e) => {
        return (
            <div>

            </div>
        )
    }

    const onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value)
    }

    function renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }
    return (
        <div className={s.Auth}>
            <div>
                <h1>Авторизация</h1>
                <form onSubmit={submitHandler} className={s.AuthForm}>
                    <Input
                        label="Email"
                    />
                    <Input
                        label="Password"
                        errorMessage={'TEST'}
                    />
                    <button type="success"
                            onClick={loginHandler}>Войти
                    </button>
                    <button type="primary"
                            onClick={registerHandler}>Зарегистрироваться
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Auth