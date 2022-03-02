/** @format */

import React from "react";

import "./SpecialMenu.css";
import { data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='menu that fits your palette' />
      <h1 className='headtext__cormorant'>today's delicacies</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_drinks flex__center'>
        <p className='app__specialMenu-menu_heading'>Drinks</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine, i) => (
            <MenuItem
              key={wine.title + i}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_beverage flex__center'>
        <p className='app__specialMenu-menu_heading'>Beverages</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, i) => (
            <MenuItem
              key={cocktail.title + i}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: "15px" }}>
      <button type='button' className='custom__button'>
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
