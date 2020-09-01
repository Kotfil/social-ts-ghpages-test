import React from "react";
import s from './Friends.module.css'
import {FriendsPropTypes} from "../../redux/redux";

type PropsType = {
    key: number
    name: string
}

const Friends = (props: PropsType) => {
   return (
       <div>
           <h2>{props.name}</h2>
       </div>
    )
}
export default Friends