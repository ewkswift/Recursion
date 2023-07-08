// const flatten = (arr) => {

//     let temp = []
//      for (let item of arr) {
//          if (Array.isArray(item)) {
//             temp = [...temp, ...flatten(item)]
//          } else {
//             temp = [...temp, item]
//          }

//     }
//     return temp
// }
// console.log(
//     flatten(arr)
// );

let nestedArray = [[[['sardor', 'daler', 'emin']], ['ilhome'], [['dilshod', 'eldor', 'farhod']], ['gulchapchak', 'haydar', 'ilhom']]];

function flattenArray(arr) {
  let flattenedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(flattenArray(arr[i]));
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}
let flattened = flattenArray(nestedArray);
console.log(flattened);
