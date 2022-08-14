import React from 'react';
import MenuItem from './MenuItem';

import './MenuList.css';

const MenuList = (props) => {
  return (
    <section className='menu-list'>
        {props.menu.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id} 
            name={item.name}
            src={item.src}
            description={item.description}
            price={item.price}
          />
        ))}
    </section>
  )
}

export default MenuList