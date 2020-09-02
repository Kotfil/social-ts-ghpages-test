import React from "react";
import s from './../Dialogs.module.css'

export type PropsType = {
    messages: string
}

const Message = (props: PropsType) => {

    return(
        <div className={s.message}>{props.messages}</div>
            )
};

//comment from new branch
//comment from new branch2

export default Message
