//加号点击事件
function plusClick(count) {
  return count + 1
}

//减号点击事件
function minusClick(count) {
  if (count > 1) {
    return count - 1
  }
}

module.exports = {
  plusClick,
  minusClick
}