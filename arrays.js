var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];
function addElementToBeginningOfArray(list,extra) {
  var newList = list.unshift(extra);
  return newList;
}