import React, {useState} from "react";

function PlantCard({image, name, price}) {
  const [soldOut, setSoldOut] = useState(false);

  function handleToggleSoldOut() {
    setSoldOut((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick={handleToggleSoldOut} >Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleToggleSoldOut} >In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
