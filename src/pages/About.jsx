import React, { useState } from "react";

import {RECIPE,signup,magic,creativity} from '../assets/images'
function About() {
  const [showContact, setShowContact] = useState(false); // Initialize with false

  function handleShowContact() {
    setShowContact(true);
  }

  return (
    <div>
      <div className="w-full p-3 my-4 ">
        

        <div >
          <h1 className="text-green-500 font-black border-b border-green-500 pb-2 w-fit text-xl sm:text-3xl mt-3  ">
            About Us
          </h1>
          <p className="lg:max-w-5xl mx-auto mt-3 text-xs sm:text-lg  font-semibold leading-5 md:leading-8 text-white">
            We’re thrilled to have you here and excited to share our love for
            food with you. Our journey started with a simple passion for cooking
            and a desire to make delicious recipes accessible to everyone.
            Whether you’re a seasoned chef or just starting your culinary
            adventure, we’re here to inspire and guide you with a variety of
            mouthwatering recipes and helpful cooking tips.
          </p>
        </div>

        <div className="mt-10 ">
        <h1 className="text-green-500 font-black border-b border-green-500 pb-2 w-fit text-xl sm:text-3xl mt-3  ">
        What We Offer
          </h1>
          
          <p className=" mt-3  max-w-5xl mx-auto text-xs md:text-lg lg:text-xl font-bold  text-yellow-200">
            We believe that cooking should be fun and enjoyable. That’s why we
            offer:
          </p>
          <ul className="flex flex-col gap-4 mt-5 max-w-4xl mx-auto">
            <li>
              <img
                src={RECIPE}
                className="w-5 h-5 mt-1 md:mt-0 md:w-6 md:h-6 float-left mr-2"
                alt="recipe"
              />
              <span className="font-black text-green-600  text-sm sm:text-lg ">
                Delicious Recipes:
              </span>
              <span className="text-white  text-sm sm:text-base font-semibold">
                From quick weeknight dinners to impressive holiday feasts, we’ve
                got you covered with recipes that are both easy to follow and
                packed with flavor.
              </span>
            </li>
            <li>
              <img
                src={magic}
                className="w-5 h-5 mt-1 md:mt-0 md:w-6 md:h-6 float-left mr-2"
                alt="magic"
              />
              <span className="font-black text-green-600  text-sm sm:text-lg">
                Cooking Tips and :
              </span>

              <span className="text-white text-sm sm:text-base font-semibold">
                Learn new skills and tricks to elevate your cooking game and
                make meal prep a breeze.
              </span>
            </li>
            <li>
              <img
                src={creativity}
                className="w-5 h-5 mt-1 md:mt-0 md:w-6 md:h-6 float-left mr-2"
                alt="inspiration"
              />
              <span className="font-black text-green-600  text-sm sm:text-lg">
                Foodie Inspiration:
              </span>
              <span className="text-white text-xs mtext-sm sm:text-base font-semibold">
                Discover new ingredients, flavors, and culinary trends that will
                ignite your creativity in the kitchen.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-10 ">
        <h1 className="text-green-500 font-black border-b border-green-500 pb-2 w-fit text-xl sm:text-3xl mt-3  ">
        Our Mission
          </h1>
          
          <p className="max-w-5xl mx-auto mt-3  text-xs sm:text-lg  font-bold leading-6 lg:leading-8 text-white">
            Our mission is to make cooking an enjoyable experience for everyone.
            We aim to provide you with high-quality recipes and valuable
            resources that make meal planning and preparation a joy, not a
            chore. We’re passionate about bringing people together through the
            love of food and helping you create memorable meals for you and your
            loved ones.
          </p>
        </div>

       
      </div>

     
    </div>
  );
}

export default About;
