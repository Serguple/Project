'use strict';

const obj = {
    name: "mass",
    height: 1024,
    width: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("Test")
    }
}   

// obj.makeTest()

const {border, bg} = obj.colors;

console.log(border, bg);

// for (let key in obj) {

//     if (typeof(obj[key]) == "object") {
//         for (let i in obj[key]) {
//             console.log(`Свойство ${i} имеет значение ${obj[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${obj[key]}`)
//     }
    
// }

// console.log(Object.keys(obj).length)