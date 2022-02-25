import { getIconDate } from '@/libs/utils'

export default [
  {
    iconText: getIconDate('day'),
    tabText: '当天',
    path: '/'
  },
  {
    iconText: getIconDate('month'),
    tabText: '近期',
    path: '/month'
  },
  {
    iconText: getIconDate('year'),
    tabText: '当年',
    path: '/year'
  }
]