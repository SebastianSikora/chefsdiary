import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Recipes from './Pages/Recipes';
import { RecipeProvider } from './Providers/RecipeProvider';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <RecipeProvider>
          <Recipes />
        </RecipeProvider>
      } />
      {/* Ostatni routes zde */}
    </Routes>
  );
}

export default App;