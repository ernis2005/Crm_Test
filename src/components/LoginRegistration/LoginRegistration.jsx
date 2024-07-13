import React, { useState } from "react";
import styles from "./page.module.scss";
const LoginRegistration = () => {
  const [formData, setFormData] = useState({
    laboratory: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles["form-container"]}>
        <div className={styles["form-group"]}>
          <label className={styles.label}>
            Моя лаборатория
            <input
              type="text"
              name="laboratory"
              value={formData.laboratory}
              onChange={handleChange}
              placeholder="Моя лаборатория"
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите электронную почту"
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles.label}>
            Номер телефона
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Введите номер"
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles.label}>
            Пароль
            <div className={styles["password-container"]}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                className={styles.input}
              />
              <div
                onClick={togglePasswordVisibility}
                className={styles["toggle-icon"]}
              >
                {showPassword ? "🙈" : "👁️"}
              </div>
            </div>
          </label>
        </div>
        <div className={styles["form-group"]}>
          <label className={styles.label}>
            Подтверждение пароля
            <div className={styles["password-container"]}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Подтверждение пароля"
                className={styles.input}
              />
              <div
                onClick={toggleConfirmPasswordVisibility}
                className={styles["toggle-icon"]}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </div>
            </div>
          </label>
        </div>

        <div className={styles["form-group"]}>
          <label className={styles.checkbox}>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <span className={styles["checkbox-label"]}>Запомни меня</span>
          </label>
        </div>
        <button type="submit" className={styles.button}>
          Войти
        </button>
        <p>
          У вас уже есть аккаунт? Тогда
          <a href="/">войдите в аккаунт</a>
        </p>
      </form>
    </div>
  );
};

export default LoginRegistration;
