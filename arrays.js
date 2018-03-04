var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(list,element) {
  var newList = [element,...list];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,extra) {
  var newList = list.unshift(extra);
  return newList;
}

function addElementToEndOfArray(list,extra) {
  var newList = [list,...extra];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,extra) {
  return list.push(extra);
}