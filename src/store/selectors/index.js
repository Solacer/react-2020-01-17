import {createSelector} from 'reselect'

export const selectId = (state, ownProps) => ownProps.id

export const selectIds = (state, ownProps) => ownProps.ids

export const selectCart = state => state.cart

export const selectRestaurantList = state => Object.values(state.restaurants)

export const selectDishes = state => state.dishes

export const selectReviews = state => state.reviews

export const selectUsers = state => state.users

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => {
    return dishes[id]
  }
)

export const selectReview = createSelector(
  selectReviews,
  selectId,
  selectUsers,
  (reviews, reviewId, users) => {
    return {
      ...reviews[reviewId],
      userName: users[reviews[reviewId].userId],
    }
  }
)

export const selectReviewsByIds = createSelector(
  selectIds,
  selectReviews,
  (ids, reviews) => {
    return ids.reduce((acc, currentId) => {
      return acc.concat([reviews[currentId]])
    }, [])
  }
)

export const selectAmountFromCart = createSelector(
  selectCart,
  selectId,
  (cart, id) => {
    return cart[id] || 0
  }
)

export const selectCartInfo = createSelector(
  selectCart,
  selectRestaurantList,
  (cart, restaurants) => {
    const orderedDishes = restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dish => {
          const amount = cart[dish.id]
          if (amount) {
            const totalDishPrice = amount * dish.price
            result.totalPrice += totalDishPrice
            result.dishes.push({
              dish,
              amount,
              totalDishPrice,
            })
          }
        })
        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )

    return {
      orderedDishes,
    }
  }
)
