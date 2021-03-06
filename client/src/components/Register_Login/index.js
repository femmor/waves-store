import React from 'react'
import MyButton from '../utils/button'
import Login from './login'

const RegisterLogin = () => {
    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        <h2>New Customers</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur alias aliquid maxime.</p>
                        <MyButton
                            type="default"
                            title="Create an account"
                            linkTo="/register"
                            addStyles={{
                                margin: "10px 0 0 0"
                            }}
                        />
                    </div>
                    <div className="right">
                        <h2>Registered Customers</h2>
                        <Login/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin
