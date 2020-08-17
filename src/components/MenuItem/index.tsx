import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export interface Item {
    image: string;
    label: string;
    route: string;
}

interface MenuItemProps {
    item: Item;
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ item }) => {
  return (
    <li>
        <a href={item.route}>
            <img src={item.image} alt={item.label}/>
            <p>{item.label}</p>
        </a>
    </li>
  );
}

export default MenuItem;