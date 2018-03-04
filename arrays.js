var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningOfArray(list,element) {
  var newList = [element,...list];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,element) {
  return list.unshift(element);
}

function addElementToEndOfArray(list,element) {
  var newList = [list,...element];
  return newList;
}

function destructivelyAddElementToBeginningOfArray(list,element) {
  return list.push(element);
}