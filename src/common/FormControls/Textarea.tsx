import React from "react";
import s from './Textarea.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    const hasTouched = meta.touched && meta.error;
    return (
        <div className={s.wrapper}>
            <textarea {...input}{...props} className={hasTouched && s.error}/>
            {hasTouched && <span>{meta.error}</span>}
        </div>
    )
}