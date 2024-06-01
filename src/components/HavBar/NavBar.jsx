import React from 'react';
import s from './page.module.scss';
import { Logo } from '../../assets/svg/logo';
import { HomeBlcak, PriceList } from '../../assets/svg/navList';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = ({ isModal, setIsModal }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Sidebar collapsed={isModal} className={s.navbar}>
      <Logo />
      <Menu menuItemStyles={{
        button: {
          [`&.active`]: {
            backgroundColor: '#E8F2FC',
            color: '#00B0F0',
          },
        },
      }}>
        <MenuItem
          component={<NavLink to="/" />}
          icon={<HomeBlcak stroke={isActive("/") ? "#00B0F0" : "black"} />}
        >
          Панель приборов
        </MenuItem>
        <MenuItem
          component={<NavLink to="/price-list" />}
          icon={<PriceList stroke={isActive("/price-list") || isActive("/price-list/create-a-price-list") ? "#00B0F0" : "black"} />}
        >
          Прайс-лист
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default NavBar;
