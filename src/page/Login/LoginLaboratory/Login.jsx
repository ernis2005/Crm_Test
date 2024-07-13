import React, { useState } from "react";
import s from "./page.module.scss";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Роль:", role);
    console.log("Запомни меня:", rememberMe);
    alert(`Роль: ${role}\nЗапомни меня: ${rememberMe}`);
  };
  return (
    <>
      <div className={s.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="role" className={s.label}>
            Какая у вас роль?
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" disabled>
              Выберите роль
            </option>
            <option value="admin">Клиника</option>
            <option value="user">Лаборатория</option>
            <option value="user">Техник</option>
          </select>
          <div className={s.rememberMe2}>
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Запомни меня</label>
          </div>
          <NavLink className={s.link} to={"/further"}>
            <button className={s.button2} type="submit">
              Далее
            </button>
          </NavLink>
        </form>
        <p className={s.p}>
          У вас уже есть аккаунт? Тогда
          <a className={s.context} href="/">
            <NavLink to={"/open"}>войдите в аккаунт</NavLink>
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
