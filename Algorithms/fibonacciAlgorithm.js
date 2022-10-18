function fibonacciRecursive(n) { //O(2^n)
    if(n<2) return n;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

function fibonacciIterative(n) { //O(n)
    let sum1 = 1, sum2 = 0, temp;
    if(n<=1) return sum2; 
    for(let i = 1;i<n;i++) {
        temp = sum1;
        sum1 += sum2;
        sum2 = temp;
    }
    return sum1;
}

console.log(fibonacciIterative(50));
console.log(fibonacciRecursive(5));    