import axios from 'axios';
import { ALL_RECIPE_FAIL, ALL_RECIPE_REQUEST, ALL_RECIPE_SUCCESS, CLEAR_ERRORS, RECIPE_DETAILS_FAIL, RECIPE_DETAILS_REQUEST, RECIPE_DETAILS_SUCCESS } from '../constants/recipeConstants';

export const getRecipes = (query="", offset=0) => async (dispatch) => {
    try {
        dispatch({ type: ALL_RECIPE_REQUEST });

        let link = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&addRecipeInformation=true&offset=${offset}${query?"&query="+query:""}`;

        const { data } = await axios.get(link);
        dispatch({
            type: ALL_RECIPE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_RECIPE_FAIL,
            payload: error.response.data.message
        });
    }

}

export const getRecipeDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: RECIPE_DETAILS_REQUEST });

        let link = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`;

        const { data } = await axios.get(link);
        dispatch({
            type: RECIPE_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: RECIPE_DETAILS_FAIL,
            payload: error.response.data.message
        });
    }

}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
}