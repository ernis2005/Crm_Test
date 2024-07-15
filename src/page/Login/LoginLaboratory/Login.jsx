import React, { useState } from "react";
import s from "./page.module.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (!role) {
    //   setShowModal(true);
    // } else {
    if (role === "admin") {
      navigate("/clinic");
    } else if (role === "laboratory") {
      navigate("/laboratory");
    } else if (role === "technician") {
      navigate("/technician");
    }
    // }
  };

  // const closeModal = () => {
  //   setShowModal(false);
  //   alert("Вы не выбрали роль");
  // };

  return (
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
          <option value="laboratory">Лаборатория</option>
          <option value="technician">Техник</option>
        </select>
        <div className={s.rememberMe}>
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me">Запомни меня</label>
        </div>
        <button className={s.button} type="submit">
          Далее
        </button>
      </form>
      <p className={s.paragraph}>
        У вас уже есть аккаунт? Тогда <a href="#">войдите в аккаунт</a>
      </p>
    </div>
  );
};

export default Login;
