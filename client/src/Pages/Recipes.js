import React, { useEffect } from 'react';
import { RecipeContext } from '../Context/RecipeContext';
import RecipeList from '../components/RecipeList';

const Recipes = () => {
    const { recipes, loading, error, fetchRecipes } = React.useContext(RecipeContext);
    
    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return recipes && (
        <RecipeList recipes={recipes} />
    );
};

export default Recipes;