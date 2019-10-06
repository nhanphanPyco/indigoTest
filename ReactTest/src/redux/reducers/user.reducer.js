import ACTION_TYPE from '../constants'

const initialState = {
  users: [],
  loading: false,
  error: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_RANDOM_USER:
      return {
        ...state,
        loading: true
      };
      
    case ACTION_TYPE.GET_RANDOM_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case ACTION_TYPE.GET_RANDOM_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
}

export default user