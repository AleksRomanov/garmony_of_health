import React from "react";
import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function BooksList() {
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'List of Books'}>
            <h1>List of Books</h1>
            <button onClick={linkClickHandler}>Go Back!!</button>
            <button onClick={() => Router.push('/login')}>Please login in</button>
            {/*// <div className={styles.pageHeader}>*/}
            {/*// <div className="page-header" id="layout-header">*/}
            {/*// <div className="page-header__wrapper">*/}
            {/*// <div ref="index.html" className="page-header__logo" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-back">*/}
            {/*// /!*<img style={styles.pageHeader} className="page-header__logo-image" href="logo.svg" src="/public/logo.svg" width="294" height="120" alt="SibNut" aria-label="Главная"/>*!/*/}
            {/*// <img className="page-header__logo-image" src="logo.svg" width="294" height="120" alt="SibNut" aria-label="Главная"/>*/}
            {/*// </div>*/}
            {/*// <div className="page-header__contacts">*/}
            {/*// <button className="page-header__contact-button contact-button--feedback-js" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-back">*/}
            {/*// <span>Написать нам</span>*/}
            {/*// <svg width="53" height="34.78">*/}
            {/*// <use href="#mail"/>*/}
            {/*// </svg>*/}
            {/*// </button>*/}
            {/*// <button className="page-header__contact-button my-menu__link--contacts" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-back">*/}
            {/*// <span>Связаться с нами</span>*/}
            {/*// <svg width="53" height="52">*/}
            {/*// <use href="#phone"/>*/}
            {/*// </svg>*/}
            {/*// </button>*/}
            {/*// </div>*/}
            {/*// <div className="page-header__language-en" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-back">*/}
            {/*// <a href="{{ 'index-eng'|page }}">*/}
            {/*// <img className="page-header__language-en-image" src="/public/images/teaser/EN.svg" width="80" height="45" alt="EN" aria-label="EN"/>*/}
            {/*// </a>*/}
            {/*// </div>*/}
            {/*// <a href="#my-menu" className="hamburger hamburger--emphatic">*/}
            {/*// <span className="hamburger-box"><span className="hamburger-inner"/></span>*/}
            {/*// </a>*/}
            {/*// </div>*/}
            {/*//*/}
            {/*// /!*<nav id="my-menu">*!/*/}
            {/*// /!*    <ul>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--teaser link-to-teaser">Главная</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--about">О нас</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--products">Наша продукция</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--catalog">Каталог</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--quality">Наша работа</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--gallery">Фото и видео</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--certificates">Сертификаты</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--partners">Партнерам</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--contacts">Контакты</a></li>*!/*/}
            {/*// /!*        <li><a href="#" className="my-menu__link--map">Мы на карте</a></li>*!/*/}
            {/*// /!*    </ul>*!/*/}
            {/*// /!*</nav>*!/*/}
            {/*//*/}
            {/*// </div>*/}
            {/*//*/}
            {/*// /!*<section className="feedback-popup">*!/*/}
            {/*// /!*    <div className="feedback-popup__form-wrapper">*!/*/}
            {/*// /!*        <form className="feedback-popup__form" method="post">*!/*/}
            {/*// /!*            <button className="feedback-popup__close">*!/*/}
            {/*// /!*                <svg width="50" height="50">*!/*/}
            {/*// /!*                    <use href="#close"/>*!/*/}
            {/*// /!*                </svg>*!/*/}
            {/*// /!*            </button>*!/*/}
            {/*// /!*            <div className="success"><span>Спасибо за заявку!</span></div>*!/*/}
            {/*//*/}
            {/*// /!*            <input type="hidden" name="project_name" value="Сибирский орех"/>*!/*/}
            {/*// /!*            <input type="hidden" name="admin_email" value="siborekh@mail.ru"/>*!/*/}
            {/*// /!*            <input type="hidden" name="form_subject" value="Заявка с формой обратной связи"/>*!/*/}
            {/*// /!*            <h2>Отправьте Ваш вопрос, мы обязательно с Вами свяжемся!</h2>*!/*/}
            {/*// /!*            <input type="text" name="client_name" placeholder="Как Вас зовут" required/>*!/*/}
            {/*// /!*            <input type="text" name="client_region" placeholder="Ваш регион" required/>*!/*/}
            {/*// /!*            <input type="text" name="client-theme" placeholder="Тема обращения" minLength="5"/>*!/*/}
            {/*// /!*            <textarea name="text" className="client-text" placeholder="Текст обращения" required/>*!/*/}
            {/*// /!*            <input type="text" name="phone-number" placeholder="Ваш телефон" required/>*!/*/}
            {/*// /!*            <input type="email" name="client_email" placeholder="Ваш e-mail" pattern="^[a-zA-Z0-9]([a-zA-Z0-9_\-]*\.?[a-zA-Z0-9_\-]+)*@[a-zA-Z0-9][a-zA-Z0-9_\-]*\.[a-zA-Z]{2}[a-zA-Z]*$" required/>*!/*/}
            {/*//*/}
            {/*// /!*            <button type="submit" className="button feedback-popup__form-wrapper-button">*!/*/}
            {/*// /!*                <p className="buttton__title">Отправить форму</p>*!/*/}
            {/*// /!*                <span></span>*!/*/}
            {/*// /!*            </button>*!/*/}
            {/*//*/}
            {/*// /!*            <div className="trigger-consent">Нажимая на кнопку вы принимаете условия передачи*!/*/}
            {/*// /!*                <a className="consent" href="{{ 'policy'|page }}">конфиденциальных данных</a>*!/*/}
            {/*// /!*            </div>*!/*/}
            {/*// /!*        </form>*!/*/}
            {/*// /!*    </div>*!/*/}
            {/*// /!*</section>*!/*/}
            {/*// </div>*/}
        </MainLayout>
    )
}

