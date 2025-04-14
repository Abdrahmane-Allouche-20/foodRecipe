import React, { useContext, useState } from "react";
import { FoodContext } from "../context/context";

import { Close, notebook, trash } from "../assets/images";


function Recipes({ recipe }) {
  const {
    handleFav,
    Favorites,
    RecipeDetails,
    selectedRecipe,
  } = useContext(FoodContext);

  const isFavorite = Favorites.some((fav) => fav.id === recipe.id);
  const [showDetails, setShowDetails] = useState(false);
 
  const handleRecipeInfo = async (id) => {
    setShowDetails(true);
    await RecipeDetails(id);
  };
  console.log(selectedRecipe)
const glass = ' backdrop-blur-lg border border-white/20 rounded-xl p-2 shadow-lg'
  return (
    <>
    <div className="col-span-1 ">
      <div className={`p-2 md:p-3  rounded-2xl border-2 bg-green-300/20 ${glass}`}>
        <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-white mb-4">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover hover:scale-110 tansform duration-300"
          />
        </div>
        
          <h1 className="truncate font-black text-white text-sm md:text-base">
            {recipe.title}
          </h1>
    
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => handleRecipeInfo(recipe.id)}
            className="group/button  relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-green-400/40 backdrop-blur-lg px-4 py-1.5 md:px-6 md:py-2 text-sm md:text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-green-900/60 border-2"
          >
            <span>More Details</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </div>
      </div>

      
    </div>
    {showDetails && selectedRecipe && (
      <div className="fixed top-0 left-0 z-50 w-full h-full bg-black/80  ">
        <div className="relative top-0 left-0 z-50 w-full h-screen flex items-center justify-center">
        <div className="relative w-full h-[90vh] overflow-y-scroll max-w-4xl bg-gradient-to-r from-blue-200 to-cyan-200 rounded-2xl border-2 border-cyan-900 shadow-xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => setShowDetails(false)}
          className="absolute top-4 right-4 "
        >
          <img src={Close} alt="close" className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
        </button>
    
        {/* Modal Content */}
        <div className="p-4 md:p-6  ">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-36 h-36 md:w-44 md:h-44 border-2 border-green-900 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={selectedRecipe.image}
                alt={selectedRecipe.title}
                className="object-cover w-full h-full"
              />
            </div>
    
            <div className="flex flex-col gap-2">
              <h1 className="font-black text-sm sm:text-lg ">
                Title: {selectedRecipe.title}
              </h1>
              <h2 className="font-black text-s sm:text-base ">
                Cuisine: {selectedRecipe.cuisines[0] || "Unknown"}
              </h2>
              <p className="text-sm ">
                <strong>Ready in:</strong> {selectedRecipe.readyInMinutes} minutes
              </p>
              <p className="text-sm ">
                <strong>Servings:</strong> {selectedRecipe.servings}
              </p>
            </div>
          </div>
    
          {/* Summary */}
          <div className="mt-6">
            <h2 className="font-bold text-base md:text-lg mb-2">Summary</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedRecipe.summary?.replace(/<[^>]+>/g, "")}
            </p>
          </div>
    
          {/* Favorite Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => handleFav(selectedRecipe)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg  bg-teal-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-green-400 transition-all duration-300"
            >
              <img
                src={isFavorite ? trash : notebook}
                alt="icon"
                className="w-6 h-6 md:w-8 md:h-8"
              />
              {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
            </button>
          </div>
        </div>
      </div>
        </div>
      
    </div>
    
    )}
    </>
  );
}

export default Recipes;
