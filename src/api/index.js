import {
  getDayData,
  getMonthData,
  getYearData
} from './request'

import {
  mapForChsDate,
  formatChsDate
} from '@/libs/utils'

export default async (store, field, date) => {
  let data = null

  switch (field) {
    case 'Day': 
      data = await getDayData(date)
    break;
    case 'Month': 
      data = await getMonthData(date)
    break;
    case 'Year': 
      data = await getYearData(date)
    break;
    default: 
    break;
  }

  if(data.error_code !== 0) {
    store.commit('setErrorCode', data.error_code)
    return
  }

  let res = null

  switch (field) {
    case 'Day':
      res = data.result.data
      res.date = formatChsDate(res.date, 'day')
      res['year-month'] = formatChsDate(res['year-month'], 'month')
      break;
    case 'Month':
      res = data.result.data.holiday_array
      res = mapForChsDate(res, 'festival')
      break;
    case 'Year':
      res = data.result.data.holiday_list
      res = mapForChsDate(res, 'startday')
      break;
  }

  store.commit('setData', {
    field,
    data: res
  })
}