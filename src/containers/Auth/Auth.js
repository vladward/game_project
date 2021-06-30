import React from "react"
import s from "./Auth.module.css"
import Input from "../../components/UI/Input/Input";



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