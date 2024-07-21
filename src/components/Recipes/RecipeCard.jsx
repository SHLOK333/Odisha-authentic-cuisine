import React from 'react';
import './RecipeCard.css';
 
const RecipeCard = ({ image, title, ingredients,instructions }) => {
  return (
<div className="card">
<img src={image} alt={title} className="card-image" />
<div className="card-content">
<h3>{title}</h3>

<h4>Ingredients:</h4>
<ol>
  
          {ingredients.map((ingredient, index) => (
<li key={index}>{ingredient}</li>
          ))}
</ol>

<h4>Instructions:</h4>
<ol>
  
          {ingredients.map((instructions, index) => (
<li key={index}>{instructions}</li>
          ))}
</ol>
</div>
</div>
  );
};
 
export default RecipeCard;