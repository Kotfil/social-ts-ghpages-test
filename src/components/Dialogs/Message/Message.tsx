import React from "react";
import s from './../Dialogs.module.css'

export type PropsType = {
    messages: string
}


const Message = (props: PropsType) => {

    return(
        <>

        <div className={s.message}>{props.messages}</div>
            <p> add new Parahraph</p>
        </>
    )
};

export default Message