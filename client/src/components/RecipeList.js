import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
    return recipes && (
        <div>
            {recipes.map((recipe) => (
                <RecipeCard className="recipe-card" key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;