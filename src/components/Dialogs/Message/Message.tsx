import React from "react";
import s from './../Dialogs.module.css'

export type PropsType = {
    messages: string
}


const Message = (props: PropsType) => {

    return(
        <>
            <h1>Message</h1>
            <hr/>
            <h2>Random text</h2>
            <h2>Random text2</h2>
        <div className={s.message}>{props.messages}</div>
        </>
            )
};

export default Message
