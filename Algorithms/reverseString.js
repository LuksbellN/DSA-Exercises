function reverseString(str) {
    if(str.length === 1) return str;
    return str.substr(str.length-1) + reverseString(str.substr(0,str.length-1));
}

console.log(reverseString('yoyo mastery'));