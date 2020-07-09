let minOf1 = (numbers) => (numbers[0] < numbers[1] ? numbers[0] : numbers[1]);

let sort1 = ([a, b]) => (a > b ? [b, a] : [a, b]);

let min = (numbers) => {
  if (numbers.length > 2) {
    return min([numbers[0], min(numbers.slice(1))]);
  } else {
    return Math.min.apply(null, numbers);
  }
};

let minIndex = (numbers) => numbers.indexOf(min(numbers));

let sort = (numbers) => {
  if (numbers.length > 2) {
    let index = minIndex(numbers);
    let min = numbers[index];
    console.log(min);
    numbers.splice(index, 1);
    return [min].concat(sort(numbers));
  } else {
    console.log(numbers);
    return numbers[0] < numbers[1] ? numbers : numbers.reverse();
  }
};
