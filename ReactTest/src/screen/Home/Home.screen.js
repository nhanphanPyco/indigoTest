import React from 'react'
import { connect } from 'react-redux'
import {
  compose,
  withHandlers
} from 'recompose'

import { getRandomUser } from '../../redux/actions/getRandomUser.action'


import HomeView from './Home.view'


const handlers = {
  // TRIGGER_TABS: triggerTabsBottom
}

const mapStateToProps = (state) => {
  console.log('STATE: ', state);
  return {
    loading: state.users.loading,
    users: state.users.users
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
  withHandlers(handlers)
)(HomeView)