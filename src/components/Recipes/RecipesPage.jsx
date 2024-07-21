import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import './RecipesPage.css';

const recipes = [
  {
    image: require('../../assets/Recipes/Pakhala.jpg'),
    title: 'Pakhala',
    calories: 4228.043058200812,
    ingredients: [
      ' 1/2 cup olive oil',
      '5 cloves garlic, peeled',
      '2 large russet potatoes, peeled and cut into chunks',
      '1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)',
      '3/4 cup white wine',
      '3/4 cup chicken stock',
      '3 tablespoons chopped parsley',
      '1 tablespoon dried oregano',
      'Salt and pepper',
      '1 cup frozen peas, thawed',
    ],
    instructions: [
      '1. Soak 1 cup toor dal for 30 minutes, then pressure cook with diced vegetables (potato, carrot, pumpkin, eggplant, green beans, raw banana), 1 chopped tomato, 1 tsp turmeric powder, salt, and 4 cups water for 3-4 whistles.',
'2. Heat 2 tbsp ghee and add 1 tsp panch phoron, 2 dry red chilies, 1/2 tsp hing, and 1 tsp chopped ginger; sauté until golden.',
'3. Add the tempering to the cooked dal and vegetables, mix well, and optionally add 1/4 cup grated coconut.',
'4. Simmer the mixture on low heat for 5-7 minutes.',
'5. Garnish with fresh coriander leaves and additional grated coconut if desired.',
'6. Serve hot with steamed rice or roti.',
    ],
  },
  // Add other recipes similarly
    {
      image: require('../../assets/Recipes/Dalma.jpg'),
      title: 'Dalma',
      calories: 4228.043058200812,
      ingredients: [
        '1 cup Toor Dal (Arhar Dal)',
'1 Potato, diced',
'1 Carrot, diced',
'1 cup Pumpkin, diced',
'1 Eggplant (Brinjal), diced',
'1/2 cup Green Beans, cut into pieces',
'1 Tomato, chopped',
'1/2 cup Raw Banana, diced',
'1/4 cup Grated Coconut (optional)',
'1 tsp Turmeric Powder',
'Salt to taste',
'4 cups Water',

      ],
    },
];
 
const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
 
  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
<div>
<div className="search-bar">
<input
          type="text"
          placeholder="Search Recipe"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
<button>Search</button>
</div>
<div className="container">
        {filteredRecipes.map((recipe, index) => (
<RecipeCard key={index} {...recipe} />
        ))}
</div>
</div>
  );
};
 
export default RecipesPage;

