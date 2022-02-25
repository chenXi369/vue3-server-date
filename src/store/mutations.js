export default {
  setHeaderTitle(state, routerName) {
    switch (routerName) {
      case 'Day':
        state.headerTitle = '当天信息'
        break;
      case 'Month':
        state.headerTitle = '近期假期'
        break;
      case 'Year':
        state.headerTitle = '当年假期'
        break;
      default:
        state.headerTitle = '当天信息'
        break;
    }
  },

  setMaxLength(state, routerName) {
    switch (routerName) {
      case 'Day':
        state.maxlength = 8
        break;
      case 'Month':
        state.maxlength = 6
        break;
      case 'Year':
        state.maxlength = 4
        break;
      default:
        state.maxlength = 8
        break;
    }
  },
  setPlaceholder(state, routerName) {
    const date = new Date()

    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate()
    
    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day

    switch (routerName) {
      case 'Day':
        state.placeholder = `格式: ${year}${month}${day}`
        break;
      case 'Month':
        state.placeholder = `格式: ${year}${month}`
        break;
      case 'Year':
        state.placeholder = `格式: ${year}`
        break;
      default:
        state.placeholder = `格式: ${year}${month}${day}`
        break;
    }
  }
}