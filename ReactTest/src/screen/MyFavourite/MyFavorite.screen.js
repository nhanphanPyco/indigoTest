import { connect } from 'react-redux'
import {
  compose,
  withHandlers
} from 'recompose'


import MyFaVouriteView from './MyFavourite.view'

const handlers = {
}

const mapStateToProps = (state) =>({
  myFavourite: state.myFavourite
})


export default compose(
  connect(mapStateToProps),
  withHandlers(handlers)
)(MyFaVouriteView)