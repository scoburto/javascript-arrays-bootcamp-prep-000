var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(list,element) {
  var newList = [element,...list];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,element) {
  var newList = list.unshift(element);
  return newList;
}

function addElementToEndOfArray(list,element) {
  var newList = [list,...element];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,element) {
  var newList = list.push(element);
  return newList;
}