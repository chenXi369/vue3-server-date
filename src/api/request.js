import { axiosPost } from "@/libs/http"

function getDayData(data) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/day',
      data: { 'date': data },
      success(data) {
        resolve(data)
      },
      error(data) {
        reject(data)
      }
    })
  })
}

function getMonthData(month) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/month',
      data: { 
        'year-month': month
      },
      success(data) {
        resolve(data)
      },
      error(data) {
        reject(data)
      }
    })
  })
}

function getYearData(year) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/year',
      data: { year },
      success(data) {
        resolve(data)
      },
      error(data) {
        reject(data)
      }
    })
  })
}

export {
  getDayData,
  getMonthData,
  getYearData
}