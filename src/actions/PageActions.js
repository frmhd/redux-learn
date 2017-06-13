import axios from 'axios'

import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS } from './../constants/constants'

export function getPhotos (url) {
  return function (dispatch) {
    dispatch({
      type: GET_PHOTOS_REQUEST
    })

    return axios({
      url: url,
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
    .then(function (response) {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: response.data
      })
    })
    .catch(function (response) {
      console.log(response.data)
    })
  }
}
