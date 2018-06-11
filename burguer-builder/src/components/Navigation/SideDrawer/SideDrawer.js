import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'
import css from './SideDrawer.css'

const sideDrawer = (props) => {

    let attachedClasses = [css.SideDrawer, css.Close];

    if (props.open) {
        attachedClasses = [css.SideDrawer, css.Open];
    }

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
                <div className={css.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;