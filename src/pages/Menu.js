import React from 'react'
import { ProjectList } from '../helpers/ProjectList';
import MenuItem from '../components/MenuItem';

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>My Projects</h1>
        <div className='menuList'>
            {ProjectList.map((menuItem, key) => {
                return ( 
                <MenuItem 
                    key = {key}
                    image = {menuItem.image} 
                    name = {menuItem.name} 
                    description = {menuItem.description}
                />
                );
            })}
        </div>
    </div>
  );
}

export default Menu