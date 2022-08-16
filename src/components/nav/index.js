import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import './style.css';

function Nav({onClick}) {
  const cn = bem('Nav');

  return (
    <div className={cn()}>
      <span className={cn('link-to-main')} onClick={onClick}>Главная</span>
    </div>
  )
}

Nav.propTypes = {
  onClick: propTypes.func.isRequired
}

export default React.memo(Nav);