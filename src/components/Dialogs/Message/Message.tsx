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
        <div className={s.message}>{props.messages}</div>
        </>
            )
};

export default Message
