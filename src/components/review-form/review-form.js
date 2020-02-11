import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import cx from 'classnames'

import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/action-creators'

const ReviewForm = ({id}) => {
  let [userName, setUserName] = useState('')
  let [userReview, setUserReview] = useState('')
  let [userRating, setUserRating] = useState(0)
  const resetForm = () => {
    setUserName('')
    setUserReview('')
    setUserRating(0)
  }
  const dispatch = useDispatch()
  const handleSubmit = event => {
    event.preventDefault()
    event.persist()
    dispatch(
      addReview({
        userName: userName,
        review: userReview,
        rating: userRating,
        restaurantId: id,
      })
    )
    resetForm()
  }
  const isPublishEnabled = () => (userName.length > 0 && userReview.length > 0 && userRating > 0);
  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Your name"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              className={cx(styles.inputName)}
            />
            <Input.TextArea
              rows={3}
              value={userReview}
              onChange={e => setUserReview(e.target.value)}
              size="large"
            />
            <div>
              Rating: <Rate onChange={setUserRating} value={userRating} />
            </div>
            <Button htmlType="submit" disabled={!isPublishEnabled()} className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default ReviewForm
