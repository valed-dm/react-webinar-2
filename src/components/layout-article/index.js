import React from 'react';
import propTypes from "prop-types";
import {cn as bem} from '@bem-react/classname';
import numberFormat from '../../utils/numberFormat';
import Nav from '../nav';
import './style.css';


function LayoutArticle({article, addToBasket, onNavigate, children}) {

  console.log('LayoutArticle');

  const cn = bem('LayoutArticle');

  return (
    <div className={cn()}>
      <div>
        <div className={cn('basket-simple')}>
          <Nav onClick={onNavigate}/>
          {children}
        </div>
      </div>
      <div className={cn('full-info')}>
        <ul className={cn('ul')}>
          <li className={cn('li')}>
            <p className={cn('description')}>{article.description}</p>
          </li>
          <li className={cn('li')}>Страна производитель:&nbsp;
            <span className={cn('li-bold')}>{article.maidIn?.title}</span>
          </li>
          <li className={cn('li')}>Категория:&nbsp;
            <span className={cn('li-bold')}>{article.category?.title}</span>
          </li>
          <li className={cn('li')}>Год выпуска:&nbsp;<span
            className={cn('li-bold')}>{article.edition}</span>
          </li>
          <li className={cn('li')}><span
            className={cn('li-bold')}>Цена:{' '}{numberFormat(article.price)}&nbsp;&#8381;</span>
          </li>
        </ul>
        <button className={cn('add-button')} onClick={addToBasket}>Добавить</button>
      </div>
    </div>
  )
}

LayoutArticle.propTypes = {
  article: propTypes.object,
  addToBasket: propTypes.func.isRequired,
  onNavigate: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
};

LayoutArticle.defaultProps = {
  article: {
    description: 'описание товара дорабатывается',
    maidIn: {title: 'данные о стране происхождения уточняются'},
    category: {title: 'данные о категории товара уточняются'},
    edition: 0,
    price: 0
  },
};

export default React.memo(LayoutArticle);