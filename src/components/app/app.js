import React, {Component} from 'react'
import Restaurants from '../restaurants'
import {Layout} from 'antd'
import Header from '../header'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {
    restaurants: PropTypes.array,
  }

  static defaultProps = {
    restaurants: [],
  }

  render() {
    const {restaurants} = this.props
    return (
      <div>
        <Layout>
          <Header />
          <Layout.Content>
            <Restaurants restaurants={restaurants} />
          </Layout.Content>
        </Layout>
      </div>
    )
  }
}

export default App
