import {fruits} from './foods.js';
import { choice, remove } from './helpers';

let randomFruit = choice(fruits);
console.log(`I'd like one ${randomFruit} please.`);
console.log(`Here you go: ${randomFruit}.`);
console.log(`Delicious! May I have another?`);
let remainingFruits = remove(fruits, randomFruit);
console.log(`I’m sorry, we’re all out. We have ${remainingFruits} left.`)