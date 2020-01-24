import React from 'react'
import Menu from './menu'
import Reviews from './reviews'

const Restaurant = props => {
  return [
    <Reviews restaurant={props.activeRestaurant} />,
    <Menu restaurant={props.activeRestaurant} />,
  ]
}

export default Restaurant
