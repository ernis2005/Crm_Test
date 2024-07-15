import React, { useState } from "react";
import styles from "./page.module.scss";
import { NavLink } from "react-router-dom";

const LoginForget = () => {
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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "rememberMe") {
        newErrors[key] = "поля не можеть быть пустым";
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
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
        <div
          className={`${styles["form-group"]} ${
            errors.laboratory ? styles.error : ""
          }`}
        >
          <label className={styles.label}>
            Моя лаборатория
            <input
              type="text"
              name="laboratory"
              value={formData.laboratory}
              onChange={handleChange}
              placeholder="Моя лаборатория"
              className={`${styles.input} ${
                errors.laboratory ? styles["input-error"] : ""
              }`}
            />
            {errors.laboratory && (
              <span className={styles["error-text"]}>{errors.laboratory}</span>
            )}
          </label>
        </div>
        <div
          className={`${styles["form-group"]} ${
            errors.email ? styles.error : ""
          }`}
        >
          <label className={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите электронную почту"
              className={`${styles.input} ${
                errors.email ? styles["input-error"] : ""
              }`}
            />
            {errors.email && (
              <span className={styles["error-text"]}>{errors.email}</span>
            )}
          </label>
        </div>
        <div
          className={`${styles["form-group"]} ${
            errors.phone ? styles.error : ""
          }`}
        >
          <label className={styles.label}>
            Номер телефона
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Введите номер"
              className={`${styles.input} ${
                errors.phone ? styles["input-error"] : ""
              }`}
            />
            {errors.phone && (
              <span className={styles["error-text"]}>{errors.phone}</span>
            )}
          </label>
        </div>
        <div
          className={`${styles["form-group"]} ${
            errors.password ? styles.error : ""
          }`}
        >
          <label className={styles.label}>
            Пароль
            <div className={styles["password-container"]}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Пароль"
                className={`${styles.input} ${
                  errors.password ? styles["input-error"] : ""
                }`}
              />
              <div
                onClick={togglePasswordVisibility}
                className={styles["toggle-icon"]}
              >
                {showPassword ? "🙈" : "👁️"}
              </div>
            </div>
            {errors.password && (
              <span className={styles["error-text"]}>{errors.password}</span>
            )}
          </label>
        </div>
        <div
          className={`${styles["form-group"]} ${
            errors.confirmPassword ? styles.error : ""
          }`}
        >
          <label className={styles.label}>
            Подтверждение пароля
            <div className={styles["password-container"]}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Подтверждение пароля"
                className={`${styles.input} ${
                  errors.confirmPassword ? styles["input-error"] : ""
                }`}
              />
              <div
                onClick={toggleConfirmPasswordVisibility}
                className={styles["toggle-icon"]}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </div>
            </div>
            {errors.confirmPassword && (
              <span className={styles["error-text"]}>
                {errors.confirmPassword}
              </span>
            )}
          </label>
        </div>
        <div
          className={`${styles["form-group"]} ${
            errors.rememberMe ? styles.error : ""
          }`}
        >
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
          Зарегистрироваться
        </button>
        <p className={styles.paragraph}>
          У вас уже есть аккаунт? Тогда{" "}
          <NavLink to={"/open"}>
            <a href="#">войдите в аккаунт</a>
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default LoginForget;
