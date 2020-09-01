import React from "react";
import s from './Sidebar.module.css'
import {FriendsPropTypes} from "../redux/redux";
import Friends from "./Friends/Friends";

type PropsType = {
    friends: Array<FriendsPropTypes>
}

const Sidebar = ({friends}: PropsType) => {
    const friendsEl = friends.map(i => <Friends key={i.id} name={i.name} />);
    return (
        <div className={s.sidebar}>
            <h3 className={s.friends}>Friends</h3>
            123
            {friendsEl};
        </div>
    )
}
export default Sidebar