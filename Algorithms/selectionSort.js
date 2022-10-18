const numbers = [99,44,6,2,1,5,63,87,283,4,0];

function selectionSort(num) {
    for(let i = 0;i < num.length;i++) {
        let short = i;
        for(let j = i;j < num.length; j++) {
            if(num[short]>num[j]) {
                short = j;
            }
        }
        let tmp = num[i];
        num[i] = num[short];
        num[short] = tmp;
    }
    return num
}

console.log(selectionSort(numbers));