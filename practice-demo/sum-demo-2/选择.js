// 用循环实现 sort

let sort = (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    let index = minIndex(numbers.slice(i)) + i;

    if (index !== i) {
      swap(numbers, index, i);
    }
  }
  return numbers;
};

let swap = (arry, i, j) => {
  let temp = arry[i];
  arry[i] = arry[j];
  arry[j] = temp;
};

let minIndex = (numbers) => {
  let index = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < numbers[index]) {
      index = i;
    }
  }
  return index;
};
