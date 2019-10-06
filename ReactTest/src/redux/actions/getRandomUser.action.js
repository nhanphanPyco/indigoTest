import ACTION_TYPE from '../constants'


const getRandomUser = payload => ({ 
  type: ACTION_TYPE.GET_RANDOM_USER,
  payload
 })

const getRandomUserSuccess = payload => ({
  type: ACTION_TYPE.GET_RANDOM_USER_SUCCESS,
  payload
})

const AddUserMyFavouriteSuccess = payload => ({
  type: ACTION_TYPE.ADD_MY_FAVOURITE,
  payload
})

const getRandomUserFailed = payload => ({
  type: ACTION_TYPE.GET_RANDOM_USER_FAILED,
  payload
})

export { getRandomUser, getRandomUserSuccess, AddUserMyFavouriteSuccess, getRandomUserFailed }