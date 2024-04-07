import React, { useEffect, useState } from 'react';
import './Home.css';
import RecipeCard from './RecipeCard';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../actions/recipeAction';
import Loader from '../layout/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import MetaData from '../layout/MetaData';

function Home() {

  const clipText = (text)=>text.slice(0,40)+"...";

  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector(state => state.recipes);
  let [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(0);

  const prevPageHandle = ()=>{
    setCurrPage(elem=>elem-1);
  }

  const nextPageHandle = ()=>{
    setCurrPage(elem=>elem+1);
  }

  useEffect(() => {
    dispatch(getRecipes(searchParams.get("query"), currPage*10));
  }, [currPage, searchParams])


  return (
    loading || !recipes ? <Loader /> :
      <div className='homeContainer'>
        <MetaData title={"RecipeKing - Variety of recipes, easy to cook & much more"} />
        <h2 className='text-2xl font-bold sm:text-4xl text-center underline underline-offset-[10px] p-8'>Featured Recipes</h2>
        <div className='recipes grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 p-5 gap-8'>
          {/* 
          <a href="/" target='_blank'><RecipeCard img={"https://img.spoonacular.com/recipes/782585-312x231.jpg"} title={"Chilli Paneer"} desc={"You can never have too many middl eastern recipes, so give Hummus and Za'atar a try. This recipe serves 4. One portion of this dish contains about"} /></a> */}
          {
            recipes.results.map((elem,ind)=>{
              return (
                <a href={`/#/${elem.id}`} target='_blank' key={ind}><RecipeCard img={elem.image} title={elem.title} desc={clipText(elem.summary)} /></a>
              )
            })
          }

        </div>
        <div className="pageButtons space-x-4 my-4 m-auto w-fit">
          <button className='px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded disabled:cursor-not-allowed disabled:bg-gray-300' onClick={prevPageHandle} disabled={currPage===0}>Prev</button>
          <button className='px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded disabled:cursor-not-allowed disabled:bg-gray-300' onClick={nextPageHandle} disabled={Math.ceil(35/10)===currPage+1}>Next</button>
        </div>
      </div>
  )
}

export default Home