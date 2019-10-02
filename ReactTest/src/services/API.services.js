import axios from 'axios'
// import { defaultTo, pluck, compose, pathOr } from 'ramda'
// import { isNonEmptyString } from 'ramda-adjunct'

import constants from '../constants'


const requestConfig = {
  baseURL: constants.BASE_URL,
  timeout: 30000, // 30s
}

// const transformError = (e) => {
//   // console.log('ERROR API NOW =', e)
//   const getErrors = () => {
//     if (!e.response || e.code === 'ECONNABORTED') {
//       return ['TIMED_OUT']
//     }

//     return compose(
//       pluck('code'),
//       pathOr([{ code: 'INVALID_FORMAT' }], ['response', 'data', 'errors'])
//     )(e)
//   }
//   const newError = {
//     ...e,
//     response: {
//       data: getErrors()
//     }
//   }

//   return Promise.reject(newError)
// }

const request = axios.create(requestConfig)


export default request