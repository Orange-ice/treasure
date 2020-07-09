let findMost = (arr) => {
    let hashTable = {},
        max = 0
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in hashTable)) {
            hashTable[arr[i]] = 1;
        } else {
            hashTable[arr[i]] += 1;
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let maxVal = 0
    for (let j = 0; j <= max; j++) {
        if (j in hashTable) {
            if (hashTable[j] > maxVal) {
                maxVal = hashTable[j]
            }
        }
    }
    for (let j = 0; j <= max; j++) {
        if(hashTable[j] === maxVal){
            console.log(j,`${maxVal}次`)
        }
    }
};