var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];
function addElementToBeginningOfArray(list,extra) {
  var newList = [extra,...list];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,extra) {
  return list.unshift(extra);
}

function addElementToEndOfArray(list,extra) {
  var newList = [list,...extra];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,extra) {
  return list.push(extra);
}