import { getIconDate } from '@/libs/utils'

export default [
  {
    iconText: getIconDate('Day'),
    tabText: '当天',
    path: '/holiday/day'
  },
  {
    iconText: getIconDate('Month'),
    tabText: '近期',
    path: '/holiday/month'
  },
  {
    iconText: getIconDate('Year'),
    tabText: '当年',
    path: '/holiday/year'
  }
]