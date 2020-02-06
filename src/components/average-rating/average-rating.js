import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {selectReviewsByIds} from '../../store/selectors'

function AverageRating({reviews}) {
  const rawRating = useMemo(
    () => reviews.reduce((acc, {rating}) => acc + rating, 0) / reviews.length,
    [reviews]
  )

  const normalizedRating = Math.floor(rawRating * 2) / 2
  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: selectReviewsByIds(state, ownProps),
  }
}

export default connect(mapStateToProps)(AverageRating)
