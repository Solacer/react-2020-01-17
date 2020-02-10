import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user.name,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...usersState,
        [action.payload.id]: action.payload.name,
      }
    default:
      return usersState
  }
}
