import React from 'react';
import './homepage.component.scss';

const Homepage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HATS</h1>
          <p className='subtitle'>SHOPNOW</p>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKETS</h1>
          <p className='subtitle'>SHOPNOW</p>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>SNEAKERS</h1>
          <p className='subtitle'>SHOPNOW</p>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMEN</h1>
          <p className='subtitle'>SHOPNOW</p>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>MEN</h1>
          <p className='subtitle'>SHOPNOW</p>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
