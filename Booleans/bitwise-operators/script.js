//Bitwise operators in JavaScript are special operators that work on the binary representations of numbers.
// & put 1 on the binary with both ones
let a = 5; // binary: 101
let b = 7; //binary 0111
console.log(a & b);
/*Bitwise OR Operator. Returns a 1 in each bit position where theres 1
 */
a = 4; // 100
b = 5; // 101
console.log(a | b); // 101 ,5

/*Bitwise XOR  ^ Returns 1 in each nit position for which the corresponding bits of either, but not both, operands are 1
100
101
output: 001
*/
console.log(a ^ b); //1

//left shift << and right shift >> effectively multiplying the number by 2
let z = 5; // Binary: 101
console.log(z >> 1); // Output: 2 (Binary: 10)
