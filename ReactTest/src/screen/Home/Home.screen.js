import { connect } from 'react-redux';

import { decreaseAction, increaseAction } from '../../demoSaga/demo'

import HomeView from './Home.view'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    times: state.counterReducers ? state.counterReducers : 0
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: (step) => {
      dispatch(decreaseAction(step));
    },
    onIncrement: (step) => {
      dispatch(increaseAction(step));
    }
  };
}


const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeView);

export default HomeContainer;