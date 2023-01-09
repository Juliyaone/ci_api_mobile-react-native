import React from 'react';
import MenuItem from "./MenuItem/MenuItem";
import * as styles from "./stylesMenuBar";
import Logout from "../Logout";

function MenuBar() {

    let menubar = {
        items: [
            {
                url: "/",
                name: "Home"
            },
            {
                url: "/register",
                name: "Register"
            },
            {
                url: "/login",
                name: "Login"
            },
            {
                url: "/sms-entry",
                name: "Enter sms"
            },
            {
                url: "/complexes",
                name: "Зарядка"
            },
            {
                url: "/profile",
                name: "Профиль"
            },
            {
                url: "/edit_profile",
                name: "Редактировать профиль"
            },
            // {
            //     url: "/notifications",
            //     name: "Уведомления"
            // },
            {
                url: "/subscribe",
                name: "Подписка"
            },
            {
                url: "/moods",
                name: "Настроения"
            },
            // {
            //     url: "/logout",
            //     name: "Выход"
            // },

        ]
    }

    return (
        <styles.Menubar>
            {
                menubar.items.map(
                    (menu) => {
                        return <MenuItem menu={menu} key={menu.name}/>
                    })
            }
            <Logout/>
        </styles.Menubar>
    );
}

export default MenuBar;