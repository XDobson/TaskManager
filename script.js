// let one = ["apple", "banana", "kiwi"]
// let two = []
// console.log("test");
// for (item in one) {
//     item++
//     two.push("["+item+"] "+one[item-1])
//     item--
//     console.log(item);
// }
// console.log("============");
// console.log(one);
// console.log(two);


string = ["Hey \n Hello", "hi \n How are ya"]
console.log(string);
console.log("======");
string[0] = string[0].replace(/\n/g, '')
console.log(string);