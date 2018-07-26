import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SmoothCollapse from 'react-smooth-collapse';
import './style.scss';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandAdvanced: false
        }

        this.toggleAdvanced = this.toggleAdvanced.bind(this);
    }

    toggleAdvanced() {
        this.setState({
            expandAdvanced: !this.state.expandAdvanced
        })
    }
    render() {
        const { expandAdvanced } = this.state;
        return (
            <React.Fragment>
                <form className="reg-form">
                    <h2 style={{ fontWeight: 'normal', margin: '38px' }}>Регистрация</h2>
                    <button className="reg-button vk">Регистрация из Вконтакте</button>
                    <button className="reg-button fb">Регистрация из Facebook</button>
                    <SmoothCollapse expanded={expandAdvanced}>
                        <button className="reg-button gp"> Регистрация из Google Plus </button>
                        <button className="reg-button ya"> Регистрация из <span>Яндекс</span></button>
                    </SmoothCollapse>
                    <p className="reg-showhide"
                        onClick={this.toggleAdvanced}>
                        Другие {expandAdvanced ? <FontAwesomeIcon icon={['fas', 'angle-up']} /> : <FontAwesomeIcon icon={['fas', 'angle-down']} />}
                    </p>
                    <p style={{ color: "#cdd0d4" }}>или</p>
                    <input type="text" name="login" placeholder="Ваш логин или E-mail" />
                    <input type="password" name="pwd" placeholder="Пароль" />
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between", margin: "20px 0 40px" }}>
                        <label className="custom-checkbox">
                            <span>Запомнить меня</span>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                        <a href="#forgotpassword">Забыли пароль?</a>
                    </div>
                    <button type="submit" className="reg-button submit">Зарегистрироваться</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Form;