import { ALL_RECIPE_FAIL, ALL_RECIPE_REQUEST, ALL_RECIPE_SUCCESS, CLEAR_ERRORS } from "../constants/recipeConstants"

export const recipesReducer = (state = { recipes: [] }, action) => {
    switch (action.type) {
        case ALL_RECIPE_REQUEST:
            return {
                loading: true,
                recipes: []
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