import axios from 'axios'
import qs from 'qs'

import { JUHE_APPKEY } from '@/configs/key'

function axiosPost(options) {
  axios({
    url: options.url,
    method: 'post',
    header: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify({
      ...options.data,
      key: JUHE_APPKEY
    })
  })
  .then((res) => {
    options.success(res.data)
  }).catch((e) => {
    options.error(e)
  })
}

function axiosGet(options) {
  axios(`${options.url}&key=${JUHE_APPKEY}`)
    .then((res) => {
      options.success(res.data)
    }).catch((e) => {
      options.error(e)
    })
}

export {
  axiosGet,
  axiosPost
}