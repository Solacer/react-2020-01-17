import React from 'react'
import PropTypes from 'prop-types'
import Review, {ReviewProps} from './review'
import {Col, Row} from 'antd'
import ReviewForm from '../review-form'

function Reviews({reviews = [], restaurantId}) {
  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        {reviews.map(reviewId => (
          <Review id={reviewId} key={reviewId} />
        ))}
        <ReviewForm id={restaurantId} />
      </Col>
    </Row>
  )
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Reviews
