import React, { Component } from 'react';
import {Link} from "react-router-dom";

class AboutPage extends Component {
    render() {
        return (
            <div>
                <Link>
                <button>open</button>
                    <h1>About Page</h1>
                    <p>Добро пожаловать на страницу "О нас" нашего веб-сайта!</p>
                    <p>Мы команда разработчиков, увлеченных созданием удивительных веб-приложений.</p>
                    <p>Если у вас есть какие-либо вопросы или отзывы, пожалуйста, свяжитесь с нами.</p>
                </Link>
            </div>
        );
    }
}

export default AboutPage;