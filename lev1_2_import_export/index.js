import { names, numbers } from "./data.js"
import { firstElement } from "./function.js"
import { SliceElement } from "./function.js"
import { popElement } from "./function.js"
import { SliceFirstElement } from "./function.js";

import { removeName } from "./function.js";

import { newNumbers } from "./function.js"

import { sumArray } from "./function.js"



console.log(firstElement(names));
// console.log(firstElement(numbers));

console.log(SliceElement(names));
// console.log(SliceElement(numbers));

console.log(popElement([...names]));
// console.log(popElement(numbers));

console.log(SliceFirstElement(names));
console.log(SliceFirstElement(numbers));

console.log(removeName(numbers, "Simon"));
console.log(removeName(numbers, 1));

console.log(newNumbers(numbers));

console.log(sumArray(numbers));

