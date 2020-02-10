import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialState = normalizedRestaurants.reduce((restaurants, restaurant) => {
  return {
    ...restaurants,
    [restaurant.id]: restaurant,
  }
}, {})

export const restaurantsReducer = (restaurantsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      return {
        ...restaurantsState,
        [action.payload.restaurantId]: {
          ...restaurantsState[action.payload.restaurantId],
          reviews: [
            ...restaurantsState[action.payload.restaurantId].reviews,
            action.payload.id,
          ],
        },
      }
    default:
      return restaurantsState
  }
}
