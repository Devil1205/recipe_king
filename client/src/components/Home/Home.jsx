import React, { useEffect } from 'react';
import './Home.css';
import RecipeCard from './RecipeCard';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions/recipeAction';
import Loader from '../layout/Loader/Loader';

function Home() {

  const clipText = (text)=>text.slice(0,40)+"...";

  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, [])


  return (
    loading || !recipes ? <Loader /> :
      <div className='homeContainer'>
        <h2 className='text-2xl font-bold sm:text-4xl text-center underline underline-offset-[10px] p-8'>Featured Recipes</h2>
        <div className='recipes grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 p-5 gap-8'>
          {/* 
          <a href="/" target='_blank'><RecipeCard img={"https://img.spoonacular.com/recipes/782585-312x231.jpg"} title={"Chilli Paneer"} desc={"You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about"} /></a> */}
          {
            recipes.map((elem,ind)=>{
              return (
                <a href="/" target='_blank' key={ind}><RecipeCard img={elem.image} title={elem.title} desc={clipText(elem.summary)} /></a>
              )
            })
          }

        </div>
      </div>
  )
}

export default Home