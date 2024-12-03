import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Create Report',
        icon: <i className='bx bx-edit'></i>,
        to: '/reports',
        section: 'reports'
    },
    {
        display: 'Open Report',
        icon: <i className="bx bx-folder-open"></i>,
        to: '/open-report',
        section: 'open-report'
    },
    {
        display: 'Report Info',
        icon: <i className="bx bx-bar-chart-alt-2"></i>,
        to: '/report-info',
        section: 'report-info'
    },
    {
        display: 'Compare',
        icon: <i className='bx bx-transfer-alt'></i>,
        to: '/compare-page',
        section: 'compare-page'
    },
    {
        display: 'Other',
        icon: <i className="bx bx-cog"></i>,
        to: '/other',
        section: 'other'
    }
];

const Sidebar = ({ toggleSidebar, isSidebarCollapsed }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sidebarRef = useRef();
    const location = useLocation();

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : 'expanded'}`}>
            <div className="sidebar__logo">
                {isSidebarCollapsed ? "ETL" : "ETL VALIDATE"}
            </div>
            <div ref={sidebarRef} className="sidebar__menu">
                {sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            {!isSidebarCollapsed && (
                                <div className="sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
            <button className="sidebar__toggle" onClick={toggleSidebar}>
                {isSidebarCollapsed ? <i className="bx bx-chevron-right"></i> : <i className="bx bx-chevron-left"></i>}
            </button>
        </div>
    );
};

export default Sidebar;
