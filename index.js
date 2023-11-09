main(10);

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    const isDevBy3 = i / 3;
    const isDevBy5 = i / 5;

    if (isFloat(isDevBy3) && isFloat(isDevBy5)) {
      console.log(i);
    } else if (!isFloat(isDevBy3) && isFloat(isDevBy5)) {
      console.log("Fizz");
    } else if (isFloat(isDevBy3) && !isFloat(isDevBy5)) {
      console.log("Buzz");
    } else if (!isFloat(isDevBy3) && !isFloat(isDevBy5)) {
      console.log("FizzBuzz");
    }
  }
}

function main(num) {
  const n = parseInt(num);
  console.log(countPrimes2(n));
  // fizzBuzz(n);
}

// function isFloat(number) {
//   return Number(number) === number && number % 1 !== 0;
// }

function countPrimes1(n) {
  const primeArray = [];
  for (var i = 2; i < n; i++) {
    let dividedCount = 0;
    for (let j = 2; j <= n; j++) {
      if (j > i) {
        if (dividedCount === 1) {
          primeArray.push(i);
          // console.log(primeArray);
        }
        break;
      }

      if (dividedCount > 1) {
        // console.log("I'm breaked");
        break;
      }

      if (!isFloat(i / j)) {
        dividedCount++;
      }
    }
  }

  return primeArray.length;
}

function countPrimes2(n) {
  let seen = new Uint8Array(n),
    ans = 0;
  console.log(seen);
  for (let num = 2; num < n; num++) {
    if (seen[num]) continue;
    ans++;
    for (let mult = num * num; mult < n; mult += num) seen[mult] = 1;
  }
  return ans;
}

function isFloat(num) {
  return (num + "").includes(".");
}
