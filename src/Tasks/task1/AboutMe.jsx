import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

const AboutMe = (props) => {
    return (
        <React.Fragment>
            <div className="social">
                <img src="./assets/img/myphoto.jpeg" />
                <div className="contacts">
                    <a href="skype:swzigsun?userinfo">
                        <FontAwesomeIcon icon={['fab', 'skype']} size="3x" />
                    </a>
                    <a href="https://t.me/lefftolstoi">
                        <FontAwesomeIcon icon={['fab', 'telegram']} size="3x" />
                    </a>
                    <a href="https://vk.com/lefftolstoi">
                        <FontAwesomeIcon icon={['fab', 'vk']} size="3x" />
                    </a>
                    <a href="tel:+79627297898">
                        <FontAwesomeIcon icon={['fas', 'phone']} size="3x" />
                    </a>
                </div>
            </div>
            <div className="caption">
                <h1>Лисицын Владислав Валерьевич</h1>
                <h2>Опыт работы: 1 год 5 месяцев</h2>
                <ul>
                    <li>
                        <b>Октябрь 2017 - по настоящее время</b>
                        <span> Фриланс web-разработчик</span>
                    </li>
                    <li>
                        <b>Июнь 2017 — сентябрь 2017</b>
                        <span> Системный администратор</span>
                    </li>
                    <li>
                        <b>Май 2017 — июнь 2017</b>
                        <span> Технический специалист</span>
                    </li>
                </ul>

                <h2>Front-end :</h2>
                <p>
                    В своей работе активно использую Sass препроцессор, методологию BEM, фреймворки Bootstrap, MaterialUI и прочие, удобные для решения конкретной задачи.
                    Имею опыт адаптивной (media-queries) и responsive (flex, grid) верстки. Также владею и понимаю принципы работы шаблонизаторов (пользовался Pug(Jade) и Handlebars)
                    Люблю JavaScript
                    Большой опыт jQuery (в т.ч. AJAX, плагины и прочее)
                    </p>
                <h2>Back-end :</h2>
                <p>
                    Использую NodeJS и cопутствующее ему окружение - npm, ExpressJS, SocketIO и прочие
                    Из баз данных имел дело с MySQL и MongoDB
                    </p>
            </div>
        </React.Fragment>
    )
}

export default AboutMe;