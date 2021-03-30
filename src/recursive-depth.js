module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const res = arr.reduce((depth, item) => {
      if (item.map) {
        const req = this.calculateDepth(item)
        if (!depth.curr) {
          depth.curr = true
          depth.count += req
          console.log('first ' + item + ' ' + req)
        } else {
          console.log('next ' + item + ' ' + req)
          depth.count = req > depth.count - 1 ? req : depth.count
        }
      }
      return depth
    }, {
      count: 1,
      curr: false
    })
    return res.count
  }
};