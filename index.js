// Part 1

// function sumArray(arr) {
//     let total = 0;
//     for (let i = 0; i<arr.length; i++){
//         total += arr[i];        
//     }
//     return total;
// }
// let numbers = [37, 52, 86, 129];
//         let sum = sumArray(numbers);
//         console.log (sum);

//output: 304 

// const numbers = [37, 52, 86, 129];
// let sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//     }, 0);
//     const average = sum / numbers.length;
//     console.log (average);

//output: 76

// function findLongestString(arr) {
//     let longest = "";
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) {
//             longest = arr[i];
//         }
//     }
//     return longest;
// }
// const strings = ["computer", "monitor", "mouse", "camera"];
// console.log (findLongestString(strings));

//output: computer

// function stringsLength(arr, minLength) {
//     return arr.filter(str => str.length > minLength);
// }
// const strings = ["computer", "monitor", "mouse", "camera"];
// let filteredStrings = stringsLength(strings, 6);
// console.log (filteredStrings);

//output: [ 'computer', 'monitor' ]

// function printNum (n) {
//     if (n <= 0) {
//         return;
//     }
//     printNum (n - 1);
//     console.log(n);
// }
// printNum(7);

//output: 1 2 3 4 5 6 7

//Part 2

// let array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
//              { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//              { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//              { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//              { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
// array.sort((a, b) => a.age - b.age);

// console.log (array);

//output:
// [
//     { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
//     { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
//     { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
//     { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
//     { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
//   ]

// function olderThan50(entry) {
//     return entry.filter(e => e.age > 50);
// };

// console.log (olderThan50(array));

//output: [
//   { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
//   { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
// ]

// const renameKeys = (keysMap, obj) =>
//     Object.keys(obj).reduce((acc, key) => ({
//       ...acc,
//       ...{ [keysMap[key] || key]: obj[key] },
//     }), {});
  
//     let array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
//         { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//         { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//         { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//         { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
  
  
//   const newKeys = { occupation: "job" };
  
//   const newArray = array.map((obj) => renameKeys(newKeys, obj));
  
//   console.log(newArray);

// const change = newArray.map((person) => {
//     return { ...person}; 
// });   for (let i = 0; i < newArray.length; i++) {
//     newArray[i].age++;
// }

// console.log(change);
// console.log(newArray);

//output:
// [
//     { id: '42', name: 'Bruce', job: 'Knight', age: 42 },
//     { id: '48', name: 'Barry', job: 'Runner', age: 26 },
//     { id: '57', name: 'Bob', job: 'Fry Cook', age: 20 },
//     { id: '63', name: 'Blaine', job: 'Quiz Master', age: 59 },
//     { id: '7', name: 'Bilbo', job: 'None', age: 112 }
//   ]

// let newArray = [
//     { id: '42', name: 'Bruce', job: 'Knight', age: 42 },
//     { id: '48', name: 'Barry', job: 'Runner', age: 26 },
//     { id: '57', name: 'Bob', job: 'Fry Cook', age: 20 },
//     { id: '63', name: 'Blaine', job: 'Quiz Master', age: 59 },
//     { id: '7', name: 'Bilbo', job: 'None', age: 112 }
//   ]

// const sumAges = newArray.reduce((sum, person) => sum + person.age, 0);

// const avgAge = sumAges / newArray.length;

// console.log(sumAges);
// console.log(avgAge); 

//output: 259
   //     51.8

//Part 3

// function incrementAge(me) {
//     me.age++;
// }
// let myData = 
//     { firstName: "John", lastName: "Nordloh", age: "50", status: "tired"};

// console.log(myData.age);
// incrementAge(myData);
// console.log(myData.age);

//output: 50
//        51

    // function incrementAge(me) {
    //     me.age++;
    //        let myDataCopy = "";    
              
    //     return myDataCopy;}
    //     let myData = 
    //  {firstName: "John", lastName: "Nordloh", age: "50", status: "tired"};

        
    //     let myDataCopy = incrementAge(myData);
    //     console.log(myData);
    //     console.log(myDataCopy);

//output:  { firstName: 'John', lastName: 'Nordloh', age: 51, status: 'tired' }

let myData = 
    [{ firstName: "John", lastName: "Nordloh", age: "50", status: "tired"}];
    myData.forEach(obj => {
        obj.date = new Date();
    });
    console.log(myData);

//output:    [
//   {
//     firstName: 'John',
//     lastName: 'Nordloh',
//     age: '50',
//     staus: 'tired',
//     date: 2024-10-05T16:13:22.628Z
//   }
// ] 