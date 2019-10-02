import ACTION_TYPE from '../constans'


const getRandomUser = () => ({ type: ACTION_TYPE.GET_RANDOM_USER })

const getRandomUserSuccess = payload => ({
  type: ACTION_TYPE.GET_RANDOM_USER_SUCCESS,
  payload
})

const getRandomUserFailed = payload => ({
  type: ACTION_TYPE.GET_RANDOM_USER_FAILED,
  payload
})

export { getRandomUser, getRandomUserSuccess, getRandomUserFailed }