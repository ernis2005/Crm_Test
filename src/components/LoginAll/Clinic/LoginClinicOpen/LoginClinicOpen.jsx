import React, { useState } from "react";
import s from "./page.module.scss";
import { NavLink } from "react-router-dom";

function LoginClinicOpen() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Номер телефона:", phone);
    console.log("Пароль:", password);
    console.log("Запомни меня:", rememberMe);
    alert(
      `Номер телефона: ${phone}\nПароль: ${password}\nЗапомни меня: ${rememberMe}`
    );
  };
  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="phone">БИН</label>
        <input
          type="tel"
          id=""
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Введите БИН"
          required
        />
        <label htmlFor="phone">Номер телефона</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Введите номер"
          required
        />
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
        />
        <div className={s.rememberForgotContainer}>
          <div className={s.rememberMe}>
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Запомни меня</label>
          </div>
          <a href="/" className={s.forgotPassword}>
            <NavLink to={"/clinic/password"}>Забыли пароль?</NavLink>
          </a>
        </div>
        <button type="submit">Войти</button>
      </form>
      <p className={s.p}>
        У вас еще нет аккаунта? Тогда{" "}
        <NavLink to={"/clinic"}>
          <a href="#">зарегистрируйтесь</a>
        </NavLink>
      </p>
    </div>
  );
}

export default LoginClinicOpen;
