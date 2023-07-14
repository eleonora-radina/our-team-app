import { Link } from 'react-router-dom';
import './notFoundPage.css';

function PageNotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__error">404</h1>
      <h2 className="not-found__title">Страница не найдена</h2>
      <p className="not-found__text">
        Ой, здесь ничего нет
      </p>
      <Link className="not-found__button" to="/">На главную</Link>
    </div>
  )
}

export default PageNotFound; 