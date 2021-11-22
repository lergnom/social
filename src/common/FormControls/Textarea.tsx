import React from "react";
import s from './Textarea.module.css'

export const Textarea = ({input, meta, typeField, ...props}: any) => {
    const hasTouched = meta.touched && meta.error;
    return (
        <div className={s.wrapper}>
            <textarea {...input}{...props} className={hasTouched && s.error}/>
            {hasTouched && <span>{meta.error}</span>}
        </div>
    )
}

export const FieldControl = ({input, meta, FieldChange, ...props}: any) => {
    const hasTouched = meta.touched && meta.error;
    return (
        <div className={s.wrapper}>
            <FieldChange {...input}{...props} className={hasTouched && s.error}/>
            {hasTouched && <span>{meta.error}</span>}
        </div>
    )
}

export const MyField = ({fieldChange,...props}: any) => {

    return <FieldControl {...props} FieldChange={fieldChange}/>
}

