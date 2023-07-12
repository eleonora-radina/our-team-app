import { useState } from "react";
import './register.css'

function Register() {

  const [passwordType, setPasswordType] = useState("password");
  const [passwordRepeatType, setPasswordRepeatType] = useState("password");

  const toggle = (e, state, setState) => {
    e.preventDefault();
    if (state === "password") {
      setState("text");
      return;
    }
    setState("password");
  };

  return(
    <div className='register'>
      <h1 className='register__title'>Регистрация</h1>
      <form className='register__form'>
        <label className='register__form-label'>
          Имя
          <input
            className='register__form-input'
            type='text'
            name='name'
            required
            autoComplete="off"
            minLength="2"
            maxLength="30"
            id='name-input'
            pattern="^[a-zA-Zа-яёА-ЯЁ\s\-]*$"
          />
          <span className="register__form-error"></span>
        </label>
        <label className='register__form-label'>
          Электронная почта
          <input
            className='register__form-input'
            type='email'
            name='email'
            required
            autoComplete="off"
            id='email-input'
            pattern="(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$)"
          />
          <span className="register__form-error"></span>
        </label>

        <div className='register__password'>
          <label className='register__form-label'>
            Пароль
            <input
              className='register__form-input register__form-input_password'
              type={passwordType}
              name='password'
              required
              autoComplete="off"
              id='password-input'
            />
            <span className="register__form-error"></span>
          </label>
          <button
            className={`register__password-toggler ${passwordType === "text" ? 'register__password-toggler_visible' : ''}`}
            onClick={e => toggle(e, passwordType, setPasswordType)}
          />
        </div>

        <div className='register__password'>
          <label className='register__form-label'>
            Повторите пароль
            <input
              className='register__form-input register__form-input_password'
              type={passwordRepeatType}
              name='repeat-password'
              required
              autoComplete="off"
              id='repeat-password-input'
            />
            <span className="register__form-error"></span>
          </label>
          <button
            className={`register__password-toggler ${passwordRepeatType === "text" ? 'register__password-toggler_visible' : ''}`}
            onClick={e => toggle(e, passwordRepeatType, setPasswordRepeatType)}
          />
        </div>

        <button
          className={`register__form-button`}
          //disabled={}
          type='submit'
          aria-label='Зарегистрироваться'>
          Зарегистрироваться
        </button>
        
      </form>
      {/* <p className='register__text'>Уже зарегистрированы?
         <Link to="/signin" className='register__link'>Войти</Link> 
      </p> */}
    </div>
  );
}

export default Register;
