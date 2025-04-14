import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FoodContext = createContext();

function GlobalState({ children }) {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recipes, setRecipe] = useState([]);
  const [Favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const navigate = useNavigate();

  function handleFav(recipe) {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === recipe.id)
        ? prev.filter((fav) => fav.id !== recipe.id)
        : [...prev, recipe]
    );
  }

  async function fetchData() {
    const apikey = 'da54fd0fff03400787de18763e64864a';
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apikey}&ingredients=${search}`
      );
      const data = await response.json();

      if (Array.isArray(data)) {
        setRecipe(data);
        navigate('/');
      } else {
        setRecipe([]);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  async function RecipeDetails(id) {
    const apikey = 'da54fd0fff03400787de18763e64864a';
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apikey}`
      );
      const data = await response.json();
  
      if (data && data.id) {
        setSelectedRecipe(data); // Store the details here
      } else {
        setSelectedRecipe(null);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }
  
  function handleDeleteFavorites(recipe) {
    setFavorites((prev) => prev.filter((fav) => fav.id !== recipe.id));
  }

  return (
    <FoodContext.Provider
      value={{
        loading,
        search,
        setSearch,
        fetchData,
        recipes,
        Favorites,
        setFavorites,
        handleFav,
        RecipeDetails,
        selectedRecipe,
        handleDeleteFavorites,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export default GlobalState;
