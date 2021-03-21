import React from 'react';
import './menu-item.component.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, linkUrl, size, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <p className='subtitle'>SHOPNOW</p>
    </div>
  </div>
);

export default withRouter(MenuItem);
