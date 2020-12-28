import React, { Component } from 'react';
import { connect } from 'redux'

import FormField from "../utils/Form/FormField"

class Login extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    input: 'email-input',
                    type: 'email',
                    placeholder: "Enter your email"
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    input: 'password-input',
                    type: 'password',
                    placeholder: "Enter your password"
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }

    submitForm = (e) => {

    }

    updateForm = () => {

    }


    render() {
        return (
            <div className="signin_wrapper">
                <form onSubmit={(e) => this.submitForm(e)}>
                    <FormField id={'email'} formData={this.state.formData.email} change={(element) => this.updateForm(element)}/>
                </form>
            </div>
        );
    }
}

export default Login;
