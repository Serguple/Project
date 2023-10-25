"use strict";

function fib(n) {
    let arr = [];
    
    let result = "";
    
    if (!Number.isInteger(n) || isNaN(n)) {
        "Произошла ошипка";
    } else {
        for (let i = 0; i <= n-1; i++) {
            if (n === 0) {
                return result;
            }
            if (i === 0 || i === 1) {
                arr[i] = i;
                result += `${i} `;
            }
            else {
                arr[i] = arr[i-1] + arr[i-2];
                result += `${arr[i]} `;
            }
            
        }
    }
    
    return result.slice(0, result.length-1);
}

console.log(fib(69));