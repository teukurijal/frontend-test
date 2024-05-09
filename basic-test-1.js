function miniMaxSum(arr) {
  // Sort the array 
  arr.sort((a, b) => a - b);
  
  // Calculate the minimum sum 
  let minSum = arr[0] + arr[1] + arr[2] + arr[3];
  
  // Calculate the maximum sum
  let maxSum = arr[1] + arr[2] + arr[3] + arr[4];
  
  // Print the results
  return `${minSum}, ${maxSum}`
}

// usage
const arr = [1, 2, 3, 4, 5];

console.log(miniMaxSum(arr))
