import React from 'react';
import s from './Preloader.module.css'
import preloader from './preloader.gif'

export const Preloader = () => {
    return <>
        <div className={s.preloaderContainer}>
        <img
            src={preloader}
            alt="preloader"/>
        </div>
    </>
}