var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];
function addElementToBeginningOfArray(list,extra) {
  var newList = [extra,...list];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,extra) {
  list[0]=extra;
  return list;
}