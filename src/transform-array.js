module.exports = function transform(arr) {
  let returnArr = []
  // console.log(arr)
  arr.map((item, i) => {
    if (item == '--discard-next') {
      if (arr[i+1] && typeof arr[i+1] == 'number') arr.splice(i + 1, 1)
    }
    else if (item == '--discard-prev') {
      if (arr[i-1] && typeof arr[i-1] == 'number') returnArr.pop()
    }
    else if (item == '--double-next') {
      if (arr[i+1] && typeof arr[i+1] == 'number') returnArr.push(arr[i + 1])
    }
    else if (item == '--double-prev') {
      if (arr[i-1] && typeof arr[i-1] == 'number') returnArr.push(arr[i - 1])
    }
    else returnArr.push(item)
  })
  return returnArr
};
