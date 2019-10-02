import React from 'react'
import { connect } from 'react-redux'
import {
  compose,
  withHandlers,
  lifecycle
} from 'recompose'

import { getRandomUser } from '../../redux/actions/getRandomUser.action'

import HomeView from './Home.view'


const handlers = {

}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
  getRandomUser: () => dispatch(getRandomUser())
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers(handlers),
  lifecycle({
    componentWillMount() {
    },
    componentDidMount() {
      this.props.getRandomUser()
    }
  })
)(HomeView)