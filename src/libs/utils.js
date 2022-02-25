function _addZero(value) {
  return value < 10 ? ('0' + value) : value
}

function getIconDate(type) {
  const date = new Date()

  switch (type) {
    case 'day':
      return _addZero(date.getDate().toString())
      break;
    case 'month':
      return _addZero((date.getMonth() + 1).toString())
      break;
    case 'year':
      return date.getFullYear().toString().substr(2)
      break;
    default:
      break;
  }
}

export {
  getIconDate
}