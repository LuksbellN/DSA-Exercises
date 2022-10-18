const numbers = [99,44,6,2,1,5,63,87,283,4,0];

function insertionSort(num) {
    
    for(let i = 1;i<num.length;i++) {
        for(let j = i-1;j>=0;j--) {
            if(num[j+1] < num[j]) {
                let tmp = num[j+1];
                num[j+1] = num[j];
                num[j] = tmp;
            }
        }
    }
    
    
    return num;
}

console.log(insertionSort(numbers));