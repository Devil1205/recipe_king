import { ALL_RECIPE_FAIL, ALL_RECIPE_REQUEST, ALL_RECIPE_SUCCESS, CLEAR_ERRORS, RECIPE_DETAILS_FAIL, RECIPE_DETAILS_REQUEST, RECIPE_DETAILS_SUCCESS } from "../constants/recipeConstants"

export const recipesReducer = (state = { recipes: { results: [] } }, action) => {
    switch (action.type) {
        case ALL_RECIPE_REQUEST:
            return {
                loading: true,
                recipes: {results: []}
            }
        case ALL_RECIPE_SUCCESS:
            return {
                loading: false,
                recipes: action.payload,
            }
        case ALL_RECIPE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const recipeDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECIPE_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case RECIPE_DETAILS_SUCCESS:
            return {
                loading: false,
                recipe: action.payload,
            }
        case RECIPE_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}