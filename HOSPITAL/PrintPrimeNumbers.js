function primeNumber(n) {
  if (n == 0 || n == 1) {
    return false;
  }
  let ans = [];
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime == true) {
      ans.push(i);
    }
  }
  return ans;
}
console.log(primeNumber(20));
