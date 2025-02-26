import React from "react";

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((menuItem) => {
        const { id, title, price, img } = menuItem;
        return (
          <article key={id}>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <p>${price}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
