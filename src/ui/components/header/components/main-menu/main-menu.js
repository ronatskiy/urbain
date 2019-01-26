import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import cn from "classnames";

import "./main-menu.scss";
import { AppStore } from "../../../../store/app-store";
import { MenuItemType } from "../../../../store";
import DropDownMenu from "./components/drop-down-menu";
import MenuLink from "./components/menu-link";

function MainMenuItem({ menuItem, clickable }) {
    return (
        <div className="main-menu__item">
            <div className={cn(clickable && "main-menu__clickable-zone")}>
                {menuItem.type === MenuItemType.LINK && <MenuLink text={menuItem.label} {...menuItem} />}
                {menuItem.type === MenuItemType.DROPDOWN && <DropDownMenu text={menuItem.label} {...menuItem} />}
            </div>
        </div>
    );
}

function MainMenu({ appStore }) {
    return (
        <nav className="main-menu">
            {appStore.header.mainMenu.map(menuItem => (
                <MainMenuItem key={menuItem.label} menuItem={menuItem} clickable={menuItem.isClickable} />
            ))}
        </nav>
    );
}

MainMenu.propTypes = {
    appStore: PropTypes.instanceOf(AppStore),
};

export default inject("appStore")(observer(MainMenu));
