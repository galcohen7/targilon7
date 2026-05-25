async function level3() {
console.log(1);
await new Promise((resolve,reject) => {
console.log(2)
resolve()
});
console.log(3);
}
async function level2() {
console.log(4);
await level3();
console.log(5);
}
async function level1() {
console.log(6);
level2();
console.log(7);
}
level1();

// Explanation: This time level1 calls level2 without the await keyword so it does not wait for it to finish.
// After level2 starts and prints 4 1 and 2 it pauses.
// Because level1 is not waiting it immediately moves to the next line and prints 7.
// Finally the paused functions finish in the background printing 3 and then 5.