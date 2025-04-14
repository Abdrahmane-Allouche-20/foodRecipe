import React, { useContext, useState } from "react";
import { FoodContext } from "../context/context";
import PacmanLoader from "react-spinners/PacmanLoader";

import {food,food1,food2,food3,error,paela} from '../assets/images'
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import Recipes from "./recipes";


function Home() {
  // Define this array just before the return statement (inside the component)
  const cardData = [
    {
      title: "Pasta Caprese",
      ingredients: "pasta / tomato / cheese",
      image: food1,
      imageAlt: "Pasta Caprese Dish",
    },
    {
      title: "Mixed Salad",
      ingredients: "carrots / onions / cucumbers",
      image: food2,
      imageAlt: "Mixed Salad Dish",
    },
    {
      title: "Shrimp Salad",
      ingredients: "shrimp / olive / garlic",
      image: food3,
      imageAlt: "Shrimp Salad Dish",
    },
  ];

  const { recipes, loading, error, } = useContext(FoodContext);

  const glass = ' backdrop-blur-md border border-white/20 rounded-xl p-2 shadow-lg'


  if (error) {
    return (
      <div className="fixed top-0 left-0 h-screen w-full bg-green-500/35 flex justify-center items-center">
        <div className="flex justify-center items-center bg-white p-4">
          <img src={error} alt="Error" className="w-full h-fit" />
        </div>
      </div>
    );
  }

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-9 md:gap-5   ">

      {recipes && recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <Recipes key={index} recipe={recipe} />
        ))
      ) : (
        <div className="col-span-4">
          <div className="flex sm:flex-row  flex-col  items-center justify-center mt-6 lg:mt-10">
            <div>
              <div className={`${glass} bg-yellow-300/10 w-fit  flex justify-center items-center gap-1 text-base   font-black text-white`}>
                Checking For Proxy
                <img
                  src={paela}
                  alt="Paela"
                  loading="lazy"
                  width={35}
                  height={35}

                />
              </div>
              <div>
                <h1 className="my-3 text-2xl sm:text-3xl  lg:text-5xl w-11/12 flex-wrap  font-black sm:leading-[60px] text-white">
                  Best Recipe For You And For Free!
                </h1>
                <p className="capitalize text-gray-100 text-xs sm:text-base  font-bold w-full lg:w-10/12 flex-wrap">
                  This website provides multiple food recipes. You just need to
                  search and it will give you all the details.
                </p>
                <Link to="/About">
                  <button className={`${glass} bg-yellow-300/10 text-center w-fit  text-white text-base font-bold mt-4`}>
                    Bon Appétit
                  </button>
                </Link>
              </div>
            </div>

            <div className="p-3">
              <img src={food} alt="Food" className=" w-4/5  lg:w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mt-16">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`${glass} bg-green-400/10 relative p-6 transition-transform hover:-translate-y-1 hover:shadow-xl duration-300`}
              >
                <div className="w-28 h-28 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-full absolute -top-6 lg:-top-8 -right-3 lg:right-0">
                  <img src={card.image} alt={card.imageAlt} className="w-full" />
                </div>
                <div>
                  <h1 className="text-base md:text-lg lg:text-xl font-bold text-white">
                    {card.title}
                  </h1>
                  <p className="text-sm text-green-200 capitalize my-3">
                    {card.ingredients}
                  </p>
                  <div className="flex justify-between items-center text-white font-bold text-base">
                    <span>2.5K</span>
                    <span>Reviews</span>
                    <span className="flex items-center">
                      4.5 <FaStar className="text-yellow-300 ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default Home;
