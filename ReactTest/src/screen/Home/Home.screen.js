import { connect } from 'react-redux'
import {
  compose,
  withHandlers
} from 'recompose'

import { getRandomUser } from '../../redux/actions/getRandomUser.action'

import HomeView from './Home.view'

const handlers = {
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  users: state.users.users,
  isConnected: state.network.isConnected
})

const mapDispatchToProps = (dispatch) => ({
  getRandomUser: (type = '') => dispatch(getRandomUser(type))
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers(handlers)
)(HomeView)