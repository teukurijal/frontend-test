
function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;
  const n = ary.length;

  // Count positive, negative, and zero elements
  for (let num of ary) {
      if (num > 0) {
          positiveCount++;
      } else if (num < 0) {
          negativeCount++;
      } else {
          zeroCount++;
      }
  }

  // Calculate and format the ratios
  let positiveRatio = (positiveCount / n).toFixed(6);
  let negativeRatio = (negativeCount / n).toFixed(6);
  let zeroRatio = (zeroCount / n).toFixed(6);

  // Print the results
  return `${positiveRatio}, ${negativeRatio},  ${zeroRatio}`
}

// Example usage:
const arr = [1, 1, 0, -1, -1];
console.log(plusMinus(arr))
