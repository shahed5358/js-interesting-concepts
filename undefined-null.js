/*
undefined
1. variable value not assigned 
2. function but didn't write return anything
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array element out of range
7. accessing deleted array element 
8. explicitly set value to undefined
*/
let first;
// console.log(first);
function second(x, y) {
    const sum = x + y;
    // document.getElementById('sum')
}
const result = second(3, 4);
// console.log(result);

function add(a, b) {
    const sum = a + b;
    if (b < 10) {
        return;
    }
    const fun = a * b;
    return sum;
}
const fourth = add(2, 7);
// console.log(fourth);

function fifth(a, b) {
    // console.log(a, b);
    const result = a * b;
    return result;
}
fifth(2);

const sixth = { name: 'sogir', age: 15, location: 'bangladesh' };
// console.log(sixth.phone);

const seventh = [54, 54, 55, 676];
// console.log(seventh[4]);
delete seventh[2];
// console.log(seventh[2]);

const eighth = undefined;
// console.log(eighth);

const myObj = { name: 'samad', profession: null }


