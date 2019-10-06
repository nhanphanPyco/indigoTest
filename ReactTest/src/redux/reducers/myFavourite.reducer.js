import ACTION_TYPE from '../constants'


const myFavourite = (state = [], action) => {
  switch (action.type) {

    case ACTION_TYPE.ADD_MY_FAVOURITE:
      return [
        ...state,
        action.payload
      ]

    default:
      return state;
  }
}

export default myFavourite