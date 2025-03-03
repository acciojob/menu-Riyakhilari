import React, { useState } from "react";

const MENU_DATA = [
  { id: 1, title: "Buttermilk Pancakes", category: "breakfast", price: 15.99, img: "./images/item-1.jpeg", desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed.` },
  { id: 2, title: "Diner Double", category: "lunch", price: 13.99, img: "./images/item-2.jpeg", desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica.` },
  { id: 3, title: "Godzilla Milkshake", category: "shakes", price: 6.99, img: "./images/item-3.jpeg", desc: `Kombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out.` },
  { id: 4, title: "Country Delight", category: "breakfast", price: 20.99, img: "./images/item-4.jpeg", desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch.` },
  { id: 5, title: "Egg Attack", category: "lunch", price: 22.99, img: "./images/item-5.jpeg", desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table.` },
  { id: 6, title: "Oreo Dream", category: "shakes", price: 18.99, img: "./images/item-6.jpeg", desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone.` },
  { id: 7, title: "Bacon Overflow", category: "breakfast", price: 8.99, img: "./images/item-7.jpeg", desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge.` },
  { id: 8, title: "American Classic", category: "lunch", price: 12.99, img: "./images/item-8.jpeg", desc: `Tumblr kickstarter thundercats migas everyday carry squid.` },
  { id: 9, title: "Quarantine Buddy", category: "shakes", price: 16.99, img: "./images/item-9.jpeg", desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af.` },
];

const Menu = () => {
  const [list, setList] = useState(MENU_DATA);

  const onFilter = (category) => {
    if (category === "all") {
      setList(MENU_DATA);
    } else {
      const matches = MENU_DATA.filter((item) => item.category === category);
      setList(matches);
    }
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>

      <div>
        <button id="filter-btn-all" data-test-id="filter-all" onClick={() => onFilter("all")}>All</button>
        <button id="filter-btn-breakfast" data-test-id="filter-breakfast" onClick={() => onFilter("breakfast")}>Breakfast</button>
        <button id="filter-btn-lunch" data-test-id="filter-lunch" onClick={() => onFilter("lunch")}>Lunch</button>
        <button id="filter-btn-shakes" data-test-id="filter-shakes" onClick={() => onFilter("shakes")}>Shakes</button>
      </div>

      <div>
        {list.map((item) => (
          <div key={item.id} data-test-id={`menu-item-${item.category}`}>
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <div>
              <div>
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
              <div>{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
