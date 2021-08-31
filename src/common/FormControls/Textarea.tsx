import React from "react";

export const Textarea = ({input, meta, ...props}: any) => {
    console.log(input);
    console.log(meta);
    return (
        <div>
            <textarea {...input}{...props}/>
        </div>
    )
}