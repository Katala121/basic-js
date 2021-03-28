module.exports = function getSeason(date) {
  if(!arguments.length) return 'Unable to determine the time of year!'
  date.setDate(10)
  if (!(date instanceof Date)) throw Error
  if (date.getMonth() < 2) return 'winter'
  else if (date.getMonth() < 5) return 'spring'
  else if (date.getMonth() < 8) return 'summer'
  else if (date.getMonth() < 11) return 'autumn'
  else if (date.getMonth() > 10) return 'winter'
};
