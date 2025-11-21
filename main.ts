/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-11-18
* @fileoverview this program coverts cents into dollars and
*/
const cents = 327
const dollars = Math.round(cents/100)
console.log("Please enter amount of cents:")

console.log(cents + " cents is equal to " + dollars + " dollars and " + ((cents/100) - dollars)*100 + " cents")

console.log(dollars)