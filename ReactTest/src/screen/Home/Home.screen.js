import { connect } from 'react-redux';


import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { decreaseAction, increaseAction } from '../../demoSaga/demo'

const HomeScreen = (props) => {
console.log(props.times)
  return (
    <TouchableOpacity onPress={() => props.onIncrement(1)} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'blue' }}>Home Screen</Text>
    </TouchableOpacity>
  );
}

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


const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeContainer;