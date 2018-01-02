var arr = [12, 7, 3, 8, 5, 11, 16, 2, 19];
var arrSorted = [];

function isSort(arr) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] < arr[i+1]) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}

function sort(arr) {
  while (isSort(arr) === false) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] < arr[i+1]) {
        var arrSorted[i] = arr[i+1];
        var arrSorted[i+1] = arr[i];
      } else {
        var arrSorted[i] = arr[i];
      }
    }
  }
}

function main() {
  sort(arr);
  console.log(arr);
  console.log(arrSorted);
}

main();