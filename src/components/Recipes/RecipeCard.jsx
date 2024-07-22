import React from 'react';
import './RecipeCard.css';
 
const RecipeCard = ({ image, title, ingredients,instructions }) => {
  return (
<div className="card">
<img src={image} alt={title} className="card-image" />
<div className="card-content">
<h3>{title}</h3>

<h4>Ingredients:</h4>
<ul>
  
          {ingredients.map((ingredient, index) => (
<li key={index}>{ingredient}</li>
          ))}
</ul>

<h4>Instructions:</h4>
<ul>
  
          {ingredients.map((instructions, index) => (
<li key={index}>{instructions}</li>
          ))}
</ul>
</div>
</div>
  );
};
 
export default RecipeCard;