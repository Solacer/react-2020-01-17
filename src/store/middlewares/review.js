import {ADD_REVIEW, ADD_USER} from '../common'
import {addReview} from '../action-creators'

function generateId() {
  return `id_${new Date().getTime() * Math.random()}`
}

export const review = store => next => action => {
  if (action.type === ADD_REVIEW) {
    let userId = action.payload.userId
    if (!userId) {
      userId = generateId()
      store.dispatch({
        type: ADD_USER,
        payload: {
          id: userId,
          name: action.payload.userName,
        },
      })
    }
    next({
      ...action,
      payload: {
        ...action.payload,
        id: action.payload.id ? action.payload : generateId(),
        userId,
      },
    })
  } else {
    next(action)
  }
}
