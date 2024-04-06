import axios from 'axios';
import { ALL_RECIPE_FAIL, ALL_RECIPE_REQUEST, ALL_RECIPE_SUCCESS, CLEAR_ERRORS } from '../constants/recipeConstants';

export const getRecipes = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_RECIPE_REQUEST });

        let link = `https://api.spoonacular.com/recipes/complexSearch?apiKey=96b86a98c1df4878ae7c5628213fdb29&addRecipeInformation=true`;
        // link="";

        const { data } = await axios.get(link);
        dispatch({
            type: ALL_RECIPE_SUCCESS,
            payload: data.results
        })
    } catch (error) {
        dispatch({
            type: ALL_RECIPE_FAIL,
            payload: error.response.data.message
        });
    }

}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
}