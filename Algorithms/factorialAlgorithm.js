function factorialRecursive(num) {
    if(num === 0) return 1;
    return num * factorialRecursive(--num);
}

function factorialIterative(num) {
    let res = 1;
    for(let i = 1; i<=num;i++) {
        res *= i;
    }
    return res
}

console.log(factorialIterative(0));
console.log(factorialRecursive(5));