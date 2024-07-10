import React, { useState } from "react";
import s from "./page.module.scss";
import { Logo } from "../../assets/svg/logo";
import {
  HomeBlcak,
  Patients,
  PriceList,
  Qutfits,
} from "../../assets/svg/navList";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({ isModal, setIsModal }) => {
  const [status, setStatus] = useState(2);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <Sidebar collapsed={isModal} className={s.navbar}>
      <div className={s.LOgo}>
        <p>Logo</p>
      </div>
      {status === 2 ? (
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#E8F2FC",
                color: "#00B0F0",
                position: "relative",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "6px",
                  backgroundColor: "#017DC3",
                  borderTopRightRadius: "9999px",
                  borderBottomRightRadius: "9999px",
                },
              },
            },
          }}
        >
          <MenuItem
            component={<NavLink to="/" />}
            icon={<HomeBlcak stroke={isActive("/") ? "#00B0F0" : "black"} />}
          >
            Панель приборов
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#E8F2FC",
                color: "#00B0F0",
                position: "relative",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "6px",
                  backgroundColor: "#017DC3",
                  borderTopRightRadius: "9999px",
                  borderBottomRightRadius: "9999px",
                },
              },
            },
          }}
        >
          <MenuItem
            component={<NavLink to="/" />}
            icon={<HomeBlcak stroke={isActive("/") ? "#00B0F0" : "black"} />}
          >
            Панель приборов
          </MenuItem>
          <MenuItem
            component={<NavLink to="/price-list" />}
            icon={
              <PriceList
                stroke={
                  isActive("/price-list") ||
                  isActive("/price-list/create-a-price-list")
                    ? "#00B0F0"
                    : "black"
                }
              />
            }
          >
            Прайс-лист
          </MenuItem>

          <MenuItem
            component={<NavLink to="/qutfits" />}
            icon={
              <Qutfits stroke={isActive("/qutfits") ? "#00B0F0" : "black"} />
            }
          >
            Наряды
          </MenuItem>
          <MenuItem
            component={<NavLink to="/patients" />}
            icon={
              <Patients stroke={isActive("/patients") ? "#00B0F0" : "black"} />
            }
          >
            Пациенты
          </MenuItem>
        </Menu>
      )}
    </Sidebar>
  );
};

export default NavBar;
