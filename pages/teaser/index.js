
import {MainLayout} from "../../components/MainLayout";
import React from "react";
import Router from "next/router";

export default function Teaser() {
    const linkClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={'Page Teaser'}>
            <h1>Teaser page</h1>
            <button onClick={linkClickHandler}>Go Back!!</button>
        </MainLayout>
    )
//         <section className={styles.teaser} >
//             <div className="teaser__container" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-back">
//                 <div className="teaser__utp-wrapper">
//                     <h1 className="teaser__title">ЯДРО КЕДРОВОГО ОРЕХА</h1>
//                     <span>от производителя</span>
//                     <button className="button teaser__button contact-button--feedback-js">
//                         <p className="buttton__title">СДЕЛАТЬ ЗАКАЗ</p>
//                         <span/>
//                     </button>
//                 </div>
//             </div>
//             <div className="teaser__address" data-sal="slide-up" data-sal-duration="2000" data-sal-easing="ease-out-back">
//                 <a href="#" className="teaser-container__adress my-menu__link--map">Г. Красноярск, пгт. Березовка, ул. Трактовая 64А</a>
//             </div>
//         </section>
//
}
