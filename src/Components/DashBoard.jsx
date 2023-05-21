import React, { useContext } from 'react';
import style from '../Style/dashboard.module.css'
import LeftSideNavigation from './LeftSideNavigation'
import { Outlet } from 'react-router-dom';
import Context from '../Context/Context'

const DashBoard = () => {

    const { edit } = useContext(Context)

    return (
        <>
            <div className={style.dashboardWrapper} >
                <LeftSideNavigation
                />
                <div className={`${style.mainWrapper} ${edit && style.togglemain}`}>
                    <Outlet />
                </div>
            </div >
        </>
    )
}

export default DashBoard
