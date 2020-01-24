import React from 'react'
import {Rate} from 'antd'

const Reviews = props => {
  const reviews = props.restaurant.reviews
  const absoluteSumRatingValue = reviews.reduce(
    (accumulator, element, index, array) => {
      return accumulator + element.rating
    },
    0
  )
  const averageRating = absoluteSumRatingValue / reviews.length
  return (
    <div
      style={{
        display: 'inline-block',
        border: '1px solid black',
        padding: '5px',
        margin: '5px',
      }}
    >
      <h3>Reviews</h3>
      <div style={{margin: '5px'}}>
        {<Rate disabled defaultValue={averageRating} />}
      </div>
      {reviews.map(review => {
        return (
          <div key={review.id}>
            <hr />
            <div>Author: {review.user}</div>
            <div>Rate: {review.rating}</div>
            <div>
              Review:
              <p>{review.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Reviews
