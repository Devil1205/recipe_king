import React, { useEffect } from 'react';
import './RecipeDetails.css';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../../actions/recipeAction';
import Loader from '../layout/Loader/Loader';
import MetaData from '../layout/MetaData';
import {useAlert} from 'react-alert';

function RecipeDetails() {

  const dispatch = useDispatch();
  const { recipe, loading, error } = useSelector(state => state.recipeDetails);
  const params = useParams();
  const alert= useAlert();

  useEffect(() => {
    dispatch(getRecipeDetails(params.id));
    if(error)
    {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [])


  return (
    loading || !recipe ? <Loader /> :
      <div className='recipeDetailsContainer w-fit m-auto px-5'>
        <MetaData title={`RecipeKing - ${recipe.title}`} />
        <h2 className='text-3xl font-bold'>{recipe.title}</h2>
        <div className='flex flex-col lg:flex-row my-2'>
          <img src={recipe.image} alt={recipe.title} className='max-w-full my-1' />
          <div className='text-lg font-[500] space-y-2 lg:px-5 w-fit'>
            <div><MDBIcon fas icon="clock" className='text-green-500 me-2' />{`Prep Time: ${recipe.preparationMinutes}min`}</div>
            <div><MDBIcon fas icon="stopwatch" style={{ fontSize: "22px" }} className='text-green-500 me-[7px]' />{`Cooking Time: ${recipe.readyInMinutes}min`}</div>
            <div><MDBIcon fas icon="money-bill-alt" className='text-green-500 me-[7px]' />{` Price Per Serve: ₹${recipe.pricePerServing}`}</div>
            <div><MDBIcon fas icon="medkit" className='text-green-500 me-2' />{`Health Count: ${recipe.healthScore}`}</div>
            <div className='text-gray-600 text-md font-normal'>
              <h3 className='text-black text-2xl font-[500]'>Summary:</h3>
              <p className='break-all'>{recipe.summary}</p>
            </div>
          </div>
        </div>

        <div className='ingrediants py-4'>
          <div className='flex items-center space-x-5 pb-2'>
            <h2 className='text-2xl font-bold'>Ingrediants</h2>
            <h2 className='text-lg text-gray-500'>{recipe.servings} serving</h2>
          </div>
          <div className='text-lg font-[400] px-1 grid grid-cols-1 sm:grid-cols-2 max-w-fit gap-x-12 gap-y-1'>
            {
              recipe.extendedIngredients.map((elem, ind) => {
                return (
                  <div key={ind}>{`- ${elem.original}`}</div>
                )
              })
            }
          </div>
        </div>

        <div className='instructions py-4 text-lg'>
          <h3 className='text-2xl font-bold pb-2'>Instructions</h3>
          {
            recipe.analyzedInstructions[0].steps.map((elem, ind) => {
              return (
                <p key={ind}>{`${elem.number} ${elem.step}`}</p>
              )
            })
          }
        </div>

      </div>
  )
}

export default RecipeDetails