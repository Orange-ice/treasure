// for 循环实现
let array = [1, 5, 2, 3, 4, 5, 2, 3, 1, 3, 4]

function unique(x) {
    let arr = []
    for (let i = 0; i < x.length; i++) {
        if (arr.indexOf(x[i]) === -1) {
            arr.push(x[i])
        }
    }
    return arr
}


// Map
function unique2(arr) {
    let hashMap = new Map()
    let result = []
    for(let i=0;i<arr.length;i++){
        if(!hashMap.has(arr[i])){
            hashMap.set(arr[i])
            result.push(arr[i])
        }
    }
    return result
}

//Set
function unique3(arr) {
    return Array.from(new Set(arr))
}
