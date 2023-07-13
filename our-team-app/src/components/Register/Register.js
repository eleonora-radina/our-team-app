import { useState, useEffect } from "react";
import './register.css'

function Register() {

  const [passwordType, setPasswordType] = useState("password");
  const [passwordRepeatType, setPasswordRepeatType] = useState("password");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [errorPasswordRepeat, setErrorPasswordRepeat] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const toggle = (e, state, setState) => {
    e.preventDefault();
    if (state === "password") {
      setState("text");
      return;
    }
    setState("password");
  };

  function handleNameChange(e) {
    setName(e.target.value);
    if (e.target.validity) {
      e.target.validity.patternMismatch
        ? setErrorName(`Имя должно содержать только буквы, пробел или дефис`)
        : setErrorName(e.target.validationMessage);
    } else {
      setErrorName(null);
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (e.target.validity) {
      e.target.validity.patternMismatch
        ? setErrorEmail(`Введите данные в указанном формате: info@ya.ru`)
        : setErrorEmail(e.target.validationMessage);
    } else {
      setErrorEmail(null);
    }
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (e.target.validity) {
      setErrorPassword(e.target.validationMessage);
    } else {
      setErrorPassword(null);
    }
  }

  function handlePasswordRepeatChange(e) {
    setPasswordRepeat(e.target.value);

    if (password !== e.target.value) {
      setErrorPasswordRepeat(`Пароли не совпадают`)
    } else {
      if (e.target.validity) {
        setErrorPasswordRepeat(e.target.validationMessage);
      } else {
        setErrorPasswordRepeat(null);
      }
    }
  }

  useEffect(() => {
    (errorName === "" && errorEmail === "" && errorPassword === "" && errorPasswordRepeat === "" && password === passwordRepeat)
      ? setIsValid(true)
      : setIsValid(false);
  }, [errorName, errorEmail, errorPassword, errorPasswordRepeat, password, passwordRepeat])

  function handleSubmit(e) {
    e.preventDefault();
    //props.onRegister({ email, password });
  }

  return (
    <div className='register'>
      <h1 className='register__title'>Регистрация</h1>
      <form className='register__form' name='register-form' onSubmit={handleSubmit} noValidate>
        <label className='register__form-label'>
          Имя
          <input
            className={`register__form-input ${errorName ? 'register__form-input_error' : ''}`}
            type='text'
            name='name'
            required
            autoComplete="off"
            minLength="2"
            maxLength="30"
            id='name-input'
            pattern="^[a-zA-Zа-яёА-ЯЁ\s\-]*$"
            onChange={handleNameChange}
          />
          <span className="register__form-error">{errorName}</span>
        </label>
        <label className='register__form-label'>
          Электронная почта
          <input
            className={`register__form-input ${errorEmail ? 'register__form-input_error' : ''}`}
            type='email'
            name='email'
            required
            autoComplete="off"
            id='email-input'
            pattern="(^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$)"
            onChange={handleEmailChange}
          />
          <span className="register__form-error">{errorEmail}</span>
        </label>

        <div className='register__password'>
          <label className='register__form-label'>
            Пароль
            <input
              className={`register__form-input register__form-input_password ${errorPassword ? 'register__form-input_error' : ''}`}
              type={passwordType}
              name='password'
              required
              autoComplete="off"
              id='password-input'
              onChange={handlePasswordChange}
            />
            <span className="register__form-error">{errorPassword}</span>
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
              className={`register__form-input register__form-input_password ${errorPassword ? 'register__form-input_error' : ''}`}
              type={passwordRepeatType}
              name='repeat-password'
              required
              autoComplete="off"
              id='repeat-password-input'
              onChange={handlePasswordRepeatChange}
            />
            <span className="register__form-error">{errorPasswordRepeat}</span>
          </label>
          <button
            className={`register__password-toggler ${passwordRepeatType === "text" ? 'register__password-toggler_visible' : ''}`}
            onClick={e => toggle(e, passwordRepeatType, setPasswordRepeatType)}
          />
        </div>

        <button
          className={`register__form-button ${isValid ? 'register__form-button_valid' : ''}`}
          disabled={!isValid}
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
