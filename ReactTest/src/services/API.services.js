import axios from 'axios'
import {
  prop,
  path,
  assoc,
  compose,
  replace as _replace,
  pluck,
  pathOr
} from 'ramda'
import { isString } from 'ramda-adjunct'


import constants from '../constants'


const requestConfig = {
  baseURL: constants.BASE_URL,
  timeout: 30000, // 30s
}

const transformResponse = (response) => {
  const data = prop('data')(response)
  const serverDateTime = path(['headers', 'date'], response)

  if (isString(data)) {
    return {
      data,
      serverDateTime
    }
  }

  return assoc('serverDateTime', serverDateTime, data)
}

const transformError = (e) => {

  const getErrors = () => {
    if (!e.response || e.code === 'ECONNABORTED') {
      return ['TIMED_OUT']
    }

    return compose(
      pluck('code'),
      pathOr([{ code: 'INVALID_FORMAT' }], ['response', 'data', 'errors'])
    )(e)
  }
  const newError = {
    ...e,
    response: {
      data: getErrors()
    }
  }

  return Promise.reject(newError)
}


const request = axios.create(requestConfig)

request.interceptors.response.use(transformResponse, transformError)

export default request