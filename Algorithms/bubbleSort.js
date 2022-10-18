const numbers = [99,44,6,2,1,5,63,87,283,4,0];

function bubbleSort(num) {
    let tmp;
    for(let i = num.length;i>0;i--) {
        let k = 0;
        for(let j = 1;j<i;j++) {
            if(num[k] > num[j]) {
                tmp = num[j];
                num[j] = num[k];
                num[k] = tmp;    
            }
            k++;
        }
    }
    return num
}

console.log(bubbleSort(numbers));