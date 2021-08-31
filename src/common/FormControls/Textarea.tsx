import React from "react";
import s from './Textarea.module.css'

export const Textarea = ({input, meta, typeField, ...props}: any) => {
    console.log(input);
    console.log(meta);
    console.log(typeField);
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

// const FormControl = ({input,meta,Formtype ...props}:any) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
//             <div>
//                 <Formtype {...input} {...props} />
//             </div>
//             <div>
//                 {hasError && <span>{meta.error}</span> }
//             </div>
//         </div>
//
//     )
// }
//
//
// export const Textarea = (props) => {
//     return <FormControl {...props} Formtype="textarea"></FormControl>
// }