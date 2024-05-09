
function timeConversion(s) {
  // Extract the period (AM or PM) and remove it from the time string
  const period = s.slice(-2);
  const time = s.slice(0, -2);

  // Split the time into hours, minutes, and seconds
  let [hours, minutes, seconds] = time.split(':');

  if (period === 'AM') {
      // Convert "12 AM" to "00"
      if (hours === '12') {
          hours = '00';
      }
  } else if (period === 'PM') {
      // Convert "1 PM" to "13", ..., "11 PM" to "23", "12 PM" stays "12"
      if (hours !== '12') {
          hours = String(parseInt(hours, 10) + 12);
      }
  }

  // Reconstruct the time in military format
  return `${hours}:${minutes}:${seconds}`;
}

// Example usage:
console.log(timeConversion('12:01:00PM')); // '12:01:00'
console.log(timeConversion('12:01:00AM')); // '00:01:00'
