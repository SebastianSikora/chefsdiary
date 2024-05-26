import React, { useCallback, useEffect } from 'react';
import { RecipeContext } from '../Context/RecipeContext';
import { get } from '../api/api';

export const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    
    const fetchRecipes = useCallback(async () => {
        setLoading(true);
        try {
            const data = await get('/recipe/list');
            setRecipes(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);
    
    return (
        <RecipeContext.Provider value={{ recipes, loading, error, fetchRecipes }}>
            {children}
        </RecipeContext.Provider>
    );
};